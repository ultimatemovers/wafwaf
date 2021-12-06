(function() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let TOGGLE_MENU = false;

  let slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    delay: 275,
    duration: 2000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
  };

  function init(){
    // new SmoothScroll(target,speed,smooth)
    new SmoothScroll(document,50,16)
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement
                || document.documentElement
                || document.body.parentNode
                || document.body)

    let moving = false
    let pos = target.scrollTop
    let frame = target === document.body
                && document.documentElement
                ? document.documentElement
                : target

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault();
      let delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight))

      if (!moving) update()
    }

    function normalizeWheelDelta(e){
      if(e.detail){
        if(e.wheelDelta)
          return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
        else
          return -e.detail/3 // Firefox
      }else
        return e.wheelDelta/120 // IE,Safari,Chrome
    }

    function update() {
      moving = true
      let delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }

    let requestFrame = function() { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }

  const menuItems = document.querySelectorAll('.menu-item')
  menuItems.forEach((m) => {
    const menuUrl = m.getAttribute('href').replaceAll('/', '')
    const url = location.pathname.replaceAll('/', '')
    m.classList.remove('active')
    if(menuUrl === url)
      m.classList.add('active')
  })

  const mobileMenuItems = document.querySelectorAll('.nav-mobile-item')
  mobileMenuItems.forEach((mi, idx) => {
    const menuUrl = mi.parentElement.getAttribute('href').replaceAll('/', '');
    const url = location.pathname.replaceAll('/', '');

    mi.classList.remove('nav-mobile-item-active');
    if(menuUrl === url){
      mi.classList.add('nav-mobile-item-active');
    }
  })

  if(document.body.id === 'menu') {
    const categories = document.querySelectorAll('.category-title')
    categories[0].classList.add('active')
    filterProducts(categories[0].dataset.categoryName)

    categories.forEach((c) => {
      c.addEventListener('click', (e) => {
        c.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
      })
        filterProducts(e.target.dataset.categoryName)
      })
    })
  }

  if(document.body.id === 'jobs' || document.body.id === 'franchising') {
    const accordions = document.querySelectorAll('.accordion')
    accordions.forEach((a) => {
      a.addEventListener('click', () => {
        if(a.classList.contains('accordion-opened')) {
          a.classList.remove('accordion-opened')
          return
        }
        else{
          a.classList.add('accordion-opened')
        }
      })
    })
  }

  if(document.body.id === 'locations') {
    const locationItems = document.querySelectorAll('.change-location')
    locationItems.forEach((l, idx) => {
      // l.children[0].classList.add(idx%2 === 0 ? 'btn-zoom-in-out' : 'btn-zoom-in-out')
      l.addEventListener('click', (e) => {
        l.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        changeLocations(e.target)
      })
    })
  }



  if(document.body.id === 'franchising'){
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundColor = '#85D3C4'
  }

  if(document.body.id === 'contact' || document.body.id === 'about'){
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundColor = '#CF909B'
  }

  if(document.body.id === 'delivery'){
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundColor = '#ECD684'

    const deliveryBtns = document.querySelectorAll('.delivery-btn')
    deliveryBtns.forEach( db => {
      db.addEventListener('mouseenter', (e) => {
        db.children[0].style.transition = "all .3s ease-in-out"
        db.children[0].style.transform = "scale(1.1)"
      })
      db.addEventListener('mouseleave', (e) => {
        db.children[0].style.transform = "scale(1)"
      })
    })

  }

  if(document.body.id === 'contact' || document.body.id === 'homepage'){
    const instaItems = document.querySelectorAll('.instagram-item')
    instaItems.forEach( item => {
      const itemWidth = item.offsetWidth
      item.style.height = itemWidth + 'px'
    })
  }

  const swiper = new Swiper(".custom-carousel", {
    cssMode: true,
    loop: true,
    responsive: true,
    autoplay: {
      delay: 3000,
      loop: true,
    },
    keyboard: true,
  })

  const swiper2 = new Swiper('.faq-carousel', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
  })


  if(document.body.id !== 'menu' && !isMobile){
    const containerWidth = document.querySelector('.container').offsetWidth
    const heroCustomCarousel = document.querySelector('.hero-custom-carousel')

    window.addEventListener('resize', e => {
      heroCustomCarousel.style.height = 0.55 * heroCustomCarousel.offsetWidth + 'px'
      if(window.width >= 1280 && window.width < 1440){
        menuItems.forEach( mI => {
          mI.style.width = 0.095 * containerWidth + 'px'
        })
      }
    })
  }

  if(document.body.id === 'about'){
    const proccessImgs = document.querySelectorAll('.proccess-icon-image')
    const imageWidth = proccessImgs[1].offsetWidth

    if(window.innerWidth > 450){
      proccessImgs.forEach(imgDiv => {
        imgDiv.style.height = imageWidth-60 + 'px'
      })
    }
    else{
      proccessImgs.forEach(imgDiv => {
        imgDiv.style.height = imageWidth-40 + 'px'
      })
    }
  }


  if(isMobile) {
    if(document.querySelector('.latest-posts')) {
      document.querySelector('.latest-posts').classList.add('swiper-container')
      document.querySelector('.latest-posts-wrapper').classList.add('swiper-wrapper')
      document.querySelectorAll('.latest-posts-item').forEach((i) => { i.classList.add('swiper-slide') })

      new Swiper('.latest-posts', {
        allowTouchMove: true,
        slidesPerView: screen.width < 1028 ? '1.3' : '3',
        centeredSlides: true,
        loop: screen.width < 1028
      })
    }

    if(document.querySelector('.showcase-group')) {
      document.querySelector('.showcase-group').classList.add('swiper-container')
      document.querySelector('.showcase-wrapper').classList.add('swiper-wrapper')
      document.querySelectorAll('.showcase-item').forEach((i) => { i.classList.add('swiper-slide') })

      setTimeout( () => {
        let scgWidth = document.querySelector('.showcase-item').children[0].offsetWidth
        document.querySelector('.showcase-group').style.maxHeight = scgWidth + 'px'
      }, 1500)

      if(screen.width > 640) { return }
      new Swiper('.showcase-group', {
        centeredSlides: true,
        loop: true,
        allowTouchMove: true,
        slidesPerView: 1.3,
        spaceBetween: 20,
      })
    }

    if(document.querySelector('.proccess-container')) {
      document.querySelector('.proccess-container').classList.add('swiper-container')
      document.querySelector('.proccess-wrapper').classList.add('swiper-wrapper')
      document.querySelectorAll('.proccess-item').forEach((i) => { i.classList.add('swiper-slide') })
      new Swiper('.proccess-container', {
        // centeredSlides: true,
        slidesPerView: 1.5,
        allowTouchMove: true,
        spaceBetween: 40,
      })
    }
  }

  if(document.querySelector('.reveal')) {
    ScrollReveal().reveal('.reveal', { distance: '100px', duration: 2400, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-delay-200')) {
    ScrollReveal().reveal('.reveal-delay-200', { delay: 200, distance: '150px', duration: 2400, origin: 'bottom', easing: 'cubic-bezier(0.3,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-delay-300')) {
    ScrollReveal().reveal('.reveal-delay-300', { delay: 300, distance: '100px', duration: 2500, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-delay-400')) {
    ScrollReveal().reveal('.reveal-delay-400', { delay: 400, distance: '150px', duration: 2600, origin: 'bottom', easing: 'cubic-bezier(0.3,.62,1,1)' });
  }
  if(document.querySelector('.reveal-delay-500')) {
    ScrollReveal().reveal('.reveal-delay-500', { delay: 500, distance: '100px', duration: 2700, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-delay-600')) {
    ScrollReveal().reveal('.reveal-delay-600', { delay: 600, distance: '100px', duration: 2400, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-delay-700')) {
    ScrollReveal().reveal('.reveal-delay-700', { delay: 700, distance: '100px', duration: 2400, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-delay-4000')) {
    ScrollReveal().reveal('.reveal-delay-4000', { delay: 200, distance: '100px', duration: 2400, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-delay-2200')) {
    console.log(ScrollReveal())
    ScrollReveal().reveal('.reveal-delay-2200', { delay: 2200, distance: '100px', duration: 2400, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-footer')) {
    ScrollReveal().reveal('.reveal-footer', { delay: 100, distance: '20px', duration:2400, origin: 'bottom', easing: 'cubic-bezier(0.25,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-left')) {
    ScrollReveal().reveal('.reveal-left', { distance: '100px', origin: 'left', opacity: 0, delay: 275, duration: 2400, easing: 'ease-in-out'})
  }

  document.getElementById('hamburger').addEventListener('click', (e) => {
    const navMobile = document.getElementById('nav-mobile');
    if(e.target.classList.contains('hamburger'))
      e.target.classList.toggle('is-active');
    else
      e.target.parentNode.classList.toggle('is-active');

    if(!TOGGLE_MENU){
      navMobile.classList.add('nav-mobile-full-width');
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.removeProperty('overflow');
      navMobile.classList.remove('nav-mobile-full-width');
    }

    TOGGLE_MENU = !TOGGLE_MENU;
  })

  // fetch('https://www.instagram.com/wafwafcz/?__a=1', {
  //   headers: [
  //     ["Content-Type", "application/json"],
  //     ["Content-Type", "text/plain"]
  //   ],
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  function toggleAccordion(el) {

    const accordionId = '.' + el.dataset.accordion
    const accordion = document.querySelector(accordionId)
    const accordions = document.querySelectorAll('.accordion')

    if(accordion.classList.contains('accordion-opened')) {
      accordion.classList.remove('accordion-opened')
      return
    }

    accordions.forEach((a) => {
      if(a !== el)
        a.classList.remove('accordion-opened')
     })
     accordion.classList.add('accordion-opened')
  }

  function changeLocations(el) {
    const locationId = el.dataset.location || el.parentNode.dataset.location
    const locationSections = document.querySelectorAll('.location-section')
    const changeLocations = document.querySelectorAll('.change-location')
    changeLocations.forEach((cl) => {
      cl.classList.remove('change-location-active')
      if(cl.dataset.location === locationId)
      cl.classList.add('change-location-active')
    })
    locationSections.forEach((l) => {
      if(l.dataset.section !== locationId)
      l.classList.remove('location-section-active')
      else
      l.classList.add('location-section-active')
    })
  }

  function filterProducts(category) {
    const categories = document.querySelectorAll('.category-title')
    const products = [...document.querySelector('.products-container').children]
    products.forEach((p) => {
      p.style = ''
      p.classList.remove('hide')
      p.style.opacity = 1
      if(p.dataset.category !== category)
      p.classList.add('hide')
    })
    categories.forEach((c,idx) => {
      c.classList.add(idx%2 === 0 ? 'btn-zoom-in-out' : 'btn-zoom-in-out')
      c.classList.remove('active')
      if(c.dataset.categoryName === category)
        c.classList.add('active')
    })
  }
  
  document.body.addEventListener('onload', init())
})()
