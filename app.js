$(document).ready(function () {
  console.log('doc loaded');

  // $.get('https://source.unsplash.com/category/nature', function () {
  //   console.log('requested');
  // })
  // .done(function(data) {
  // console.log(data);
  // });

  $.get('http://ron-swanson-quotes.herokuapp.com/quotes'
  , function () {
    console.log('requested');
  }).done(function(data) {
    console.log(data);
    console.log(data.quote);
    var quote = data.quote.toString();
    $('#quote').append('<h1>' + quote + '</h1>')
  })


});
