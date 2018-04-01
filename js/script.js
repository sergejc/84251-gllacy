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

var sliderLabel = document.querySelectorAll('.slider__label');
if (sliderLabel) {
    sliderLabel.forEach(function (el) {
        el.addEventListener('click', function (e) {
            changeBackground(this);
        });
    });
}

var feedBackOpen = document.querySelector('.feed-back--button');
var feedBackClose = document.querySelector('.feed-back-close');

if (feedBackOpen && feedBackClose) {
    feedBackOpen.addEventListener('click', function (evt) {
        evt.preventDefault();
        document.querySelector('.feed-back-modal').classList.remove('visually-hidden');
    });

    feedBackClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        document.querySelector('.feed-back-modal').classList.add('visually-hidden');
    });
}