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
var feedBackModal = document.querySelector('.feed-back-modal');
var feedBackModalForm = document.querySelector('.feed-back-modal__form');

if (feedBackOpen && feedBackClose) {
    feedBackOpen.addEventListener('click', function (evt) {
        evt.preventDefault();
        feedBackModal.classList.remove('visually-hidden');
        feedBackModalForm.classList.add('modal-show');
    });

    feedBackClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        feedBackModal.classList.add('visually-hidden');
        feedBackModalForm.classList.remove('modal-show');
    });
}

feedBackModalForm.addEventListener('submit', function(evt){
    if (evt.target.classList) {
        var name = document.querySelector('.feed-back-modal__user-name');
        var email = document.querySelector('.feed-back-modal__email');
        if(!name.value || !email.value) {
            evt.preventDefault();
            feedBackModalForm.classList.remove('modal-show');
            feedBackModalForm.classList.add('modal-error');
            setTimeout(function(){
                feedBackModalForm.classList.remove('modal-error');
            }, 1000);
        }
    }
})

document.querySelector('.feed-back-close').addEventListener('click', function(evt){
    if (evt.target.classList) {
        feedBackModalForm.classList.remove('modal-error');
        feedBackModalForm.classList.remove('modal-show');
    }
})


function initMap() {
    var uluru = {lat: 59.9393201, lng: 30.323491};
    var map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 16,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: "img/map-pin.svg"
    });
  }