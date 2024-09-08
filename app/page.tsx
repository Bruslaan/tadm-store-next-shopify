import TextAppear from 'components/text-appear';
import { FlipWords } from 'components/text-flip';
import ScrollVideo from 'components/video-scroll-player';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  const words = ['better', 'cute', 'beautiful', 'modern'];

  return (
    <>
      <div className="flex h-[100vh] items-center justify-center px-4">
        <div className="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Build
          <FlipWords words={words} /> <br />
          websites with Aceternity UI
        </div>
      </div>

      <TextAppear>Whats inside TADM</TextAppear>
      <ScrollVideo />
    </>
  );
}
