var inputs = document.querySelectorAll(".fieldInput");

inputs.forEach((element) => {
  console.log(element);
});
console.log(inputs);

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("55E9Ijuc2CVpVcwsx");
})();
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var recaptchaResponse = grecaptcha.getResponse();
      if (recaptchaResponse === '') {
        alert("Merci de cocher la case 'Je ne suis pas un robot' avant d'envoyer votre message !");
        console.log("erreurCaptcha")
        // reCaptcha n'a pas été validé, afficher une erreur ou empêcher l'envoi du formulaire
        return;
      }
      console.log(recaptchaResponse);

      let templateParams = {
        'from_name' : document.querySelector('#contact_from_name').value,
        'user_email' : document.querySelector('#contact_user_email').value,
        'message' : document.querySelector('#contact_message').value,
        'g-recaptcha-response' : recaptchaResponse
      };
      console.log(templateParams);
      // generate a five digit number for the contact_number variable
      // these IDs from the previous steps
      emailjs.send("contact_service", "contact_form", templateParams).then(
        function () {
          console.log("SUCCESS!");
          alert("Le message a bien été expédié ! Merci pour le petit mot :)");
          var inputs = document.querySelectorAll(".fieldInput");
          inputs.forEach(function (item, i) {
            item.value = "";
          });
        },
        function (error) {
          console.log("FAILED...", error);
          alert(
            "Oups ! Quelque-chose s'est mal passé. Le message ne s'est pas envoyé : /"
          );
        }
      );
    });
};
