const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const serviceSelect = document.querySelector('#service');
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const service = String(formData.get('service') || 'Other IT task');
    const message = String(formData.get('message') || '').trim();
    // Replace this placeholder with your preferred public contact email before publishing.
    const contactEmail = 'YOUR_EMAIL@example.com';
    if (contactEmail.includes('YOUR_EMAIL')) {
      formNote.textContent = 'Before publishing, replace YOUR_EMAIL@example.com in script.js with your contact email. The message is shown below for now.';
      const draft = `To: [add your contact email]\nSubject: Freelance IT enquiry — ${service}\n\nName: ${name}\nReply email: ${email}\nService: ${service}\n\n${message}`;
      const existing = document.querySelector('#draft-preview');
      if (existing) existing.remove();
      const preview = document.createElement('pre');
      preview.id = 'draft-preview';
      preview.className = 'draft-preview';
      preview.textContent = draft;
      form.appendChild(preview);
      return;
    }
    const subject = encodeURIComponent(`Freelance IT enquiry — ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\nService: ${service}\n\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  });
}
