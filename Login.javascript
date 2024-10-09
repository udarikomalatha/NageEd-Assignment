
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate input
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('All fields are required!');
        return;
    }

    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Log data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display success message
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('contactForm').reset(); // Reset the form
});

