# Website Template for Dynamic Config

A simple, ready-to-deploy website template that automatically updates with token information from NodeMatrix workflows. Deploy to Railway in minutes and connect it to your Website Config node.

## Quick Start

### 1. Deploy to Railway

1. Fork or clone this repository
2. Go to [Railway](https://railway.app) and create a new project
3. Connect your GitHub repository
4. Railway will automatically detect Next.js and deploy

### 2. Configure Environment Variables

In Railway dashboard, add these environment variables:

```
NEXT_PUBLIC_API_URL=https://api.nodematrix.one
NEXT_PUBLIC_SITE_URL=https://your-site.railway.app
NEXT_PUBLIC_CHAIN=monad
VERCEL_API_SECRET=your_secret_here
```

### 3. Connect to NodeMatrix

In your NodeMatrix workflow:

1. Add a **Website Config** node
2. Set the **Vercel Site URL** to your Railway site URL (e.g., `https://your-site.railway.app`)
3. Add your **Vercel API Secret** (or Railway API token)
4. Configure token information in your **Token Info** node
5. Run your workflow - the website will update automatically

## Features

- **Automatic Updates**: Website updates automatically when workflow runs
- **Token Information**: Displays token name, symbol, contract address
- **Social Links**: Shows Twitter, Telegram, and website links
- **DEX Integration**: Links to DEX charts and trading
- **Responsive Design**: Works on mobile and desktop
- **Easy Deployment**: One-click Railway deployment

## Project Structure

```
dynamic-website-template/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── api/
│   │       └── update-config/route.ts  # API endpoint for updates
│   ├── components/
│   │   ├── TokenInfo.tsx    # Token information display
│   │   ├── SocialLinks.tsx  # Social media links
│   │   └── ContractInfo.tsx # Contract address and links
│   └── lib/
│       └── config.ts        # Configuration utilities
├── public/                  # Static assets
├── package.json
├── railway.json            # Railway deployment config
└── README.md
```

## How It Works

1. **Deployment**: Website is deployed to Railway
2. **Workflow Execution**: NodeMatrix workflow runs and deploys token
3. **Website Config Node**: Sends token data to website via API
4. **Automatic Update**: Website receives data and updates display
5. **Live Display**: Users see updated token information immediately

## API Endpoint

The website includes an API endpoint at `/api/update-config` that accepts POST requests from the Website Config node:

```json
{
  "tokenName": "My Token",
  "tokenSymbol": "MTK",
  "tokenAddress": "0x...",
  "poolAddress": "0x...",
  "website": "https://example.com",
  "twitter": "https://twitter.com/example",
  "telegram": "https://t.me/example"
}
```

## Customization

### Colors and Branding

Edit `src/app/globals.css` to customize colors and styling.

### Layout

Modify components in `src/components/` to change the layout and information display.

### Additional Features

Add new components and pages as needed. The template is built with Next.js 14 App Router for maximum flexibility.

## Troubleshooting

### Website Not Updating

- Check that Website Config node has correct site URL
- Verify API secret is set correctly
- Check Railway logs for API errors
- Ensure workflow executed successfully

### Missing Token Data

- Verify Token Info node has all required fields
- Check that contract was deployed successfully
- Ensure pool address is set in Run Config

### Build Errors

- Make sure all environment variables are set in Railway
- Check Node.js version (18+ required)
- Review Railway build logs

## Support

For questions or issues:

- Check [NodeMatrix Documentation](https://nodematrix.one/docs)
- Visit [api.nodematrix.one](https://api.nodematrix.one) for API reference
- Open an issue on GitHub

## License

MIT License - use freely for your projects.

