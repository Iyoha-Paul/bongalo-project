export const settings = {
  desktop1: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  desktop2: {
    breakpoint: { max: 1500, min: 1024 },
    items: 2.5,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
