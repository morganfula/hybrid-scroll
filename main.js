const stickySection = [...document.querySelectorAll('div.sticky')];

let images = [
	'https://dr.savee-cdn.com/things/6/3/46eb4b74ea3ec0cfc74ec5.webp',
	'https://dr.savee-cdn.com/things/6/4/8dbbc276c3a306e61e9b5b.webp',
	'https://dr.savee-cdn.com/things/6/4/907a5a0ad4ef8bcdb8c3b6.png',
	'https://dr.savee-cdn.com/things/5/c/0255cfa7d14c4923781f34.webp',
];

images.forEach(img => {
	stickySection.forEach(section => {
		let image = document.createElement('img');
		image.src = img;

		section.querySelector('.scroll__section').appendChild(image);
	});
});
window.addEventListener('scroll', e => {
	for (let i = 0; i < stickySection.length; i++) {
		transform(stickySection[i]);
	}
});

const transform = section => {
	const offsetTop = section.parentElement.offsetTop;
	const scrollSection = section.querySelector('.scroll__section');

	let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
	percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;

	scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
};
