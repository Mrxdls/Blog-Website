document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("WWBa4TgadRDcZw5NP");

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Send form data to EmailJS
        emailjs.sendForm('service_5oetqus', 'template_7ieepx7', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your message has been sent successfully!");
                location.reload(); // Refresh the page after showing the alert
            }, function (error) {
                console.log('FAILED...', error);
                alert("There was an error sending your message. Please try again.");
            });
    });
});
