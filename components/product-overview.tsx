import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import { AddToCart } from './cart/add-to-cart';
const ProductOverview = ({ product }: { product: Product }) => {
  return (
    <section className="relative h-screen">
      <div className="mx-auto h-full w-full px-4 sm:px-6 lg:px-0">
        <div className="mx-auto grid h-full grid-cols-1 gap-16 max-md:px-2 lg:grid-cols-2">
          <div className="img">
            <div className="img-box h-full bg-gray-300 max-lg:mx-auto">
              <div className="h-full">
                <Image
                  className="h-full w-full object-cover"
                  src="/static/package.jpg"
                  width={500}
                  height={500}
                  alt="package image"
                ></Image>
              </div>
            </div>
          </div>
          <div className="data my-0 flex w-full items-center justify-center pr-0 max-lg:pb-10 lg:my-5 lg:pr-8 xl:my-2 xl:justify-start">
            <div className="data w-full max-w-xl">
              <h2 className="font-manrope mb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-center text-4xl font-bold capitalize leading-10 text-gray-900 text-transparent">
                Hol dir dein TADM
              </h2>
              <div className="mb-6 flex flex-col items-center justify-center sm:flex-row">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="pl-2 text-sm font-normal leading-7 text-gray-500">
                    1624 review
                  </span>
                </div>
              </div>
              <p className="mb-5 text-base font-normal text-gray-500">
                Introducing our vibrant Basic Yellow
              </p>
              {/* <ul className="mb-8 grid gap-y-4">
                <li className="flex items-center gap-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#616467" />
                    <path
                      d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                      stroke="white"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="text-base font-normal text-gray-900">
                    Pure Cotton Shirt with 60% as 40%
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#616467" />
                    <path
                      d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                      stroke="white"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="text-base font-normal text-gray-900">all size is available</span>
                </li>
              </ul> */}

              <div className="grid grid-cols-1 gap-3">
                <div className="flex w-full cursor-pointer flex-col gap-3 rounded-lg border-2 border-orange-500 p-5 shadow-lg">
                  <h1 className="text-2xl font-semibold">Tadm Black</h1>

                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="font-bold">
                    39,99 € <span className="font-normal text-neutral-400"> inc. UST</span>
                  </p>
                </div>
                <div className="relative flex w-full cursor-not-allowed flex-col gap-3 overflow-hidden rounded-lg border-2 border-gray-200 p-5">
                  <div className="absolute inset-0 bg-white text-center opacity-70"></div>
                  <h1 className="text-2xl font-semibold">Tadm Black Refil Pack</h1>

                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <p className="font-bold">
                    19,99 € <span className="font-normal text-neutral-400"> inc. UST</span>
                  </p>
                </div>
              </div>
              <div className="mt-5 flex w-full items-center gap-3">
                <AddToCart product={product} />
                {/* <button className="flex w-full items-center justify-center rounded-[100px] bg-black px-5 py-4 text-center text-lg font-semibold text-white shadow-sm transition-all duration-500 hover:bg-orange-500 hover:shadow-indigo-400">
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
