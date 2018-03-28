function changeBackground(el) {
    var classList = [
        'site-wrapper-background1',
        'site-wrapper-background2',
        'site-wrapper-background3'
    ];
    var num = parseInt(
        el.getAttribute('for').replace(/[^0-9]/g, '')
    );
    var wrapper = document.querySelector('.site-wrapper');
    console.log(el);
    wrapper.classList = 'site-wrapper ' + classList[num - 1];
}

document.querySelectorAll('.slider__label').forEach(function (el) {
    el.addEventListener('click', function (e) {
        changeBackground(this);
    });
});