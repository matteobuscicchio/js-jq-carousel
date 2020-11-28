// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.

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
});