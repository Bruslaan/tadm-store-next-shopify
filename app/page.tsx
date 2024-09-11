import FaqPage from 'components/faq-page';
import Footer from 'components/layout/footer';
import ParallaxComponent from 'components/parallax-effect';
import TestimonialsTW from 'components/testimonals-tailwind';
import TextAppear from 'components/text-appear';
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
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-orange-200 to-white">
        <div className="relative flex flex-col text-center">
          <ParallaxComponent
            rotationSpeed={100}
            className="absolute right-0 z-40 md:-right-20"
            speed={100}
          >
            <Image
              className="custom-bounce w-[7vw] -rotate-45 transition-transform"
              src="/static/capsule.png"
              alt={'alt'}
              width="80"
              height="80"
            />
          </ParallaxComponent>

          <Image
            className="absolute top-10 w-[2vw] opacity-45"
            src="/static/capsule.png"
            alt={'alt'}
            width="80"
            height="80"
          />
          <ParallaxComponent
            className="absolute bottom-0 z-40 blur-sm md:-bottom-40 md:-left-20"
            speed={1000}
            rotationSpeed={250}
          >
            <Image
              className="custom-bounce w-[12vw] transition-transform"
              src="/static/capsule.png"
              alt={'alt'}
              width="150"
              height="150"
            />
          </ParallaxComponent>

          <ParallaxComponent
            className="absolute top-10 opacity-50 md:-left-20"
            speed={50}
            rotationSpeed={-250}
          >
            <Image
              className="custom-bounce w-[4vw] rotate-45 transition-transform"
              src="/static/capsule.png"
              alt={'alt'}
              width="60"
              height="60"
            />
          </ParallaxComponent>

          <div className="absolute inset-0 z-10 m-auto flex items-center justify-center">
            <ParallaxComponent className="rotate-12" speed={300}>
              <Image
                className="custom-bounce w-20 md:w-52"
                src="/static/hero.png"
                alt={'alt'}
                width="200"
                height="400"
              />
            </ParallaxComponent>
          </div>

          <h1 className="text relative z-20 inline-block bg-gradient-to-r text-6xl font-bold text-transparent md:text-9xl">
            BRAIN
          </h1>
          <div className="z-0">
            <h1 className="text inline-block bg-gradient-to-r text-6xl font-bold text-transparent md:text-9xl">
              NUTRITION
            </h1>
          </div>

          <Image
            className="w-20 md:w-40"
            src="/static/vegan.png"
            alt={'alt'}
            width="150"
            height="100"
          />
        </div>

        <Link
          href="/product/tadm-black"
          className="absolute bottom-20 rounded-full bg-gradient-to-r from-red-400 to-orange-400 px-12 py-4 font-bold uppercase tracking-widest text-white transition duration-200 hover:bg-[#616467] hover:text-white dark:text-neutral-200"
        >
          Shop Now
        </Link>
      </div>

      <TextAppear>Whats inside TADM</TextAppear>
      <ScrollVideo />

      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
            {/* Item */}
            <div className="py-20">
              <h2 className="mb-6 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12">
                Understand sales performance better
              </h2>
              <ul className="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
                <li className="flex flex-col p-5">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                    alt=""
                    className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
                  />
                  <p className="mb-4 font-semibold">Support</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                  </p>
                </li>
                <li className="flex flex-col p-5">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                    alt=""
                    className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
                  />
                  <p className="mb-4 font-semibold">Organise</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                  </p>
                </li>
                <li className="flex flex-col p-5">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                    alt=""
                    className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
                  />
                  <p className="mb-4 font-semibold">Flexibility</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                  </p>
                </li>
                <li className="flex flex-col p-5">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                    alt=""
                    className="mb-4 inline-block h-10 w-10 rounded-full object-cover"
                  />
                  <p className="mb-4 font-semibold">Speed</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                  </p>
                </li>
              </ul>
            </div>
            {/* Item */}
            <div className="h-full w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mx-auto inline-block h-full w-full max-w-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsTW />
      <FaqPage />

      <Footer />
    </>
  );
}
