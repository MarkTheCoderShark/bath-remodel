import { Link } from 'react-router-dom';
import { allServiceAreas } from '../data/relatedServices';

export default function OtherAreas({ currentPath }) {
  const others = allServiceAreas.filter((a) => a.path !== currentPath);

  if (others.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-limestone">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
          We Also Serve
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-8">
          Other Areas We Serve
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {others.map((area) => (
            <Link
              key={area.path}
              to={area.path}
              className="group flex items-center gap-3 bg-limestone-light border border-border rounded-2xl px-5 py-4 hover:shadow-soft transition-shadow duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              <span className="text-charcoal font-semibold text-sm group-hover:text-brass transition-colors duration-200">
                {area.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
