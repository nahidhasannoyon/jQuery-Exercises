$(function () {
	// * Adding new element to the DOM
	// $('ul ul').append('<li>This is append method</li>');
	// ? adding an li inside the end of an ul which inside of another ul
	// $('<li>This is appendTo method</li>').appendTo('ul ul');
	// ? alternative of append
	// $('ul ul').prepend('<li>This is prepend method</li>');
	// ? adding an li inside the first of an ul which is inside of another ul
	// $('<li>This is prependTo method</li>').prependTo('ul ul');
	// * adding element after an element
	// $('.red-box').after('<div class="red-box">After Red</div>');
	// * adding element before an element
	// $('.blue-box').before('<div class="blue-box">Before Blue</div>');
	// * adding new element using function in before
	// $('.blue-box').before(function () {
	// 	return '<div class="blue-box">Before Blue</div>';
	// });
	////
	// * Replacing element and content
	// $('ul li li').replaceWith(function () {
	// 	return '<li>replacedWith</li>';
	// });
	// var firstListItem = $('li:first');
	// $('p:first').replaceWith(firstListItem);
	// ? it will replace the first paragraph with li first
	// $('p').replaceWith(firstListItem);
	// ? it with clone first li to every paragraph.
	// * Eleventh Challenge
	// $('.red-box , .blue-box').replaceWith(function () {
	// 	return '<div class="green-box">New Blue</div>';
	// });
	// * using alternative method
	// $('<div class="green-box">New Blue</div>').replaceAll(
	// 	'.red-box , .blue-box'
	// );
	////
	// * Removing Element and Content
	// $('li').remove();
	// * twelfth Challenge
	// $('form').children().not('input:text, textarea, br').remove();
	// var detachedListItem = $('ul:first').detach();
	// $('#content').append(detachedListItem);
	// ? element is detached from the page but if is stored in a variable then it can be append or prepend in anywhere.
	// $('p:first').empty();
	// ? inside the p tag everything will be removed on page load.
	// * 13th Challenge
	// $('.red-box, .blue-box, .green-box ').empty();
	////
	// * Manipulating Attributes and Properties - attr(), prop(), val()
	// var specialLink = $('#special-link');
	// console.log(specialLink.attr('href'));
	// ? checking the value of that link.
	// console.log(specialLink.attr('title'));
	// ? undefined things will show undefined
	// specialLink.attr('href', 'https://en.wikipedia.org/');
	// ? giving double parameter will first select that attribute then change its value as the second parameter.
	// var checkedBox = $('input:checkbox');
	// console.log(checkedBox.prop('checked'));
	// ? prop method is only those who have e fixed value or meaning, like required, checked, etc.
	// var textInput = $('input:text');
	// console.log(textInput.val());
	// ? printing the previous value set on input box
	// textInput.val('Daya');
	// ? changing the value of input box
	// var rangeInput = $('input[type="range"]');
	// console.log(rangeInput.val());
	////
	var galleryImage = $('.gallery').find('img').first();
	var images = [
		'images/laptop-mobile_small.jpg',
		'images/laptop-on-table_small.jpg',
		'images/people-office-group-team_small.jpg',
	];

	var i = 0;
	// ? setInterval is a javascript method
	setInterval(function () {
		i = (i + 1) % images.length;
		galleryImage.fadeOut(function () {
			galleryImage.attr('src', images[i]);
			$(this).fadeIn();
			// ? inside of any selected elements function this keyword can used to refer it.
		});
	}, 2000);
});
