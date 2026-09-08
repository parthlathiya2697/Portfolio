- name: Deploy Frontend to EC2
   run: |
      ssh -o StrictHostKeyChecking=no ubuntu@${{ secrets.EC2_PUBLIC_IP }} << 'EOF'
      cd Portfolio
      git checkout origin production
      git pull origin production
      npm install
      npm run build  # Add this line to build the Next.js app
      # Check if the app is running and stop it if it is
      if pm2 list | grep -q "app-portfolio"; then
      pm2 stop app-portfolio
      fi
      # Set PORT environment variable before starting
      export PORT=8000
      pm2 start "npm run dev -- --host 0.0.0.0 --port 8000" --name "app-portfolio"
      pm2 save
      EOF


<!-- Security scan triggered at 2026-08-31 18:23:07 -->

<!-- Security scan triggered at 2026-09-05 07:32:43 -->

<!-- Security scan triggered at 2026-09-08 02:10:29 -->