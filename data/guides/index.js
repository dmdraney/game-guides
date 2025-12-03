import bo7Zombies from './bo7-zombies';

// Add new guides here
const guides = [
  bo7Zombies,
];

export function getAllGuides() {
  return guides;
}

export function getGuideBySlug(slug) {
  return guides.find(guide => guide.slug === slug);
}