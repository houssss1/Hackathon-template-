// Form submission handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formMessage = document.getElementById('formMessage');
  const button = this.querySelector('button[type="submit"]');
  const originalText = button.textContent;
  
  button.disabled = true;
  button.textContent = 'Sending...';

  try {
    const response = await fetch(this.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(this)
    });

    if (response.ok) {
      formMessage.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
      formMessage.className = 'form-message success';
      formMessage.style.display = 'block';
      this.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    formMessage.textContent = '✗ Error sending message. Please try again.';
    formMessage.className = 'form-message error';
    formMessage.style.display = 'block';
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
});
