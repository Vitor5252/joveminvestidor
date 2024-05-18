document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');

    // Função para rolar suavemente para o topo
    function smoothScrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Detecta quando a página está sendo recarregada
    window.addEventListener('beforeunload', function() {
        smoothScrollToTop();
    });

    // Verifica se a página foi recarregada
    if (performance.navigation.type === 1) {
        setTimeout(() => {
            smoothScrollToTop();
        }, 0);
    }
});
