
    function alimentarGatos() {
        alert('Calabresa e Naninha ficaram muito felizes com a comida!'); 
        var caixa = document.getElementById('as-duas-fotos-da-naninha-e-calabresa');
        caixa.style.opacity = '0.3';
        setTimeout(function() {
            caixa.style.opacity = '1';
        }, 500); }
