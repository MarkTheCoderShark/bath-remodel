import { Link } from 'react-router-dom';
import StructuredData from './StructuredData';

export default function Breadcrumb({ items }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => {
      const entry = {
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
      };
      if (item.href) {
        entry.item = 'https://luxebathkitchen.com' + item.href;
      }
      return entry;
    }),
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-stone-400" aria-hidden="true">/</span>
              )}
              {index < items.length - 1 ? (
                <Link
                  to={item.href}
                  className="hover:text-stone-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-stone-700 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
