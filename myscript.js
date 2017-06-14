$(function() {

$('[data-toggle="popover"]').popover(); 
// Gather user name and populate site with it


 
$('#submit').on('click', function() {
	var user = $('#userName').val();
	
	String.prototype.caps = function(){
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
	$('.user').html(' ' + user.caps());
	$('#getUserName').hide();
});

 //scroll reveal begins here
	window.sr = ScrollReveal();
	sr.reveal('.jumbotron a', {
	duration: 2000,
	origin: 'left',
	distance: '150px',
	delay: 1000
	});
	sr.reveal('#projects', {
	duration: 2000,
	origin: 'bottom',
	distance: '100px'
	});
	sr.reveal('#getUserName', {
	duration: 2000,
	origin: 'top',
	distance: '25px'
	});
	sr.reveal('#toolkit-opening', {
	duration: 2000,
	origin: 'right',
	delay: 500
	});
});
