
#!/bin/bash

# Simple deployment script for GitHub Pages

# Build the application
echo "Building the application..."
npm run build

# Create CNAME file if needed (uncomment and modify the line below with your domain)
# echo "yourdomain.com" > dist/CNAME

# Initialize git in the build directory if it doesn't exist
if [ ! -d "dist/.git" ]; then
  cd dist
  git init
  git checkout -b gh-pages
  git remote add origin $(git config --get remote.origin.url)
  cd ..
else
  cd dist
  cd ..
fi

# Add all files in the build directory
cd dist
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push to the gh-pages branch
git push origin gh-pages --force

echo "Deployment complete! Your site should be available shortly."
