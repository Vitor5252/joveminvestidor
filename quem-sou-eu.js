document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
    console.log('DOMContentLoaded: body class added');

    // Função para rolar suavemente para o topo
    function smoothScrollToTop() {
        console.log('smoothScrollToTop called');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Detecta quando a página está sendo recarregada
    window.addEventListener('beforeunload', function() {
        console.log('beforeunload: calling smoothScrollToTop');
        smoothScrollToTop();
    });

    // Verifica se a página foi recarregada
    if (performance.navigation.type === 1 || performance.navigation.type === 2) {
        console.log('Page reloaded: calling smoothScrollToTop');
        setTimeout(() => {
            if (window.scrollY !== 0) {
                smoothScrollToTop();
            }
        }, 0);
    }
});
