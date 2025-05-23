# Pizza Dashboard

A modern Next.js dashboard application with Google authentication for managing pizza orders.

## Features

- 🔐 **Google OAuth Authentication** - Secure login with Google accounts
- 📊 **Dashboard Overview** - Welcome page with user information and statistics
- 🍕 **Pizza Orders Management** - View, search, filter, and sort pizza orders
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean and intuitive interface built with Tailwind CSS
- 🔒 **Protected Routes** - Dashboard pages are only accessible to authenticated users

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js with Google OAuth
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google OAuth credentials

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd pizza-dashboard
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Configure your environment variables in `.env.local`:
\`\`\`env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
\`\`\`

### Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create an OAuth 2.0 Client ID
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://your-domain.com/api/auth/callback/google` (for production)
6. Copy the Client ID and Client Secret to your `.env.local` file

### Running the Application

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Automatic Deployment

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**:
   - In your Vercel project dashboard, go to Settings → Environment Variables
   - Add the following variables:
     - `NEXTAUTH_URL`: Your production domain (e.g., `https://your-app.vercel.app`)
     - `NEXTAUTH_SECRET`: A secure random string (generate with `openssl rand -base64 32`)
     - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
     - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret

4. **Update Google OAuth Settings**:
   - Go to Google Cloud Console
   - Add your production domain to authorized redirect URIs:
     - `https://your-app.vercel.app/api/auth/callback/google`

5. **Deploy**: Vercel will automatically deploy your application

### Manual Deployment

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add NEXTAUTH_URL
vercel env add NEXTAUTH_SECRET  
vercel env add GOOGLE_CLIENT_ID
vercel env add GOOGLE_CLIENT_SECRET

# Redeploy with environment variables
vercel --prod
\`\`\`

## Live Demo

Once deployed, your application will be available at your Vercel URL with full functionality including:
- Google OAuth authentication
- Protected dashboard routes
- Responsive pizza orders management
- Real-time search and filtering

## Project Structure

\`\`\`
├── app/
│   ├── api/auth/[...nextauth]/     # NextAuth.js API routes
│   ├── dashboard/                  # Protected dashboard pages
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Home/login page
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── auth-provider.tsx           # Session provider wrapper
│   ├── dashboard-layout.tsx        # Dashboard layout with navigation
│   ├── login-page.tsx              # Login page component
│   ├── orders-table.tsx            # Pizza orders table with filtering
│   └── welcome-card.tsx            # Dashboard welcome card
├── lib/
│   ├── auth.ts                     # NextAuth.js configuration
│   ├── mock-data.ts                # Mock pizza orders data
│   └── utils.ts                    # Utility functions
└── middleware.ts                   # Route protection middleware
\`\`\`

## Features Overview

### Authentication
- Google OAuth integration with NextAuth.js
- Automatic redirection for unauthenticated users
- Secure session management
- Loading states and error handling

### Dashboard
- Personalized welcome message with user's Google profile
- Overview statistics cards
- Responsive navigation sidebar
- User profile dropdown with logout functionality

### Pizza Orders
- Comprehensive orders table with mock data
- Search functionality (Order ID, Customer Name, Pizza Type)
- Status filtering (All, Pending, Preparing, Out for Delivery, Delivered, Cancelled)
- Sortable columns (Order ID, Customer Name, Order Date, Status)
- Color-coded status badges
- Responsive table design

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `NEXTAUTH_URL` - Your production domain
- `NEXTAUTH_SECRET` - A secure random string
- `GOOGLE_CLIENT_ID` - Your Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Your Google OAuth client secret

## Third-Party Libraries

- **next-auth** - Authentication
- **@radix-ui/react-*** - UI primitives
- **lucide-react** - Icons
- **tailwindcss** - Styling
- **class-variance-authority** - Component variants
- **tailwind-merge** - Tailwind class merging

## License

This project is for educational/assignment purposes.
