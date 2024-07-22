document.querySelectorAll('.aside__nav-item a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // document.querySelectorAll('.aside__nav-item').forEach(el => el.classList.remove('active_aside_nav_item'));
        this.parentElement.classList.add('active_aside_nav_item');

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelector('.panel-item.scroll').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

var burger = document.querySelector('.header__right-column-burger');
var menu = document.querySelector('.header__hidden-block');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active_header_block');
});
