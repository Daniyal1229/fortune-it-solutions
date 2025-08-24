# FORTUNE IT SOLUTIONS (CCTV) - Website

A modern, responsive website for FORTUNE IT SOLUTIONS, a CCTV and security solutions provider located in Bangalore, Karnataka, India.

## 🚀 Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Navigation**: Easy-to-use navigation with active state indicators
- **Product Catalog**: Comprehensive product listing with search and filter functionality
- **Services Overview**: Detailed service offerings with feature lists
- **Contact Information**: Complete contact details with embedded Google Maps
- **Professional Styling**: Corporate blue and gray color scheme

## 📱 Pages

1. **Home Page**: Hero section, company overview, and key features
2. **Services Page**: Detailed service offerings with descriptions and features
3. **Products Page**: Product catalog with search and category filtering
4. **Contact Page**: Contact information, business hours, and location map

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons
- **Responsive Design** with mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fortune-it-solutions
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
fortune-it-solutions/
├── src/
│   ├── components/
│   │   └── Navbar.tsx          # Navigation component
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── Services.tsx        # Services page
│   │   ├── Products.tsx        # Products page
│   │   └── Contact.tsx         # Contact page
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx               # Entry point
│   └── index.css              # Tailwind CSS imports
├── public/                    # Static assets
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Design Features

- **Professional Color Scheme**: Blue (#2563eb) and gray tones
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Modern Typography**: Clean, readable fonts

## 📞 Contact Information

**FORTUNE IT SOLUTIONS (CCTV)**
- **Location**: Bangalore, Karnataka, India
- **Phone**: +91 98765 43210 / +91 98765 43211
- **Email**: info@fortuneitsolutions.com
- **Business Hours**: Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#2563eb', // Main blue color
      'secondary': '#64748b', // Gray color
    }
  }
}
```

### Content
- Update company information in respective page components
- Modify product catalog in `src/pages/Products.tsx`
- Update services in `src/pages/Services.tsx`
- Change contact details in `src/pages/Contact.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Netlify**: Drag and drop the `dist` folder
2. **Vercel**: Connect your repository for automatic deployment
3. **GitHub Pages**: Use the `dist` folder as the source
4. **AWS S3**: Upload the `dist` folder contents

## 📄 License

This project is created for FORTUNE IT SOLUTIONS (CCTV). All rights reserved.

## 🤝 Support

For technical support or questions about the website, please contact the development team.

---

**FORTUNE IT SOLUTIONS (CCTV)** - Your Trusted Partner in Security & Surveillance Solutions
