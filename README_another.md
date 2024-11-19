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

bash
Copy code
sudo systemctl status nginx
If not, start and enable it:

bash
Copy code
sudo systemctl start nginx
sudo systemctl enable nginx
2. Build Your React Application
If not already built, navigate to your React project directory on the EC2 instance:

bash
Copy code
cd /Portfolio
npm install
npm run build
This creates a build folder containing the static files.

3. Move Build Files to Nginx's Directory
Copy the build folder to a directory accessible by Nginx (e.g., /var/www/Portfolio):

bash
Copy code
sudo mkdir -p /var/www/Portfolio
sudo cp -r /Portfolio/build/* /var/www/Portfolio/
Set permissions for the directory:

bash
Copy code
sudo chown -R www-data:www-data /var/www/Portfolio
sudo chmod -R 755 /var/www/Portfolio
4. Configure Nginx
Create a new Nginx configuration file for the React app:

bash
Copy code
sudo nano /etc/nginx/sites-available/Portfolio
Add the following content:

nginx
Copy code
server {
    listen 80;

    server_name your-domain-name.com; # Replace with your domain or EC2 public IP

    root /var/www/Portfolio;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_page 404 /index.html;

    location ~* \.(?:ico|css|js|gif|jpe?g|png|svg|woff2?|eot|ttf|otf)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }

    location ~ /\.ht {
        deny all;
    }
}
Save and exit the file.

Enable the configuration:

bash
Copy code
sudo ln -s /etc/nginx/sites-available/Portfolio /etc/nginx/sites-enabled/
Disable the default configuration:

bash
Copy code
sudo rm /etc/nginx/sites-enabled/default
Test the Nginx configuration:

bash
Copy code
sudo nginx -t
If no errors are reported, reload Nginx:

bash
Copy code
sudo systemctl reload nginx
5. Allow HTTP Traffic
Make sure your EC2 instance's security group allows traffic on port 80:

Go to the AWS Management Console.
Navigate to EC2 > Security Groups.
Edit the inbound rules to allow HTTP (port 80) traffic.
6. Access the App
If you have a domain, access your app at http://your-domain-name.com.
Alternatively, use your EC2 public IP: http://your-ec2-public-ip.
7. Optional: Enable HTTPS
To secure your application with SSL, follow these steps:

Install Certbot:

bash
Copy code
sudo apt install certbot python3-certbot-nginx -y
Obtain and configure an SSL certificate:

bash
Copy code
sudo certbot --nginx -d your-domain-name.com
Test automatic renewal:

bash
Copy code
sudo certbot renew --dry-run
Nginx will automatically redirect HTTP to HTTPS after the configuration.