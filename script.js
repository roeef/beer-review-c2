let beers = [];

function addBeer (name, category,rate) {
    beers.push({'name':name, 'category':category, 'rate':rate});

}

$('.post-beer').click(function(){
    addBeer($(".beer-input").val(), $(".category-input").val(), $(".rate-input").val());
    renderBeers();
});

function renderBeers () {
    $('.beers-list').empty();
    beers.sort(function (a, b) {
        return a.rate - b.rate;
    })


    for(let i=0; i<beers.length;i++) {
        $('.beers-list').append("<li>"+beers[i].name + " - " + beers[i].category+ " - " + beers[i].rate + "</li>");
    }
}