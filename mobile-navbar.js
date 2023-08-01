function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = '<i class="fa-solid fa-x" style="color: #ffffff;"></i>';
    }else {
        menuMobile.classList.add('open');
    }
}