document.addEventListener("DOMContentLoaded", function () {
    emailjs.init('b9oreNqbaCQECsfC8');
  const form = document.getElementById("contactForm");
  if (!form) {
    console.error("Form with id 'contact-form' not found.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_u0hkg2s", "template_lgn6fll", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Oops! Something went wrong. Please try again.");
      })
      
  });
});
