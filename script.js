(function () {
  emailjs.init("IyMurxSTkpSP_qmeO"); // ✅ Your Public Key
})();

const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.send(
    "service_4x9up6f",     // ✅ Your Service ID
    "template_u29nqyw",    // ✅ Your Template ID
    {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }
  )
  .then(() => {
    success.innerText = "Message sent successfully ✅";
    success.style.color = "#22d3ee";
    form.reset();
  })
  .catch((error) => {
    success.innerText = "Message failed ❌";
    success.style.color = "red";
    console.error("EmailJS Error:", error);
  });
});
