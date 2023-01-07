var quotes = [
    'Demo Quote 1',
    'Demo Quote 2',
    'Demo Quote 3',
    'Demo Quote 4',
     'Demo Quote 5',
     'Demo Quote 6',


]
function myFunction() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
   alert( document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];)

}