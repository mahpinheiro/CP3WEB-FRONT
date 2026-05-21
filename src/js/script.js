
/* Scroll suave */
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* Botão de voltar ao topo */


const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "voltarTopo";

document.body.appendChild(botaoTopo);


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});


botaoTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";

botaoTopo.style.padding = "12px 16px";

botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "10px";

botaoTopo.style.cursor = "pointer";

botaoTopo.style.background =
"linear-gradient(90deg, #5D5CFF, #C63EFF, #FF48F5)";

botaoTopo.style.color = "#FFFFFF";

botaoTopo.style.fontSize = "18px";

botaoTopo.style.display = "none";

botaoTopo.style.zIndex = "999";


/* Validação de formulário */


const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        

        const nome =
        document.getElementById("nome");

        const email =
        document.getElementById("email");

        const assunto =
        document.getElementById("assunto");

        const mensagem =
        document.getElementById("mensagem");



        if (
            nome.value.trim() === "" ||
            email.value.trim() === "" ||
            assunto.value.trim() === "" ||
            mensagem.value.trim() === ""
        ) {

            alert(
                "Preencha todos os campos antes de enviar."
            );

            event.preventDefault();

            return;

        }

        /* Verificação simples de e-mail. */

        if (!email.value.includes("@")) {

            alert(
                "Digite um e-mail válido."
            );

            event.preventDefault();

            return;

        }

        mostrarMensagemSucesso();
        formulario.reset();

    });

}

/* Efeito hoover */

const botoes = document.querySelectorAll(
    "button, .hero-botoes a, .cta a, .card a"
);



botoes.forEach(function (botao) {

    botao.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    botao.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});
function mostrarMensagemSucesso(){

    const mensagem = document.createElement("div");

    mensagem.innerHTML = `
        <strong>✓ Mensagem enviada!</strong><br>
        Nossa equipe retornará em breve através do e-mail informado.
    `;

    mensagem.style.position = "fixed";
    mensagem.style.top = "20px";
    mensagem.style.right = "20px";

    mensagem.style.padding = "20px";

    mensagem.style.background =
    "linear-gradient(90deg,#5D5CFF,#C63EFF,#FF48F5)";

    mensagem.style.color = "#fff";

    mensagem.style.borderRadius = "12px";

    mensagem.style.boxShadow =
    "0 8px 20px rgba(0,0,0,.3)";

    mensagem.style.zIndex = "9999";

    document.body.appendChild(mensagem);

    setTimeout(function(){

        mensagem.remove();

    }, 4000);

}