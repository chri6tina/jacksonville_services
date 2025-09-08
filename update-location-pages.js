// Script to update all commercial cleaning location pages with unique content
const fs = require('fs');
const path = require('path');

const locationData = {
  'riverside-avondale': {
    title: 'Riverside Avondale Commercial Cleaning Services Jacksonville FL | Office Cleaning Riverside',
    description: 'Boutique commercial cleaning services in Riverside Avondale Jacksonville FL. Specializing in historic buildings, art galleries, and trendy retail spaces. Trusted by local businesses.',
    keywords: 'Riverside Avondale commercial cleaning Jacksonville, Riverside office cleaning, Avondale retail cleaning, historic building cleaning Jacksonville FL',
    focus: 'Historic district, arts, boutiques, restaurants',
    uniqueServices: ['Historic Building Cleaning', 'Art Gallery Maintenance', 'Boutique Retail Cleaning', 'Restaurant & Cafe Cleaning'],
    stats: { businesses: '75+', years: '8+', satisfaction: '100%', response: '45 min' }
  },
  'mandarin': {
    title: 'Mandarin Commercial Cleaning Services Jacksonville FL | Office Cleaning Mandarin',
    description: 'Family-focused commercial cleaning services in Mandarin Jacksonville FL. Specializing in medical facilities, schools, and family-friendly businesses. Serving Mandarin since 2017.',
    keywords: 'Mandarin commercial cleaning Jacksonville, Mandarin office cleaning, Mandarin medical cleaning, Mandarin school cleaning Jacksonville FL',
    focus: 'Family-friendly, medical, educational, suburban',
    uniqueServices: ['Medical Facility Cleaning', 'Educational Institution Cleaning', 'Family Business Cleaning', 'Suburban Office Cleaning'],
    stats: { businesses: '60+', years: '7+', satisfaction: '100%', response: '25 min' }
  },
  'beaches': {
    title: 'Jacksonville Beaches Commercial Cleaning Services FL | Office Cleaning Beaches',
    description: 'Coastal commercial cleaning services in Jacksonville Beaches FL. Specializing in hospitality, tourism, and beachfront businesses. Serving Atlantic Beach, Neptune Beach, and Ponte Vedra.',
    keywords: 'Jacksonville Beaches commercial cleaning, Atlantic Beach cleaning, Neptune Beach cleaning, Ponte Vedra Beach cleaning Jacksonville FL',
    focus: 'Coastal, hospitality, tourism, beachfront',
    uniqueServices: ['Hotel & Resort Cleaning', 'Beachfront Business Cleaning', 'Tourism Facility Cleaning', 'Coastal Office Cleaning'],
    stats: { businesses: '80+', years: '5+', satisfaction: '100%', response: '35 min' }
  },
  'san-marco': {
    title: 'San Marco Commercial Cleaning Services Jacksonville FL | Office Cleaning San Marco',
    description: 'Historic district commercial cleaning services in San Marco Jacksonville FL. Specializing in historic buildings, art galleries, and cultural venues. Preserving San Marco\'s charm.',
    keywords: 'San Marco commercial cleaning Jacksonville, San Marco office cleaning, historic building cleaning, art gallery cleaning Jacksonville FL',
    focus: 'Historic, cultural, arts, boutique',
    uniqueServices: ['Historic Building Care', 'Art Gallery Maintenance', 'Cultural Venue Cleaning', 'Boutique Business Cleaning'],
    stats: { businesses: '65+', years: '6+', satisfaction: '100%', response: '30 min' }
  },
  'orange-park': {
    title: 'Orange Park Commercial Cleaning Services Jacksonville FL | Office Cleaning Orange Park',
    description: 'Suburban commercial cleaning services in Orange Park Jacksonville FL. Specializing in shopping centers, medical facilities, and suburban offices. Serving Orange Park since 2016.',
    keywords: 'Orange Park commercial cleaning Jacksonville, Orange Park office cleaning, Orange Park mall cleaning, suburban business cleaning Jacksonville FL',
    focus: 'Suburban, shopping, medical, family',
    uniqueServices: ['Shopping Center Cleaning', 'Medical Facility Cleaning', 'Suburban Office Cleaning', 'Family Business Cleaning'],
    stats: { businesses: '70+', years: '8+', satisfaction: '100%', response: '20 min' }
  },
  'southside': {
    title: 'Southside Commercial Cleaning Services Jacksonville FL | Office Cleaning Southside',
    description: 'Modern commercial cleaning services in Southside Jacksonville FL. Specializing in tech companies, corporate offices, and modern business parks. Serving the JTB corridor.',
    keywords: 'Southside commercial cleaning Jacksonville, Southside office cleaning, JTB corridor cleaning, tech company cleaning Jacksonville FL',
    focus: 'Modern, tech, corporate, business parks',
    uniqueServices: ['Tech Company Cleaning', 'Corporate Campus Cleaning', 'Modern Office Cleaning', 'Business Park Maintenance'],
    stats: { businesses: '90+', years: '4+', satisfaction: '100%', response: '25 min' }
  },
  'baymeadows': {
    title: 'Baymeadows Commercial Cleaning Services Jacksonville FL | Office Cleaning Baymeadows',
    description: 'Corporate commercial cleaning services in Baymeadows Jacksonville FL. Specializing in corporate centers, medical facilities, and professional services. Serving Baymeadows since 2015.',
    keywords: 'Baymeadows commercial cleaning Jacksonville, Baymeadows office cleaning, corporate center cleaning, medical facility cleaning Jacksonville FL',
    focus: 'Corporate, medical, professional, business',
    uniqueServices: ['Corporate Center Cleaning', 'Medical Facility Cleaning', 'Professional Office Cleaning', 'Business District Maintenance'],
    stats: { businesses: '85+', years: '9+', satisfaction: '100%', response: '20 min' }
  }
};

// Function to update a location page
function updateLocationPage(location, data) {
  const filePath = path.join(__dirname, 'app', 'services', 'commercial-cleaning', 'locations', location, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update metadata
  content = content.replace(
    /export const metadata = \{[\s\S]*?\}/,
    `export const metadata = {
  title: '${data.title}',
  description: '${data.description}',
  keywords: '${data.keywords}',
  openGraph: {
    title: '${data.title}',
    description: '${data.description}',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://jacksonvilleservices.com/services/commercial-cleaning/locations/${location}'
  }
}`
  );

  // Update hero stats
  content = content.replace(
    /<div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">\d+\+<\/div>\s*<div className="text-neutral-200 drop-shadow-md">\w+ Businesses<\/div>/,
    `<div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">${data.stats.businesses}</div>
              <div className="text-neutral-200 drop-shadow-md">${location.charAt(0).toUpperCase() + location.slice(1).replace('-', ' ')} Businesses</div>`
  );

  content = content.replace(
    /<div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24\/7<\/div>\s*<div className="text-neutral-200 drop-shadow-md">Service Available<\/div>/,
    `<div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">${data.stats.years}</div>
              <div className="text-neutral-200 drop-shadow-md">Years Serving Area</div>`
  );

  content = content.replace(
    /<div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%<\/div>\s*<div className="text-neutral-200 drop-shadow-md">Satisfaction Rate<\/div>/,
    `<div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">${data.stats.satisfaction}</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction Rate</div>`
  );

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${location} page`);
}

// Update all location pages
Object.entries(locationData).forEach(([location, data]) => {
  updateLocationPage(location, data);
});

console.log('All location pages updated with unique content!');
