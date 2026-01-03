const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", e => {
  e.preventDefault();
  success.textContent = "Message sent successfully!";
  form.reset();
});
