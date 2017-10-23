import { convertLink } from '../detectMobile';

const SingleCarouselFactory = {
  create(images) {

    let idx = 0;
    return {
      getNextImage() {
        return images[idx++ % images.length].link;
      }
    };
  }
};

export default SingleCarouselFactory;
