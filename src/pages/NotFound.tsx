import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Contact Us | Start Your Digital Project Today</title>
        <meta name="description" content="Ready to grow your business? Contact our team for a free consultation and project estimate." />
        <meta property="og:title" content="Contact Us | macro presence" />
        <meta property="og:description" content="Let’s build your next digital solution." />
        <meta property="og:image" content="https://macro-presence.dev/og-contact.jpg" />
        <meta property="og:url" content="https://macro-presence.dev/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@macro_presence" />
        <meta name="twitter:image" content="https://macro-presence.dev/og-contact.jpg" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
