const soapGrid = document.querySelector('.soaps');
const masonry = new Masonry(soapGrid, {
    itemSelector: '.grid-item',
    columnWidth: 0,
    percentPosition: true
});