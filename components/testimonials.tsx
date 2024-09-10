'use client';

const Testimonials: React.FC = () => {
  const carouselProducts: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 8];

  return (
    <div className="relative -mt-10 h-[100vh] bg-gray-900">
      <div className="flex flex-col items-center justify-center px-10 pt-20 text-white">
        <h1 className="text text-5xl">What Our Customers Say</h1>

        <p className="mt-2">
          Join our leading community of innovators, creators, influencers, and athletes. Every
          journey starts within.
        </p>
      </div>

      <div className="mt-10 w-full overflow-x-auto pb-6 pt-1">
        <ul className="flex animate-carousel gap-4">
          {carouselProducts.map((product, i) => (
            <li
              key={`${product.handle}${i}`}
              className="relative h-[50vh] max-h-[575px] w-2/3 flex-none md:w-1/4"
            >
              <div className="h-full w-full max-w-xs rounded-lg border border-l-yellow-200 border-r-white border-t-yellow-200 bg-white p-10 backdrop-filter">
                <div className="flex h-full flex-col justify-between text-gray-600">
                  <p>
                    "Me and my entire family take tadm daily! It definitely fills up the missing gap
                    in my nutrition. Besides, it is a very nice bottle that I have on my working
                    desk."
                  </p>

                  <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <figure className="mt-10">
                      <figcaption className="mt-10">
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                          <div className="font-semibold text-gray-900">Judith Black</div>
                          <svg
                            viewBox="0 0 2 2"
                            width="3"
                            height="3"
                            aria-hidden="true"
                            className="fill-gray-900"
                          >
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          <div className="text-gray-600">CEO of Workcation</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
