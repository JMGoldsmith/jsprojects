$(document).ready(function(){
	console.log('Ready!');
	$('h1').addClass('things')
})
var link = 'http://jsonplaceholder.typicode.com';
$.ajax({
	url: link + '/posts/1',
	method: 'GET'
}).then(function(data){
	$('h2').text(data.title).draggable()
})