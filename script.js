// Inicializa EmailJS
(function(){
    emailjs.init("HOy6o2W1X-XchqSUk"); // sua Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const statusEl = document.getElementById("form-status");
  statusEl.textContent = "Enviando...";

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    title: document.getElementById("title").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_default", "template_ev8j6gu", templateParams)
    .then(() => {
      return emailjs.send("service_default", "template_nrkcxg7", templateParams);
    })
    .then(() => {
      statusEl.textContent = "Mensagem enviada com sucesso! Você receberá uma resposta em breve.";
      statusEl.style.color = "green";
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("Erro:", error);
      statusEl.textContent = "Erro ao enviar mensagem. Verifique sua conexão ou tente novamente.";
      statusEl.style.color = "red";
    });
});
