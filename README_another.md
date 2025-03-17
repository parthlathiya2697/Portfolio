# ReactJS Portfolio Deployment on EC2 using Nginx

This guide outlines the steps to deploy a ReactJS frontend application on an EC2 instance using Nginx as the web server. The React project is built and hosted in the `/Portfolio/build` directory.

---

## Prerequisites
1. An Ubuntu-based EC2 instance.
2. Nginx installed on the instance.
3. A ReactJS project built using `npm run build`.
4. SSH access to your EC2 instance.
5. (Optional) A domain name pointed to your EC2 public IP.

---

## Deployment Steps

### 1. **Install Nginx**
Run the following commands to install Nginx:

```bash
sudo apt update
sudo apt install nginx -y
Check if Nginx is running:

sudo systemctl status nginx
If not, start and enable it:

sudo systemctl start nginx
sudo systemctl enable nginx
2. Build Your React Application
If not already built, navigate to your React project directory on the EC2 instance:

cd /Portfolio
npm install
npm run build
This creates a build folder containing the static files.

sudo nano /etc/nginx/sites-available/Portfolio

Add the following content:

server {
    server_name parthlathiya.wiki www.parthlathiya.wiki;

    location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_page 502 /502.html;

    location ~ /\.ht {
        deny all;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/parthlathiya.wiki-0001/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/parthlathiya.wiki-0001/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}
server {
    if ($host = aifashion.parthlathiya.wiki) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name aifashion.parthlathiya.wiki;
    return 404; # managed by Certbot

}

Save and exit the file.

Enable the configuration:

sudo ln -s /etc/nginx/sites-available/Portfolio /etc/nginx/sites-enabled/
Disable the default configuration:

sudo rm /etc/nginx/sites-enabled/default
Test the Nginx configuration:

sudo nginx -t
If no errors are reported, reload Nginx:

sudo systemctl reload nginx
5. Allow HTTP Traffic
Make sure your EC2 instance's security group allows traffic on port 80 for nginx:

Go to the AWS Management Console.
Navigate to EC2 > Security Groups.
Edit the inbound rules to allow HTTP (port 80) traffic.
6. Access the App
If you have a domain, access your app at http://your-domain-name.com.
Alternatively, use your EC2 public IP: http://your-ec2-public-ip.
7. Optional: Enable HTTPS
To secure your application with SSL, follow these steps:

Install Certbot:

sudo apt install certbot python3-certbot-nginx -y
Obtain and configure an SSL certificate:

sudo certbot --nginx -d parthlathiya.wiki
Test automatic renewal:

sudo certbot renew --dry-run
Nginx will automatically redirect HTTP to HTTPS after the configuration.