///// Begining Main Timeline /////
var tl = new TimelineMax({});

tl.from("#logo-wrapper", 1, {
	scale: 0,
	ease: "back.out(1.7)",
	delay: 0.5
});

tl.from("#coke-bottle-wrapper", 1, {
	scale: 0,
	ease: "back.out(1.7)",
	delay: -0.85,
	transformOrigin: "bottom"
});

tl.to("#text, #logo-simple", 0.8, {
	x: 180,
	ease: Power3.easeOut,
	delay: -0.65
});

tl.to("#text, #logo-simple", 1.25, {
	x: -180,
	ease: "back.inOut(1.7)",
	delay: 0.35
});

tl.staggerTo(
	".stagger-1",
	0.8,
	{
		x: 220,
		ease: "back.out(1.5)",
		delay: -0.25
	},
	0.1
);

tl.to("#text-start", 0.45, {
	rotationX: 90,
	transformOrigin: "top",
	ease: Power2.easeOut
});

tl.from("#text-end", 1.5, {
	rotationX: 90,
	transformOrigin: "top",
	ease: Elastic.easeOut.config(1, 0.4)
});

tl.staggerTo(
	".stagger-1",
	0.8,
	{
		x: -220,
		ease: "back.in(1.5)",
		delay: -1
	},
	0.1
);

tl.to("#coke-bottle-wrapper", 0.7, {
	scale: 0,
	ease: Power3.easeOut,
	delay: -0.15,
	transformOrigin: "bottom"
});

tl.from("#form", 1, {
	scale: 0,
	ease: "back.out(1.7)",
	delay: -0.85
});

loopEndAnimation(".form-input");

///// Mini Looping Timlines /////
// Scale Pulse Timeline
function loopEndAnimation(selector) {
	var tl3 = new TimelineMax({ repeat: -1 });
	tl3.from(selector, 3, {
		scale: 1
	});

	tl3.to(selector, 0.35, {
		scale: 1.1
	});

	tl3.to(selector, 0.35, {
		scale: 1
	});
}

// Shimmer Timeline
var shimmer = new TimelineMax({ repeat: -1 });
shimmer.to("#line", 5, {
	delay: 0.5
});
shimmer.to("#line", 1, {
	x: 150,
	delay: 0.5
});

///// Functions & Pt II of timeline /////
setTimeout(function() {
	console.log("18000 hit");
	if (userInputMade === true) {
		console.log("user has made the section");
		// does nothing in this case
	} else if (userInputMade === false) {
		document.getElementById("name-goes-here").value = "";
		document.getElementById("name-goes-here").readOnly = true;
		console.log("automatic name created");
		typeWriter();
		setTimeout(function() {
			getNameWithoutUser(txt);
		}, 600);
	}
}, 13000);

///// Global Variables /////
let userInputMade = false;
let nameArray = [
	"Adam",
	"Lisa",
	"Paige",
	"Morgan",
	"Thomas",
	"William",
	"Susan",
	"James",
	"Elizabeth",
	"Annie",
	"Paul"
];
var i = 0;
var speed = 85; /* The speed/duration of the effect in milliseconds */
let txt = nameArray[Math.floor(Math.random() * 10)];
let isBtnPressed = false;
let isInputClicked = false;

//Typewriter function
function typeWriter() {
	if (i < txt.length) {
		document.getElementById("typewriter").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

// Submits form on "enter" press
const input = document.getElementById("name-goes-here");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13 && isBtnPressed === false) {
		isBtnPressed = true;
		event.preventDefault();
		document.getElementById("input-btn").click();
	}
});

// Sequence for if user doesn't enter name
function getNameWithoutUser(name) {
	document.getElementById("apended-name").innerText = name;
	secondPartAnimation();
}
// Sequence for if user enters name
function getName() {
	if (isInputClicked === false) {
		let username = document.getElementById("name-goes-here").value;
		userInputMade = true;
		isInputClicked = true;
		document.getElementById("apended-name").innerText = username;
		console.log(username);
		secondPartAnimation();
	}
}

// Final animation sequence
function secondPartAnimation() {
	var tl2 = new TimelineMax({});

	tl2.to("#form", 1, {
		scale: 0,
		y: -60,
		delay: 0.3,
		ease: Back.easeIn.config(1.7)
	});

	tl.to("#coke-bottle-wrapper-2", 2.3, {
		scale: 1,
		ease: "back.out(1.7)",
		transformOrigin: "bottom",
		delay: -0.25
	});

	tl.to("#coke-bottle-wrapper-2", 1, {
		scale: 0.53,
		y: -142,
		x: -75,
		ease: Power3.easeOut
	});

	tl.staggerTo(
		".stagger-1",
		0.8,
		{
			x: 220,
			ease: "back.out(1.5)",
			delay: -0.25
		},
		0.1
	);

	tl.staggerTo(
		".stagger-1",
		0.8,
		{
			x: -220,
			ease: "back.in(1.5)",
			delay: 1
		},
		0.1
	);
	tl.to("#text, #logo-simple", 0.8, {
		x: 180,
		ease: Power3.easeOut
		// delay: -0.65
	});
	tl.to("#cta-wrapper", 0.8, {
		scale: 1,
		ease: Power3.easeOut
		// delay: -0.65
	});
	loopEndAnimation("#cta-text");
}
