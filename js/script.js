$(function () {
	// jQuery goes here...
	// Uncomment this line to fade out the red box on page load
	// * learning First
	// $('.red-box').fadeOut(2000);
	// * First Challenge
	// $('.green-box').fadeOut(2000);
	// $('.red-box').fadeIn(2000);
	// * Second Challenge
	// $('.red-box').fadeTo(2000, 0.5);
	// * Third Challenge
	// $('.red-box').fadeTo(2000, 0.2);
	// $('.green-box').fadeTo(2000, 0.5);
	// $('.blue-box').fadeTo(2000, 0.8);
	// * fadeToggle
	$('.red-box').fadeToggle();
	$('.red-box').fadeToggle(1000);
	$('.red-box').fadeToggle();
	// ? if the box is not faded then it will fade and vice versa, on double toggle the box will appear to it's previous form.
});
