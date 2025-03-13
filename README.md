
# Developer Portfolio

## Project info

**URL**: https://lovable.dev/projects/f275ae24-5da4-41a5-a580-cf71ff5d3eb4

## How to deploy with your custom domain for free

### GitHub Pages

1. **Create a GitHub repository**:
   - Go to GitHub and create a new repository
   - Push this code to your new repository

2. **Configure GitHub Pages**:
   - Go to your repository's Settings
   - Scroll to GitHub Pages section
   - Select your main branch as source
   - Click "Save"
   - Add your custom domain in the Custom Domain field
   - Check "Enforce HTTPS"

3. **Set up DNS**:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the following DNS records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     Value: 185.199.109.153
     Value: 185.199.110.153
     Value: 185.199.111.153
     ```
     Or if using a subdomain:
     ```
     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```

4. **Build and deploy**:
   ```sh
   # Install dependencies
   npm install
   
   # Build the project
   npm run build
   
   # Deploy (if using gh-pages package)
   npm run deploy
   ```

### Netlify (Alternative)

1. Sign up for Netlify
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add your custom domain in Netlify's domain settings

## How to run locally

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Technologies used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
