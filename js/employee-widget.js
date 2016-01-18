$(document).ready(function(){

	var url = "data/employees.json";

	$('#call-success').click(function(){

		$.getJSON(url, function(response){

			var employeeHTML = '<ul class="list-group-item">';
			$.each(response, function(index, employee){
				if(employee.inoffice === true){
					employeeHTML += '<li class="list-group-item "><button type="button" class="btn btn-sm btn-success status-in">IN</button>';
					employeeHTML += employee.name;
					employeeHTML += '</li>';
				} else {
					employeeHTML += '<li class="list-group-item "><button type="button" class="btn btn-sm btn-danger status-out">OUT</button>';
					employeeHTML += employee.name;
					employeeHTML += '</li>';
				}
				

			});
			employeeHTML += "</ul>";
			console.log(employeeHTML);
			$('#ajax').html(employeeHTML);

		});// end getJSON

		
		

	});// end click function


});// end document ready