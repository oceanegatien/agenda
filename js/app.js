$(document).ready(function() {
	var annuaire = [];
	var i;
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
		for (i = 0; i < annuaire.length; i++) {
			console.log(person);
			var personne = annuaire[i];
			$('#personneUn').append('<tr id="line'+i+'"><th>'+ personne.nom+'</th><th>'+ personne.prenom+'</th><th>'+ personne.age+'</th><th><button id="btn" type="button" class="btn btn-danger">X</button></th></tr>');
			}
			
			//$('#personneUn').html('<td>'+ person["prenom"]+'</td>'+ '<td>'+ person["nom"]+'</td>'+'<td>'+ person["age"]+'</td>');
			//return (annuaire[i]);};
			
		});

	$('tbody').delegate('#btn', 'click', function() {
		$(this).parent().parent().remove();
		console.log('hello');
	});
			

});





