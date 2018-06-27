// $('.search-icon').bind('click', function() {
//     $('.search-input').toggleClass('active');
// });
//
// $('.menu-icon').bind('click', function() {
//     $('.panel').toggleClass('show-menu');
//     $('.menu').toggleClass('active');
// });

document.querySelector(".search-icon").addEventListener("click", function() {
  document.querySelector(".search-input").classList.toggle('active');
});

document.querySelector(".menu-icon").addEventListener("click", function() {
  document.querySelector(".panel").classList.toggle('show-menu');
  document.querySelector(".menu").classList.toggle('active');
})
