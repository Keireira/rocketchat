const scrollTo = (config) => {
  const height = window.pageYOffset;
  if (height === 0) return null;

  const time = (config.hasOwnProperty('time')) ? config.time : 500;
  const step = (height / (time / 100)) * -1;

  window.scrollBy(0, step);

  if (height > 10) {
    this.rafId = window.requestAnimationFrame(scrollTo.bind(null, config));
  } else if (this.rafId) {
    window.cancelAnimationFrame(this.rafId);
    this.rafId = undefined;
    window.scrollTo(0, 0);
  }
};

export default scrollTo;
