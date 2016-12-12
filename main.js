console.log('hey')

$("h1").html("Hi friends")

$(document).ready(function(){

})

var foods =['apple', 'pizza', 'tacos', "cookies", "oranges", "pizza again"]

for (var i = 0; i < foods.length; i++) {
    $('ul').append(`<li>${foods[i]}</li>`)
}

$('ul').wrap(`<div class="foods"></div>`)
$('input:text').val(`Hello`)
$(':submit').click(function(){
    console.log($('input:text').val())
})
$.getJSON('https://randomuser.me/api/?nat=us', function(data){
    console.log(data)
    var firstName = data.results[0].name.first
    $('input:text').val(`Hello ${firstName}`)
})
