import { FlipWords } from 'components/text-flip';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  const words = ['better', 'cute', 'beautiful', 'modern'];

  return (
    <div className="flex h-[40rem] items-center justify-center px-4">
      <div className="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
