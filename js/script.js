function changeBackground(el) {
    var classList = [
        'site-background1',
        'site-background2',
        'site-background3'
    ];
    var num = parseInt(
        el.getAttribute('for').replace(/[^0-9]/g, '')
    );
    var wrapper = document.querySelector('body');
    wrapper.classList = classList[num - 1];
}

document.querySelectorAll('.slider__label').forEach(function (el) {
    el.addEventListener('click', function (e) {
        changeBackground(this);
    });
});

/*
document.querySelectorAll('.site-nav__link').forEach(function(el) {
    el.addEventListener('mouseenter', function (e) {
        e.target.closest('.site-nav__item').classList.add('site-nav__item--active');
    });

    el.addEventListener('mouseleave', function (e) {
        setTimeout(function () {
            e.target.closest('.site-nav__item').classList.remove('site-nav__item--active');
        }, 300);
    });
});


document.querySelectorAll('.user-nav__search, .user-nav__registration, .shopping-card__quantity').forEach(function(el) {
    el.addEventListener('mouseenter', function (e) {
        e.target.closest('.user-nav__item').classList.add('user-nav__item--active');
    });

    el.addEventListener('mouseleave', function (e) {
        setTimeout(function () {
            e.target.closest('.user-nav__item').classList.remove('user-nav__item--active');
        }, 300);
    });
});
*/