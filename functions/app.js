// Exercice 1
function machin() {
	return true ;
}
	console.log( machin() )


// Exercice 2
function chainesDeCaractères(bien){
	return bien ;

}
	console.log(chainesDeCaractères("bien"));


// Exercice 3
function chaineDeCaractère(bien, poto){
	return bien + poto;

}  
	console.log(chaineDeCaractère("bien", "poto"));


// Exercice 4
function nombres(a, b){

	if (a > b) {
		return "Le premier nombre est plus grand";
	}
	else if (a == b) {
		return "Les deux nombres sont identiques";
	}
	else {
		return "Le premier nombre est plus petit" ;
	}

}
 
 var resultat = nombres(70, 70);
 console.log(resultat);

 // Exercice 5
 function chaineNombres(chiffre1, chaine){
 	return  chiffre1 + " " + chaine ;

 }
 console.log(chaineNombres(25, "hello"));
 
 // Exercice 6
function identité(nom, prenom, age) {
	return "Bonjour" + " " + nom + " " + prenom + ",tu as" + age + " " + "ans";

}
console.log(identité("Rifai", "Mouad", 25));

// Exercice 7
function genre()