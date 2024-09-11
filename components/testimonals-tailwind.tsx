const TestimonialsTW = () => {
  const Testimonials = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="relative mx-auto min-h-screen py-10">
      <div className="absolute inset-0 top-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
        <p className="text">Testimonials</p>
        <h2 className="text-3xl font-bold text-white lg:text-5xl">What our customers think</h2>
        <p className="font-inter mt-4 max-w-xl px-5 text-base font-light text-gray-500 lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
          venenatis, lectus magna fringilla urna
        </p>
      </div>
      <div className="mt-5 flex w-full gap-6 overflow-x-auto">
        {Testimonials.map(() => (
          <div className="relative animate-carousel flex-col rounded-xl border border-yellow-100 dark:bg-neutral-900">
            <div className="relative z-10 w-[300px] p-4 md:p-6">
              <p className="mt-3 text-base text-gray-100 sm:mt-6 md:text-xl dark:text-white">
                <em>
                  " In September, I will be using this theme for 2 years. I went through multiple
                  updates and changes and I'm very glad to see the consistency and effort made by
                  the team. "
                </em>
              </p>
            </div>

            <div className="relative z-10 rounded-b-xl p-4 md:px-6">
              <h3 className="text-sm font-semibold text-gray-100 sm:text-base dark:text-neutral-200">
                Luisa
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                Senior Director of Operations | Fitbit
              </p>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-md border bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsTW;
