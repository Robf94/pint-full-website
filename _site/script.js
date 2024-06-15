// Highlight current page in nav bar

function activeLinks() {
    document.querySelectorAll(".nav-link").forEach((link) => {
        console.log(window.location.href)
        if (link.href === window.location.href) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
    // return pageName;
};

activeLinks();

// End activeLinks

// Swiper

const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    },

    // Autoplay
    autoplay: {
        disableOnInteraction: false,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   dynamicBullets: true,
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
  
// End Swiper

// Swiper

const quoteSwiper = new Swiper('.quote-swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    },

    // Autoplay
    autoplay: {
        disableOnInteraction: false,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   dynamicBullets: true,
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
  
// End Swiper