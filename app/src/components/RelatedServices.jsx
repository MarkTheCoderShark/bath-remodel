import { Link } from 'react-router-dom';
import { allServices, relatedServiceMap } from '../data/relatedServices';

export default function RelatedServices({ currentPath }) {
  const relatedPaths = relatedServiceMap[currentPath] || [];
  const related = allServices.filter((s) => relatedPaths.includes(s.path));

  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-limestone-dark">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-brass text-sm font-semibold tracking-widest uppercase mb-3">
          Explore More
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-8">
          Related Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group bg-limestone-light border border-border rounded-2xl p-6 hover:shadow-soft transition-shadow duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
            >
              <h3 className="font-sans text-base font-semibold text-charcoal group-hover:text-brass transition-colors duration-200 mb-2">
                {service.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
