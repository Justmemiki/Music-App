window.addEventListener('load', () => {
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll('.pads div');
	const visual = document.querySelector('.visual');
	colors = [ '#60d394', '#d36060', '#c060d3', '#d3d160', '#6860d3', '#60b2d3' ];

	//Let's get  going with the sound
	//index rappresenta l"indice del contatore del for
	pads.forEach((pad, index) => {
		pad.addEventListener('click', function() {
			sounds[index].currentTime = 0;
			sounds[index].play();

			createBubbles(index);
		});
	});

	//create function that makes bubbles
	const createBubbles = (index) => {
		const bubble = document.createElement('div');
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = 'jump 1s ease';
		bubble.addEventListener('animationEnd', function() {
			visual.removeChild(this);
		});
	};
});
