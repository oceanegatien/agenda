$(document).ready(function() {
	var annuaire = [];
		$('#submit').on('click', function() {
			var person = {	"nom":"",
							"prenom":"",
							"age":""};
			person["nom"] = $("#inputName").val();
			person["prenom"] = $("#inputFirstName").val();
			person["age"] = $("#inputAge").val();
		
			annuaire.push(person);

			
		$('input').val("");
		$('#personneUn').html("");
		for (var i = 0; i < annuaire.length; i++) {
			console.log(person);
			var personne = annuaire[i];
			$('#personneUn').append('<tr><td>'+ personne.nom+'</td>'+'<td>'+ personne.prenom+'</td>'+'<td>'+ personne.age+'</td></tr>');
			}
			
			//$('#personneUn').html('<td>'+ person["prenom"]+'</td>'+ '<td>'+ person["nom"]+'</td>'+'<td>'+ person["age"]+'</td>');
			//return (annuaire[i]);};
			
		});
			

});





