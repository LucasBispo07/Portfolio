// Inicializa EmailJS
(function() {
  emailjs.init("SNa-heMCl1Hm97lpF"); // sua Public Key
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
    from_email: document.getElementById("email").value
  };

  // Envia contato para você
  emailjs.send("service_default", "template_ev8j6gu", templateParams)
    .then(() => {
      // Envia resposta automática
      emailjs.send("service_default", "template_nrkcxg7", templateParams)
        .then(() => {
          statusEl.textContent = "Mensagem enviada com sucesso! Você receberá uma resposta em breve.";
          statusEl.style.color = "green";
          document.getElementById("contact-form").reset();
        })
        .catch(() => {
          statusEl.textContent = "Mensagem enviada, mas houve erro ao confirmar recebimento.";
          statusEl.style.color = "orange";
        });
    })
    .catch(() => {
      statusEl.textContent = "Erro ao enviar mensagem. Tente novamente.";
      statusEl.style.color = "red";
    });
});
