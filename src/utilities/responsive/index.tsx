
const win = window.window;

export const responsiveWidth = (percentage: number): number => {
  return (percentage * win.innerWidth) / 100;
};

export const responsiveHeight = (percentage: number): number => {
  return (percentage * win.innerHeight) / 100;
};


