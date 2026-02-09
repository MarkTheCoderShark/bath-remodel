export const allServices = [
  { name: 'Bathroom Remodeling', path: '/services/bathroom-remodeling', description: 'Complete bathroom transformations from first sketch to final grout line.' },
  { name: 'Kitchen Remodeling', path: '/services/kitchen-remodeling', description: 'Thoughtful kitchen renovations with quality materials and expert craftsmanship.' },
  { name: 'Walk-In Showers', path: '/services/walk-in-showers', description: 'Custom frameless glass showers with premium tile and spa-worthy fixtures.' },
  { name: 'Tub-to-Shower Conversions', path: '/services/tub-to-shower-conversions', description: 'Replace your unused bathtub with a spacious, modern walk-in shower.' },
  { name: 'Tile & Stone Work', path: '/services/tile-stone-work', description: 'Expert tile and natural stone installation for floors, walls, and showers.' },
  { name: 'Vanity & Countertops', path: '/services/vanity-countertops', description: 'Custom vanities and precision-fitted countertops for every bathroom style.' },
];

export const relatedServiceMap = {
  '/services/bathroom-remodeling': ['/services/walk-in-showers', '/services/tile-stone-work', '/services/vanity-countertops'],
  '/services/kitchen-remodeling': ['/services/tile-stone-work', '/services/vanity-countertops'],
  '/services/walk-in-showers': ['/services/bathroom-remodeling', '/services/tub-to-shower-conversions', '/services/tile-stone-work'],
  '/services/tub-to-shower-conversions': ['/services/walk-in-showers', '/services/bathroom-remodeling'],
  '/services/tile-stone-work': ['/services/bathroom-remodeling', '/services/kitchen-remodeling', '/services/walk-in-showers'],
  '/services/vanity-countertops': ['/services/bathroom-remodeling', '/services/kitchen-remodeling'],
};

export const allServiceAreas = [
  { name: 'Sacramento', path: '/service-areas/sacramento' },
  { name: 'Elk Grove', path: '/service-areas/elk-grove' },
  { name: 'Roseville', path: '/service-areas/roseville' },
  { name: 'Folsom', path: '/service-areas/folsom' },
  { name: 'Rancho Cordova', path: '/service-areas/rancho-cordova' },
  { name: 'Citrus Heights', path: '/service-areas/citrus-heights' },
  { name: 'Rocklin', path: '/service-areas/rocklin' },
  { name: 'Davis', path: '/service-areas/davis' },
];
