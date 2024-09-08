import Footer from 'components/layout/footer';
import TextAppear from 'components/text-appear';
import { FlipWords } from 'components/text-flip';
import ScrollVideo from 'components/video-scroll-player';
import Image from 'next/image';
import Link from 'next/link';
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
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-10 text-center text-4xl font-bold text-gray-700 md:text-2xl dark:text-neutral-400">
            Our New
            <FlipWords words={words} /> <br />
            Nutrition
          </div>

          <Image src="/static/hero.png" alt={'alt'} width="200" height="400" />
          <Image src="/static/vegan.png" alt={'alt'} width="150" height="100" />
          <div className="mt-10 flex justify-center text-center">
            <Link href="/product/tadm-black">
              <button className="duration-400 transform rounded-lg bg-black px-6 py-2 font-bold text-white transition hover:-translate-y-1">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <TextAppear>Whats inside TADM</TextAppear>
      <ScrollVideo />

      <Footer />
    </>
  );
}
