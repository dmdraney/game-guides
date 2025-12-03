import { getGuideBySlug, getAllGuides } from '@/data/guides';
import GuideViewer from '@/components/GuideViewer';
import { notFound } from 'next/navigation';

// Generate static pages for all guides
export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;  // ← Add await here
  const guide = getGuideBySlug(resolvedParams.slug);
  
  if (!guide) return {};

  return {
    title: `${guide.title} - Guide`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }) {  // ← Add async here
  const resolvedParams = await params;  // ← Add await here
  const guide = getGuideBySlug(resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  return <GuideViewer guide={guide} />;
}