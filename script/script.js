// aler("Olá, aqui é o Jonas, como desenvolvedor front-end, eu desenvolvi esse portfólio no intuito de testar minhas habilidades em desenvolvimento web, no entanto ainda se encontra em constantes manuntenções no código fonte. ☺️ 24h na vida de um estudante passa tão rápido quanto dinheiro na mão de pobre (pelo menos é o que dizem rs)")



window.addEventListener('scroll', function() {
    let ScrollPos = window.scrollY // pega a cordenada de altura atual Y
    let image = document.querySelector(".imagem-fixa")

    image.style.top = ScrollPos * -1.8 + 'px';
});