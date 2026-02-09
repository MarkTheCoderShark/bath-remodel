import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
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
  );
}
