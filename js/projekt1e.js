// $('.burger').on('click', function () {
//     $('.fas, aside, .wraper').toggleClass('show');
// })
// const burger = document.querySelector('.burger');
// burger.addEventListener('click', function () {
//     document.querySelector('.fa-bars').classList.toggle('show');
//     document.querySelector('.fa-times').classList.toggle('show');
//     document.querySelector('aside').classList.toggle('show');
//     document.querySelector('.wraper').classList.toggle('show');
// })
const burger = document.querySelector('.burger');
const activeElement = document.querySelectorAll('.active')
burger.addEventListener('click', function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle('show');
    }
})