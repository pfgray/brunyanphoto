
const isPortrait = i => i.height > i.width;
const isLandscape = i => i.width > i.height;

const CarouselFactory = {
  create(images) {
    const landscapeImages = images.filter(isLandscape);
    const portraitImages = images.filter(isPortrait);

    console.log('got it all:', landscapeImages, portraitImages);

    let landscapeIdx = 0;
    let portraitIdx = 0;
    return {
      getNextImage() {
        const w = Math.max(
          document.documentElement.clientWidth, window.innerWidth || 0);
        const h = Math.max(
          document.documentElement.clientHeight, window.innerHeight || 0);
        if(w > h) {
          return landscapeImages[landscapeIdx++ % landscapeImages.length].link;
        }
        return portraitImages[portraitIdx++ % portraitImages.length].link;
      }
    };
  }
};

export default CarouselFactory;
