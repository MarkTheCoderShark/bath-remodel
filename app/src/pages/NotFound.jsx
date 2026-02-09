import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Luxe Bath & Kitchen</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Luxe Bath & Kitchen for premium bathroom and kitchen remodeling in Sacramento." />
        <link rel="canonical" href="https://luxebathkitchen.com/404" />
        <meta property="og:title" content="Page Not Found | Luxe Bath & Kitchen" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to Luxe Bath & Kitchen for premium bathroom and kitchen remodeling in Sacramento." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxebathkitchen.com/404" />
        <meta property="og:image" content="https://luxebathkitchen.com/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page Not Found | Luxe Bath & Kitchen" />
        <meta name="twitter:description" content="The page you're looking for doesn't exist. Return to Luxe Bath & Kitchen for premium bathroom and kitchen remodeling in Sacramento." />
        <meta name="twitter:image" content="https://luxebathkitchen.com/og-default.jpg" />
      </Helmet>
      <section className="py-24 md:py-32">
      <div className="max-w-[600px] mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
          Page Not Found
        </h1>
        <p className="text-muted text-base md:text-lg mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Let us get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block bg-brass text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brass-hover transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
        >
          Back to Home
        </Link>
      </div>
      </section>
    </>
  );
}
