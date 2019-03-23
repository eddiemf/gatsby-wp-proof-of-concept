import { useEffect } from 'react';
import Swiper from 'swiper';

const createElement = (tag, classes = []) => {
  const el = document.createElement(tag);
  if (classes) {
    el.classList.add(...classes);
  }
  return el;
};

const createSwiperButton = className => {
  return createElement(`button`, [`swiper-button`, className]);
};

const normalizeGalleryItemsClass = () => {
  const galleryItems = document.querySelectorAll(`.gallery-item`);
  [].forEach.call(galleryItems, item => {
    item.classList.add(`swiper-slide`);
  });
};

const useSwiperGalleryEffect = ({
  navigation = {},
  pagination = {},
  scrollbar = {},
  ...swiperConfig
}) => {
  useEffect(() => {
    normalizeGalleryItemsClass();
    const galleries = document.querySelectorAll(`.gallery`);
    [].forEach.call(galleries, gallery => {
      gallery.classList.add(`swiper-wrapper`);
      const galleryWrapper = document.createElement(`div`);
      galleryWrapper.classList.add(`gallery-container`, `swiper-container`);
      gallery.parentNode.insertBefore(galleryWrapper, gallery);
      galleryWrapper.appendChild(gallery);

      if (navigation.prevEl && navigation.nextEl) {
        galleryWrapper.appendChild(createSwiperButton(navigation.prevEl.substring(1)));
        galleryWrapper.appendChild(createSwiperButton(navigation.nextEl.substring(1)));
      }

      if (pagination.el) {
        galleryWrapper.appendChild(createElement(`div`, [pagination.el.substring(1)]));
      }

      if (scrollbar.el) {
        galleryWrapper.appendChild(createElement(`div`, [scrollbar.el.substring(1)]));
      }
    });

    new Swiper(`.swiper-container`, {
      navigation,
      pagination,
      scrollbar,
      ...swiperConfig,
    });
  }, []);
};

export default useSwiperGalleryEffect;
