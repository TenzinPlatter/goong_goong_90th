import "./styles.css"
import babyPNG from "./assets/goong_goong_family.png"

const body = document.querySelector("body")!;

const info = <HTMLElement>document.querySelector(".info")!;
const img = document.createElement("img");
img.src = babyPNG;
img.classList.add("goong-goong");
let hasClicked: boolean = false;

img.addEventListener("click", () => {
	if (hasClicked) return;
	hasClicked = true;

	img.style.top = "-80%";
	img.style.transition = "1.5s ease-in";

	setTimeout(() => {
		img.style.display = "none";
	}, 2000);

	const hint = <HTMLElement>document.querySelector(".hint")!;
	hint.style.display = "none";

	setTimeout(() => {
		info.style.display = "flex";
		for (let i = 0; i < info.children.length; i++) {
			const container = info.children[i];
			for (let j = 0; j < container.children.length; j++) {
				const child = <HTMLElement>container.children[j];
				child.addEventListener("animationend", () => {
					child.classList.add("after-anim");
				})
				setTimeout(() => {
					child.style.animation = "5s fadeIn"
				}, i * 6000 + j * 1000)
			}
		}
	}, 2000);
});

const clickMe = document.createElement("div");
clickMe.textContent = "Click (or tap) the picture!";
clickMe.classList.add("hint");

body.appendChild(img);
body.appendChild(clickMe);
