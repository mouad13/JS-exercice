// Exercice 1
function machin() {
	return true ;
}
	console.log( machin() )


// Exercice 2
function chaines_de_caractères(bien){
	return bien ;

}
	console.log(chaines_de_caractères("bien"));


// Exercice 3
function chaine_de_caractère(bien, poto){
	return bien + poto;

}  
	console.log(chaine_de_caractère("bien", "poto"));


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