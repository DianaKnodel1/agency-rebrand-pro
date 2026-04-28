# Deploy auf VPS (statische SPA via nginx)

Die App wird als reine Client-SPA gebaut – kein Node-Server, kein PM2 nötig.
Die bestehende Lovable-/Cloudflare-Konfiguration in `vite.config.ts` bleibt
unangetastet (damit der Lovable-Editor weiter funktioniert). Für das VPS-Deploy
nutzen wir eine separate Config: `vite.config.vps.ts`.

## 1. Build erzeugen

```bash
npm ci
npm run build:vps
```

Output: `dist/index.html` + `dist/assets/*`.

## 2. Auf den VPS spielen

```bash
rsync -avz --delete dist/ user@vps:/var/www/kadermarketing/
```

## 3. nginx-Konfiguration

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name kadermarketing-agentur.de www.kadermarketing-agentur.de;
    return 301 https://kadermarketing-agentur.de$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name kadermarketing-agentur.de;

    ssl_certificate     /etc/letsencrypt/live/kadermarketing-agentur.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/kadermarketing-agentur.de/privkey.pem;

    root /var/www/kadermarketing;
    index index.html;

    # Hashed Assets aggressiv cachen
    location /assets/ {
        access_log off;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA-Fallback: alle Routen auf index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
}
```

TLS einmalig:
```bash
sudo certbot --nginx -d kadermarketing-agentur.de -d www.kadermarketing-agentur.de
```

## PM2?

Wird nicht benötigt – nginx liefert die statischen Dateien direkt aus.
PM2 wäre nur nötig, wenn ein Node-Server (SSR) liefe.
