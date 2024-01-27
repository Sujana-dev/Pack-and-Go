$('.desti_slider').slick({
    slidesToShow:5,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    centerMode:true,
    centerPadding:'0',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

// swiper slider

const swiperEl = document.querySelectorAll('swiper-container')

swiperEl.forEach((item)=>{
  Object.assign(item, {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      575:{
        slidesPerView:2,
        spaceBetween:0,
      },
      991:{
        slidesPerView:3,
        spaceBetween:0,
      },
    },
  });
  item.initialize();
})

// counter

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.test_slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    centerMode:true,
    centerPadding:'0',
    dots:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});


// 
let main_menu = document.querySelector('.main_menu')

console.log(main_menu);

window.addEventListener('scroll',() =>{

   let scrolling = window.scrollY

   if(scrolling > 200){
        main_menu.classList.add('menu_fixed')
   }
   else{
    main_menu.classList.remove('menu_fixed')
   }
})

let back_top = document.querySelector('.back_top')

    window.addEventListener('scroll',()=>{
        let scrolling = window.scrollY

        if(scrolling > 500){
            back_top.classList.add('back_top_fixed')
            
        }
        else{
            back_top.classList.remove('back_top_fixed')
        }
})

back_top.addEventListener('click',()=>{
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})
