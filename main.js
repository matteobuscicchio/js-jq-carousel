// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS
$(document).ready(function(){
    /**
     * Regola il funzionamento della freccetta destra.
     * 
     * Ad ogni click verifica che l'elemento mostrato abbia la classe ".last", e permette al ciclo di ricominciare.
     */
    var rightArrow = $('.next i');
    rightArrow.click(function() {
        firstItem = $('img.first, i.first');
        var activeItem = $('img.active, i.active');
        if (activeItem.hasClass('last')) {
            activeItem.removeClass('active');
            firstItem.addClass('active');
        } else {
            activeItem.removeClass('active').next().addClass('active');
        }
    });
    /**
     * Regola il funzionamento della frecceta sinistra.
     * 
     * Ad ogni click verifica che l'elemento mostrato abbia la classe ".first", e permette al ciclo di ricominciare.
     */
    var leftArrow = $('.prev i');
    leftArrow.click(function() {
        var lastItem = $('img.last, i.last');
        var activeItem = $('img.active, i.active');
        if (activeItem.hasClass('first')) {
            activeItem.removeClass('active');
            lastItem.addClass('active');
        } else {
            activeItem.removeClass('active').prev().addClass('active');
        }
    });
    /**
     * Abilita l'uso delle frecce detta tastiera.
     */
    onkeydown = function(ev) {
        if (ev.keyCode == 37) {
            leftArrow.click();
        } else if (ev.keyCode == 39) {
            rightArrow.click();
        } else {
            console.log('usa le frecce "destra" e "dinistra" per navigare tra le immagini');
        }
    };
});