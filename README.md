# Parth's Portfolio Website

Welcome to my personal portfolio website! This is a showcase of my skills, and projects in the field of Software Development. <br/>
Link- [parthlathiya.wiki](http://65.2.124.171/)
<br/> <br/>
## Website Preview
![image](preview.png)


## Features

- **Single Page Portfolio:** The portfolio is designed as a single page, offering convenient navigation to various sections, including:
    - **Projects:** A comprehensive display of my key projects, demonstrating my technical skills and creativity.
    - **About:** An in-depth profile providing insights into my background and interests. This section also includes a link to my **Resume**.
    - **Skills:** A list of all my technical skills, including the programming languages, libraries, frameworks, and platforms I have worked with.
    - **Contact:** A section to connect with me for potential collaborations, job opportunities, or any other inquiries.

- **Tilt Hover Effect:** Implemented the [`react-parallax-tilt`](https://www.npmjs.com/package/react-parallax-tilt) library to apply a tilt hover effect on the React components, such as project images, adding an interactive touch to the portfolio.

- **Icons Integration:** Leveraged [`react-icons`](https://react-icons.github.io/react-icons/) to incorporate various icons throughout the website, enhancing the visual appeal and providing intuitive cues for different sections.

- **Animated Cursor:** Utilized [`react-animated-cursor`](https://www.npmjs.com/package/react-animated-cursor) to apply an animated cursor, creating a dynamic and engaging user experience.

- **Dynamic Alerts:** Incorporated [`react-toastify`](https://www.npmjs.com/package/react-toastify) to display animated and appealing alerts, ensuring a user-friendly interface and effective communication with the visitors.


## Usage

Feel free to explore the website to gain insight into my skills, and projects. You can navigate through the pages using the navigation bar. If you find the website useful, consider starring this repository to show your support.


## Feedback and Suggestions

I am open to any valuable feedback or suggestions that could help improve this portfolio website. Please feel free to open an issue in the repository to share your thoughts and ideas.

⭐ Don't forget to **star this repository** if you find it useful!


### Run the Project
```bash
sudo apt update && sudo apt upgrade -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install --lts

npm install -g pm2

npm install

npm run build

PORT=80 pm2 start npm --name "your-app-name" -- start

pm2 startup

pm2 save

pm2 logs


```


# Networking Setup for Next.js Deployment on EC2

This guide outlines the steps to configure the networking setup required to host your **Next.js** application on an **EC2 instance** and serve it through your custom domain (`parthlathiya.wiki`).

---

## Prerequisites

1. **Domain**:
   - Register your custom domain (e.g., `parthlathiya.wiki`) with a registrar like Namecheap, GoDaddy, or Google Domains.

2. **EC2 Instance**:
   - Launch an EC2 instance (Ubuntu or Amazon Linux recommended).
   - Ensure the instance has a public IP address.

3. **Security Group**:
   - Configure the security group for your EC2 instance:
     - **Allow port 22** for SSH.
     - **Allow port 80** for HTTP.
     - **Allow port 443** for HTTPS.

---

## Step 1: Configure the Domain DNS

1. **Access DNS Settings**:
   - Log in to your domain registrar.
   - Navigate to the DNS management section.

2. **Add an A Record**:
   - **Type**: A
   - **Name**: `@`
   - **Value**: Public IP of your EC2 instance (e.g., `123.45.67.89`).
   - **TTL**: 3600 (default).

3. **Optional: Add a CNAME Record for `www`**:
   - **Type**: CNAME
   - **Name**: `www`
   - **Value**: `parthlathiya.wiki`.
   - **TTL**: 3600 (default).

4. **Save Changes**.

---


## Resize the Partition (if needed)

Extend the Partition: Use growpart to extend the partition to use the full disk:

```bash
sudo growpart /dev/xvda 1
```

Replace /dev/xvda with the actual disk identifier from the lsblk output, if different.
Resize the Filesystem:

For ext4 filesystem:
```bash
sudo resize2fs /dev/xvda1
```

For XFS filesystem:
```bash
sudo xfs_growfs /
```