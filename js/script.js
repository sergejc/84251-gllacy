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

document.querySelector('.feed-back--button').addEventListener('click', function(evt){
    document.querySelector('.feed-back-modal').classList.remove('visually-hidden');
});

document.querySelector('.feed-back-close').addEventListener('click', function(evt){
    document.querySelector('.feed-back-modal').classList.add('visually-hidden');
});