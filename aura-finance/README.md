# AuraFinance: AI-Driven Wealth Manager

AuraFinance is a next-generation personal finance platform designed to democratise financial literacy through intelligent automation. By combining machine learning with intuitive design, the platform transforms complex financial data into actionable insights that empower users to take control of their financial future.

## ✨ Enhanced Features

### 🎨 Modern UI/UX with Animations
- **Framer Motion Animations**: Smooth, professional animations throughout the application
- **Tailwind CSS**: Modern styling with gradients, glassmorphism effects, and responsive design
- **Interactive Elements**: Hover effects, loading states, and micro-interactions
- **Dark Mode Support**: Beautiful dark theme for the dashboard

### 🚀 Key Features
- **Expense Tracking**: Automate expense tracking with machine learning algorithms
- **Predictive Insights**: Get predictive savings insights using advanced ML
- **Secure Integration**: Secure financial data integration via Plaid API
- **AI Analytics**: Advanced analytics for better financial decisions
- **Budget Management**: Monitor spending with intelligent budget controls
- **Real-time Dashboard**: Live financial metrics with animated charts

### 🎯 User Experience Enhancements
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with proper focus states and screen reader support
- **Performance**: Optimized animations and lazy loading for smooth performance
- **Progressive Enhancement**: Works without JavaScript for basic functionality

## 🛠 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Animations**: Framer Motion, CSS Animations
- **Icons**: Lucide React
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Security**: Plaid API for financial data integration
- **Deployment**: Ready for Vercel/Netlify deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aura-finance
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   cd ../aura-finance
   ```

4. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Configure your Plaid API keys and database connection

5. **Run the development servers**

   **Frontend:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

   **Backend:**
   ```bash
   cd ../backend
   npm start
   ```
   API available at [http://localhost:5000](http://localhost:5000)

## 📱 Pages & Features

### 🏠 Home Page (`/`)
- Hero section with animated gradients
- Feature showcase with interactive cards
- Testimonials section
- Call-to-action with smooth animations

### 💰 Pricing Page (`/pricing`)
- Three-tier pricing with animated cards
- Popular plan highlighting
- Interactive feature lists
- Contact form for enterprise inquiries

### 📊 Dashboard (`/dashboard`)
- Real-time financial metrics
- Animated charts and graphs
- Spending category breakdown
- Recent transactions with icons
- Quick action buttons

### 🔐 Authentication
- **Login** (`/auth/login`): Enhanced form with animations
- **Signup** (`/auth/signup`): User registration flow
- Social login options (Google, Twitter)
- Password visibility toggle
- Form validation with feedback

### 🛡️ Security Page (`/security`)
- Security features overview
- Data protection information

### 🎯 Onboarding (`/onboard`)
- User onboarding flow
- Step-by-step setup process

## 🎨 Design System

### Colors
- **Primary**: Blue to Purple gradients
- **Secondary**: Emerald to Teal gradients
- **Accent**: Rose to Pink gradients
- **Neutral**: Slate color palette

### Animations
- **Page Transitions**: Smooth fade and slide effects
- **Hover States**: Scale and color transitions
- **Loading States**: Spinners and skeleton loaders
- **Micro-interactions**: Button presses, icon rotations

### Typography
- **Headings**: Gradient text effects
- **Body**: Clean, readable fonts
- **Interactive**: Hover and focus states

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Project Structure

```
aura-finance/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── pricing/          # Pricing page
│   ├── dashboard/        # Dashboard pages
│   ├── auth/             # Authentication pages
│   └── ...
├── components/           # Reusable components
├── lib/                 # Utility functions
└── public/              # Static assets

backend/
├── server.js           # Express server
├── package.json        # Backend dependencies
└── ...
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Backend (Railway/Heroku)
1. Set up your preferred hosting service
2. Configure environment variables
3. Deploy from GitHub

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support, email support@aurafinance.com or join our Discord community.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion

## Project Structure

- `app/` - Next.js app router pages
  - `page.tsx` - Landing page
  - `auth/` - Authentication pages
  - `dashboard/` - Main dashboard
  - `pricing/` - Pricing plans
  - `security/` - Security documentation
- `backend/` - Express.js API server

## Development Phases

1. **Discovery** (Days 1-7): Wireframes and database schema
2. **MVP** (Days 8-21): Express server, authentication, Plaid integration
3. **AI** (Days 22-35): Spending forecast engine and UI/UX refinement

## Contributing

Contributions are welcome! Please read our contributing guidelines.

## License

This project is licensed under the ISC License.
