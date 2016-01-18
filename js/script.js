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