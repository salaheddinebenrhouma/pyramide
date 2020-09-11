var rowsnumber = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'etages veux-tu ?");
function checkRowsnumber (rowsnumber) {
    if (rowsnumber >=1 && rowsnumber <= 25) {
        console.log("Voici la pyramide :");
        displayPyramid(rowsnumber);
    } else {
        alert("Pyramide rows number must be between 1 and 25");
    }
}
function displayPyramid(rowsnumber) { 
    for (var i = 0; i < rowsnumber; i++) { 
      var str = ''; 
      for (var j = 1; j < rowsnumber-i; j++) { 
        str = str + ' '; 
      } 
      for (var k = 1; k <= (2*i+1); k++) { 
        str = str + '*'; 
      } 
      console.log(str); 
    } 
  }
 checkRowsnumber(rowsnumber);


  