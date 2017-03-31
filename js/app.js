	var annuaire = [];
	var i;
	var person = {	"nom":"",
							"prenom":"",
							"age":""};
		function charger() {
			var a = localStorage.getItem('annuaire');
			console.log(annuaire);
		}
$(document).ready(function() {
	charger();
	$('#submit').on('click', function() {
			person["nom"] = $("#inputName").val();
			person["prenom"] = $("#inputFirstName").val();
			person["age"] = $("#inputAge").val();
		
			annuaire.push(person);

			
	$('input').val("");
	$('#personneUn').html("");
		for (i = 0; i < annuaire.length; i++) {
			var personne = annuaire[i];
			$('#personneUn').append('<tr id="line'+i+'"><th>'+ personne.nom+'</th><th>'+ personne.prenom+'</th><th>'+ personne.age+'</th><th><button id="btndel" type="button" class="btn btn-danger">X</button></th></tr>');

localStorage.setItem('annuaire', JSON.stringify(annuaire));
//var restaurer = JSON.parse(localStorage.getItem('i'));
    
			
		};
  

	/*$("tbody").delegate('#btndel', "click", function() {
		$(this).parent().parent().remove();
			});*/
	});

});




//if ('input' != null)