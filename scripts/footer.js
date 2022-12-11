function createFooter(){
    let footer = document.querySelector('footer');

    footer.innerHTML = 
    `<p class="footer-title">Sobre nós</p>
    <p class="info">A Retrones foi criada por um grupo de estudantes de Sistemas de Informação da Universidade Federal do Rio Grande, com o objetivo de levar a nostalgia para sua casa no formato do seu videogame favorito. </p>
    <p class="info">E-mail: suporte@retrones.com</p>
    <p class="info">Telefones: (53) 9 9999-9999, (53) 9 8888-8888</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">termos & serviços</a>
            <a href="#" class="social-link">privacidade</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Feito com ❤️ por Clarisse, Gabriel, Henrique, Nairo e Richard</p>`
}

createFooter();