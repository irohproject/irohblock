document.addEventListener("DOMContentLoaded", () => {
	
	let tabParent = document.querySelector(".create__details__container"),
	tabs = document.querySelectorAll(".create_button"),
	tabContent = document.querySelectorAll(".create__block-picture"),
	clickedTab = document.querySelectorAll(".create__summary"); 

	function hideTabContent() {
		tabContent.forEach(item => {
			item.style.display = 'none';
		})	
		tabs.forEach(item => {
			item.removeAttribute("open")
		})
	}
	function showTabContent(i = 0) {
		tabContent[i].style.display = "block";
		// tabs[i].setAttribute("open", open)
	} 
	hideTabContent();
	showTabContent(1);



	tabParent.addEventListener("click", (event) => {	
		const target = event.target; 

		if (target && target.classList.contains('create__summary')) {
			// console.log("hello")
			tabs.forEach((elem, num) => {
				if (elem === target.parentNode) {
					// adding function
					hideTabContent();
					showTabContent(num);
					// if () {
						// item.removeAttribute("open");
					// }
				}
			});
		} else {
			window.addEventListener("click", (e) => {
				const target = e.target; 

				if (target !== target.classList.contains('create__summary')) {
						// item.removeAttribute("open");
						tabs.forEach(item => item.removeAttribute("open"))
				}
			})
			// tabs.forEach(item => item.removeAttribute("open"))
		} 
	});

		// if (target && target.classList.contains("create__summary")) { 
		// 	console.log("this parent", target.parentNode)
		// }

		// console.log(clickedTab.parentNode)

		// var nums = clickedTab.forEach(item => {
		// 	// console.log(item.parentNode)
		// });
		// console.log(nums)

				// clickedTab.forEach(elem => {
				// 	if (item === elem) {
				// 		hideTabContent();
				// 		showTabContent(num);
				// 	}
				// });
/*
				tabs.forEach((item, num) => {
				clickedTab.forEach((elem, num) => {
					// console.log(elem.parentNode)
					if (item === elem.parentNode) {
						hideTabContent();
						showTabContent(num);

					}

				})
				// console.log(item)
				// console.log(num)


			});

*/

	/* =========== burger menu ============== */
	// какие навыки необхдимы программисту?
	const burgerBtn = document.querySelector(".nav__btn");

	burgerBtn.addEventListener("click", () => {
		if (burgerBtn === burgerBtn.hasAttribute("data-no")) {
			console.log("hello");
		}
		else {
			console.log("good bue");
		}
	});
});
