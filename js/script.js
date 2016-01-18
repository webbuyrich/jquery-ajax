$(document).ready(function(){


});

//send Ajax function
function sendAjax(){
	
	$('#ajax').show().load('ajax-success.html');	
	$('#call-success').hide();
}

//Go back to 
function goBack(){
	$('#ajax').hide();
	$('#call-success').show();
}

//sample ajax call 
var url = '/employees.php';
var data = { 
	firstname: "Dave", 
	lastname: "Johnson"
}
 var callback = function(response){

 }

 

 //more common syntax call
 $.get('/employees.php', 
 	{ 
 		firstname: "Dave", 
 		lastname: "Johnson"
 	}, function(response){

 });