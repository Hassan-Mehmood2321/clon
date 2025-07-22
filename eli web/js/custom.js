  (function ($) {
  "use strict";
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    $('.smoothscroll').click(function(){
      let el = $(this).attr('href');
      let elWrapped = $(el);
      let header_height = $('.navbar').height();
      scrollToDiv(elWrapped,header_height);
      return false;
      function scrollToDiv(element,navheight){
        let offset = element.offset();
        let offsetTop = offset.top;
        let totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  })(window.jQuery);



  const mountSlider = () => {
    const slides = Array.from(document.querySelectorAll("img"));
    const orders = Array(slides.length)
      .fill()
      .map((_, index) => `slide-${index + 1}`);
    const slideCount = slides.length;
  
    slides.forEach((slide, index) => slide.classList.add(orders[index]));
  
    let activeIndex = 0;
  
    const updateOrder = activeIndex => {
      slides.forEach((slide, index) => {
        const newOrderIndex = index - activeIndex;
        slide.className = orders.at(newOrderIndex);
      });
    };
  
    const next = () => {
      activeIndex++;
      if (activeIndex === slideCount) activeIndex = 0;
  
      updateOrder(activeIndex);
      return activeIndex;
    };
  
    const prev = () => {
      activeIndex--;
      if (activeIndex === -1) activeIndex = slideCount - 1;
  
      updateOrder(activeIndex);
      return activeIndex;
    };
  
    return { next, prev, updateOrder };
  };
  
  const { next, prev } = mountSlider();
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const activeSlide = document.querySelector(".active-slide");
  
  prevBtn.onclick = () => {
    const activeIndex = prev();
    activeSlide.textContent = activeIndex + 1;
  };
  
  nextBtn.onclick = () => {
    const activeIndex = next();
    activeSlide.textContent = activeIndex + 1;
  };
