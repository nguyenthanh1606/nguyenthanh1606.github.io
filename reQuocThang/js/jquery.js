$(document).ready(function() {
	$('.carousel').carousel({
		interval: 5000
	})
});

function SignupNewsletterSuccess(data) {
    $('#singup-newsletter-area').html('<p>' + data.message + '</p>')
}

function ContactSuccess(data) {
    $('#contact-area').html('<p>' + data.msg + '</p>')
}

function ContactSuccess(result) {
    $('#alert-contact').text(result.msg);
}
