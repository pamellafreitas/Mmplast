document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-item .nav-link');

    // Funcionalidade para colapsar a barra de navegação ao clicar fora dela
    document.addEventListener('click', function(event) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');

        // Verifica se o elemento clicado não está dentro da barra de navegação e não é o botão de toggler
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove('show');
        }
    });

    // Funcionalidade para alternar a classe 'active' nos itens de navegação
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove a classe 'active' e o estilo bold de todos os links de navegação
            links.forEach(function(otherLink) {
                otherLink.classList.remove('active');
                otherLink.style.fontWeight = 'normal';
            });
            // Adiciona a classe 'active' e aplica o estilo bold ao link de navegação clicado
            this.classList.add('active');
            this.style.fontWeight = 'bold';
        });
    });

    // Verificar qual link deve ser destacado como ativo com base na URL atual
    const currentPath = window.location.pathname.split('/').pop();
    links.forEach(function(link) {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.style.fontWeight = 'bold';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
   
   document.addEventListener('click', function(event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (!navbarCollapse.contains(event.target)) {
        navbarCollapse.classList.remove('show');
    }
    });

    
    document.querySelectorAll('.nav-item').forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
           
            document.querySelectorAll('.nav-item').forEach(function(link) {
                link.classList.remove('active');
            });
           
            this.classList.add('active');
        });
    });
});

$(window).on('resize', function(){
    $('.carousel').carousel('dispose').carousel();
});


document.querySelectorAll('.orcamento-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const item = this.getAttribute('data-item');
        const telefone = '5521964870598'; 

        
        const now = new Date();
        const hours = now.getHours();
        let saudacao;
        if (hours >= 6 && hours < 12) {
            saudacao = 'Olá, Bom dia!';
        } else if (hours >= 12 && hours < 18) {
            saudacao = 'Olá, Boa tarde!';
        } else {
            saudacao = 'Olá, Boa noite!';
        }

    
        const mensagem = saudacao + '%0A' + 'Gostaria de fazer um orçamento para este produto:%0A%0A*' + encodeURIComponent(item) + '*';
        const link = 'https://wa.me/' + telefone + '?text=' + mensagem;

        window.open(link, '_blank');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const produtos = document.querySelectorAll('.product');
    const verMais = document.getElementById('verMais');
    const verMenos = document.getElementById('verMenos');
    const metadeProdutos = Math.ceil(produtos.length / 2);

    // Oculta metade dos produtos
    for (let i = metadeProdutos; i < produtos.length; i++) {
        produtos[i].classList.add('hidden');
    }

    // Adiciona evento de clique em "Ver mais"
    verMais.addEventListener('click', function(e) {
        e.preventDefault();
        for (let i = metadeProdutos; i < produtos.length; i++) {
            produtos[i].classList.remove('hidden');
        }
        verMais.classList.add('hidden');
        verMenos.classList.remove('hidden');
    });

    // Adiciona evento de clique em "Ver menos"
    verMenos.addEventListener('click', function(e) {
        e.preventDefault();
        for (let i = metadeProdutos; i < produtos.length; i++) {
            produtos[i].classList.add('hidden');
        }
        verMais.classList.remove('hidden');
        verMenos.classList.add('hidden');
    });
});



