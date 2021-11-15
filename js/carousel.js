var elem = document.querySelector('.faq__questions-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.faq__questions-carousel', {
    // options
});