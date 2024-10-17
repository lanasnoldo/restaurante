document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset(); // Limpa o formulário após o envio
});

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Reserva feita com sucesso!');
    this.reset(); // Limpa o formulário após o envio
});

