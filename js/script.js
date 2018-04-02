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
    wrapper.className = classList[num - 1];
}

var sliderLabels = document.querySelectorAll('.slider__label');
if (sliderLabels) {
    for (var i = 0; i < sliderLabels.length; i++) {
        sliderLabels[i].addEventListener('click', function (e) {
            changeBackground(this);
        });
    }
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