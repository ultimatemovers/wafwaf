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



  if(location.pathname.split('/')[1] === 'en'){
    menuItems.forEach((m,idx) => {      
      if(idx === 0 || idx === 8) {
        m.setAttribute('href', '/en')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Home'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Home'
        }
      }
      if(idx === 1 || idx === 9) {
        m.setAttribute('href', '/en/locations')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Locations'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Locations'
        }
      }
      if(idx === 2 || idx === 10) {
        m.setAttribute('href', '/en/menu')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Menu'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Menu'
        }
      }
      if(idx === 3 || idx === 11){
        m.setAttribute('href', '/en/franchising')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Franchising'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Franchising'
        }
      }
      if(idx === 4 || idx === 12){
        m.setAttribute('href', '/en/about')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'About'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'About'
        }
      }
      if(idx === 5 || idx === 13){
        m.setAttribute('href', '/en/contact')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Contact'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Contact'
        }
      }
      if(idx === 6 || idx === 14){
        m.setAttribute('href', '/en/jobs')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Jobs'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Jobs'
        }
      }
      if(idx === 7 || idx === 15){
        m.setAttribute('href', '/en/delivery')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Delivery'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Delivery'
        }
        
      }
    })  
  }
  if(location.pathname.split('/')[1] === 'hr'){
    menuItems.forEach((m,idx) => {      
      if(idx === 0 || idx === 8) {
        m.setAttribute('href', '/hr')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Početna'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Početna'
        }
      }
      if(idx === 1 || idx === 9) {
        m.setAttribute('href', '/hr/locations')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Lokacije'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Lokacije'
        }
      }
      if(idx === 2 || idx === 10) {
        m.setAttribute('href', '/hr/menu')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Menu'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Menu'
        }
      }
      if(idx === 3 || idx === 11){
        m.setAttribute('href', '/hr/franchising')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Franšize'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Franšize'
        }
      }
      if(idx === 4 || idx === 12){
        m.setAttribute('href', '/hr/about')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'O nama'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'O nama'
        }
      }
      if(idx === 5 || idx === 13){
        m.setAttribute('href', '/hr/contact')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Kontakt'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Kontakt'
        }
      }
      if(idx === 6 || idx === 14){
        m.setAttribute('href', '/hr/jobs')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Poslovi'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Poslovi'
        }
      }
      if(idx === 7 || idx === 15){
        m.setAttribute('href', '/hr/delivery')
        if(m.classList.contains('btn-zoom-in-out')){
          m.innerHTML = 'Dostava'
        }
        if(m.children[0] && m.children[0].classList.contains('nav-mobile-item')){
          m.children[0].innerHTML = 'Dostava'
        }
        
      }
    })  
  }

  menuItems.forEach((m, idx) => {
    const menuUrl = m.getAttribute('href').replaceAll('/', '')
    const url = location.pathname.replaceAll('/', '')
    m.classList.remove('active')
    if(menuUrl === url){
      m.classList.add('active')
    }

    if(document.body.id === 'jobs' && idx === 14)
      m.classList.add('active')

    if(document.body.id === 'about' && idx === 12)
      m.classList.add('active')

    if(document.body.id === 'locations' && idx === 9){
      m.classList.add('active')
    }

  })

  if(document.querySelector('.changeLang')){
    const changeLang = document.querySelectorAll('.changeLang')
    changeLang.forEach(cl => {
      cl.addEventListener('click', () => {
        if(cl.id === 'cz'){
          const currentPath = location.pathname.replaceAll('/', '')

          if(currentPath === 'en' || currentPath === 'hr')
            location.href = location.origin + "/"
          if(currentPath === 'enlocations' || currentPath === 'hrlocations')
            location.href = location.origin + "/na%C5%A1e-pobo%C4%8Dky" 
          if(currentPath === 'enmenu' || currentPath === 'hrmenu')
            location.href = location.origin + "/menu" 
            if(currentPath === 'enfranchising' || currentPath === 'hrfranchising')
            location.href = location.origin + "/franchise" 
          if(currentPath === 'enabout' || currentPath === 'hrabout')
            location.href = location.origin + "/n%C3%A1%C5%A1-p%C5%99%C3%ADb%C4%9Bh" 
          if(currentPath === 'encontact' || currentPath === 'hrcontact')
            location.href = location.origin + "/kontakty" 
          if(currentPath === 'enjobs' || currentPath === 'hrjobs')
            location.href = location.origin + "/p%C5%99idej-se" 
          if(currentPath === 'endelivery' || currentPath === 'hrdelivery')
            location.href = location.origin + "/rozvoz" 
        }
        if(cl.id === 'en'){
          const currentPath = location.pathname.replaceAll('/', '')
          
          if(currentPath === '' || currentPath === 'hr')
            location.href = location.origin + "/en/" 
          if(currentPath === 'na%C5%A1e-pobo%C4%8Dky' || currentPath === 'hrlocations')
            location.href = location.origin + "/en/locations" 
          if(currentPath === 'menu' || currentPath === 'hrmenu')
            location.href = location.origin + "/en/menu" 
          if(currentPath === 'franchise' || currentPath === 'hrfranchising')
            location.href = location.origin + "/en/franchising" 
          if(currentPath === 'n%C3%A1%C5%A1-p%C5%99%C3%ADb%C4%9Bh' || currentPath === 'hrabout')
            location.href = location.origin + "/en/about" 
          if(currentPath === 'kontakty' || currentPath === 'hrcontact')
            location.href = location.origin + "/en/contact" 
          if(currentPath === 'p%C5%99idej-se' || currentPath === 'hrjobs')
            location.href = location.origin + "/en/jobs" 
          if(currentPath === 'rozvoz' || currentPath === 'hrdelivery')
            location.href = location.origin + "/en/delivery" 
        }
        if(cl.id === 'hr'){
          const currentPath = location.pathname.replaceAll('/', '')
          
          if(currentPath === '' || currentPath === 'en')
            location.href = location.origin + "/hr/" 
          if(currentPath === 'na%C5%A1e-pobo%C4%8Dky' || currentPath === 'enlocations')
            location.href = location.origin + "/hr/locations" 
          if(currentPath === 'menu' || currentPath === 'enmenu')
            location.href = location.origin + "/hr/menu" 
          if(currentPath === 'franchise' || currentPath === 'enfranchising')
            location.href = location.origin + "/hr/franchising" 
          if(currentPath === 'n%C3%A1%C5%A1-p%C5%99%C3%ADb%C4%9Bh' || currentPath === 'enabout')
            location.href = location.origin + "/hr/about" 
          if(currentPath === 'kontakty' || currentPath === 'encontact')
            location.href = location.origin + "/hr/contact" 
          if(currentPath === 'p%C5%99idej-se' || currentPath === 'enjobs')
            location.href = location.origin + "/hr/jobs" 
          if(currentPath === 'rozvoz' || currentPath === 'endelivery')
            location.href = location.origin + "/hr/delivery" 
        }
      })
    })

  }

  const mobileMenuItems = document.querySelectorAll('.nav-mobile-item')
  mobileMenuItems.forEach((mi, idx) => {
    const menuUrl = mi.parentElement.getAttribute('href').replaceAll('/', '');
    const url = location.pathname.replaceAll('/', '');


    mi.classList.remove('nav-mobile-item-active');
    if(menuUrl === url)
      mi.classList.add('nav-mobile-item-active');

    if(document.body.id === 'jobs' && idx === 6)
      mi.classList.add('nav-mobile-item-active')

    if(document.body.id === 'about' && idx === 4)
      mi.classList.add('nav-mobile-item-active')

    if(document.body.id === 'locations' && idx === 1)
      mi.classList.add('nav-mobile-item-active')

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

    const storeTitles = document.querySelectorAll('.store-title')
    storeTitles.forEach(sT => {
      let b = sT.innerHTML.split('(')
      sT.innerHTML = b[0] + '<br /> (' + b[1]
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

    const locationInfoTitles = document.querySelectorAll('.location-info-title')
    locationInfoTitles.forEach(lit => {
      if(lit.innerHTML.includes('(')){
        b = lit.innerHTML.split('(')
        lit.innerHTML = b[0] + '<p class="font-normal mt-2 mb-4">(' + b[1] + '</p>'
      }
    })

    const locationName = document.querySelectorAll('.location-name')
    locationName.forEach(b => {
      if(b.innerHTML.includes('('))
        b.innerHTML = b.innerHTML.split('(')[0] + ' <br /> (' + b.innerHTML.split('(')[1]
    })

    const locationInfo = document.querySelectorAll('div.location-info')
    locationInfo.forEach(linfo => {
      let linfoChildrens = Array.from(linfo.children)
      linfoChildrens.forEach(b => {
        if(b.innerText.includes('420')){
          const numElemBefore = b.innerHTML.split('+')[0]
          const numElemAfter = b.innerHTML.split('+')[1]
          b.innerHTML = numElemBefore + `<a href="tel:+${numElemAfter.split(' ').join('').replace(/\D/g, "")}"> +` + numElemAfter + '</a>'
        }

        if(b.innerText.includes('@')){
          if(b.innerHTML.split(':')[1]){
            const emailElemBefore = b.innerHTML.split(':')[0]
            const emailElemAfter = b.innerHTML.split(':')[1]
            b.innerHTML = emailElemBefore + `: <a href="mailto:${emailElemAfter.split(';')[1] ? emailElemAfter.split(';')[1] : emailElemAfter.split(';')[0] }">` + emailElemAfter + '</a>'
          }
          else{
            b.innerHTML = `<a href="mailto:${b.innerHTML}">` + b.innerHTML + '</a>'
          }
        }
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

    if(window.innerWidth > 450 && window.innerWidth < 1440){
      document.getElementById('about-four-boxes').classList.add('reveal-delay-2200')
    } else{
      document.getElementById('about-four-boxes').classList.add('reveal-delay-200')
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
    ScrollReveal().reveal('.reveal', { distance: '80px', duration: 1300, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-delay-200')) {
    ScrollReveal().reveal('.reveal-delay-200', { delay: 200, distance: '120px', duration: 1300, origin: 'bottom', easing: 'cubic-bezier(0.3,1.05,1,1)' });
  }
  if(document.querySelector('.reveal-delay-300')) {
    ScrollReveal().reveal('.reveal-delay-300', { delay: 300, distance: '80px', duration: 1400, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-delay-400')) {
    ScrollReveal().reveal('.reveal-delay-400', { delay: 400, distance: '120px', duration: 1500, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-delay-500')) {
    ScrollReveal().reveal('.reveal-delay-500', { delay: 500, distance: '80px', duration: 1400, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-delay-600')) {
    ScrollReveal().reveal('.reveal-delay-600', { delay: 600, distance: '80px', duration: 1400, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-delay-700')) {
    ScrollReveal().reveal('.reveal-delay-700', { delay: 700, distance: '80px', duration: 1300, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-delay-4000')) {
    ScrollReveal().reveal('.reveal-delay-4000', { delay: 200, distance: '80px', duration: 1300, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-delay-2200')) {
    ScrollReveal().reveal('.reveal-delay-2200', { delay: 2200, distance: '120px', duration: 1400, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-footer')) {
    ScrollReveal().reveal('.reveal-footer', { delay: 100, distance: '20px', duration:1300, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
  }
  if(document.querySelector('.reveal-left')) {
    ScrollReveal().reveal('.reveal-left', { distance: '100px', origin: 'left', opacity: 0, delay: 100, duration: 1300, easing: 'ease-in-out'})
  }

  if(window.innerWidth < 450){
    if(document.querySelector('.reveal')) {
      ScrollReveal().reveal('.reveal', { distance: '80px', duration: 1100, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
    if(document.querySelector('.reveal-delay-200')) {
      ScrollReveal().reveal('.reveal-delay-200', { delay: 130, distance: '120px', duration: 1100, origin: 'bottom', easing: 'cubic-bezier(0.3,1.05,1,1)' });
    }
    if(document.querySelector('.reveal-delay-300')) {
      ScrollReveal().reveal('.reveal-delay-300', { delay: 200, distance: '80px', duration: 1200, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
    if(document.querySelector('.reveal-delay-400')) {
      ScrollReveal().reveal('.reveal-delay-400', { delay: 230, distance: '120px', duration: 1100, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
    if(document.querySelector('.reveal-delay-500')) {
      ScrollReveal().reveal('.reveal-delay-500', { delay: 360, distance: '80px', duration: 1100, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
    if(document.querySelector('.reveal-delay-600')) {
      ScrollReveal().reveal('.reveal-delay-600', { delay: 400, distance: '80px', duration: 1200, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
    if(document.querySelector('.reveal-delay-700')) {
      ScrollReveal().reveal('.reveal-delay-700', { delay: 430, distance: '80px', duration: 1200, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
    if(document.querySelector('.reveal-delay-4000')) {
      ScrollReveal().reveal('.reveal-delay-4000', { delay: 130, distance: '80px', duration: 1200, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
    if(document.querySelector('.reveal-delay-2200')) {
      ScrollReveal().reveal('.reveal-delay-2200', { delay: 1700, distance: '120px', duration: 1200, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
    if(document.querySelector('.reveal-footer')) {
      ScrollReveal().reveal('.reveal-footer', { delay: 60, distance: '20px', duration: 1200, origin: 'bottom', easing: 'cubic-bezier(.17,1.05,.88,1)' });
    }
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

  if(document.querySelector('.show-more-btn'))
  {
    // document.querySelectorAll('.show-more-btn').forEach((b) => {
    //    b.addEventListener('click', (e) => {
    //     const id = e.target.dataset.post
    //     const postContent = document.querySelector(`[data-post-id='${id}'] .post-content`)
    //     postContent.style = 'max-height: 2000px;'
    //     postContent.classList.remove('fool-class')
    //     e.target.remove()
    //    })
    // })
  }

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

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }
})()
