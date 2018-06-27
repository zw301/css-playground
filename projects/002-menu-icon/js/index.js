// $('.menu-icon').bind('click', function() {
// 	$(this).toggleClass('active');
// 	$(this).find('div').removeClass('no-animation');
// });

const menu = document.querySelector(".menu-icon");
menu.addEventListener("click", function() {
	if (this.classList.value.includes("active")) {
		this.classList.remove("active");
	} else {
		this.classList.add("active");
	}

	let oDivs = menu.querySelectorAll("div");
	oDivs.forEach(div => div.classList.remove("no-animation"))
})
