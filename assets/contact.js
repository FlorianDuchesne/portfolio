

var inputs = document.querySelectorAll(".fieldInput");

inputs.forEach(element => {
  console.log(element);
});
console.log(inputs);

(function () { // https://dashboard.emailjs.com/admin/account
emailjs.init('55E9Ijuc2CVpVcwsx');
})();
window.onload = function () {
document.getElementById('contact-form').addEventListener('submit', function (event) {
event.preventDefault();
// generate a five digit number for the contact_number variable
// these IDs from the previous steps
emailjs.sendForm('contact_service', 'contact_form', this).then(function () {
console.log('SUCCESS!');
alert("Le message a bien été expédié ! Merci pour le petit mot :)");
var inputs = document.querySelectorAll(".fieldInput");
inputs.forEach(function(item, i){
  item.value = "";
});
}, function (error) {
console.log('FAILED...', error);
alert("Oups ! Quelque-chose s'est mal passé. Le message ne s'est pas envoyé : /");
});
});
}
