$(document).ready(function() {

	$('#submit').click(function() {
		var annuaire = [];
		var person = {	"nom":"",
						"prenom":"",
						"age":""};
		person["nom"] = $("#inputFirstName").val();
		person["prenom"] = $("#inputName").val();
		person["age"] = $("#inputAge").val();
		
		annuaire.push(person);

		$("#infoUn").html(person["prenom"]);
		$("#infoDeux").html(person["nom"]);
		$("#infoTrois").html(person["age"]);
	});
	
});




