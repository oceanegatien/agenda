$(document).ready(function() {

		var annuaire = [];
	$('#submit').click(function() {
		var person = {	"nom":"",
						"prenom":"",
						"age":""};
		person["nom"] = $("#inputFirstName").val();
		person["prenom"] = $("#inputName").val();
		person["age"] = $("#inputAge").val();
		
		annuaire.push(person);
		console.log(annuaire);
		$('input').val("");


		$('#personneUn').html('<td>'+ person["prenom"]+'</td>'+ '<td>'+ person["nom"]+'</td>'+'<td>'+ person["age"]+'</td>');
		
	});

});




