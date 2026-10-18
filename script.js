const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) {
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
form?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Consultation request: ${data.get("area")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nArea of inquiry: ${data.get("area")}\n\nMessage:\n${data.get("message")}\n\nPlease note: this is an initial inquiry and does not contain confidential information.`
  );
  const recipient = "contact@example.com"; // Replace with the firm's real contact email.
  document.getElementById("formStatus").textContent =
    "Your email application should open with a draft. Review it and send it from your email app.";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});