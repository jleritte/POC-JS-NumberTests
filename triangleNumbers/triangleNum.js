// Function for calculating Triangle Numebrs
function mul(x) { 
	return (x * (x + 1) / 2);
}



function showTri(argument) {
	var b = ""; 
	var c = parseInt(txt.value); 
	for(var a=1; a<=c; a++) {
		b += "<div class='tri'>"; 
		for(var d=1; d<=a; d++) { 
			b += "&utrif; "; 
		}
		b += "</div>";
	} 
	box.innerHTML= "<br>"+ "<br>"+c + "  triangular number =   " +  mul(c) + "<br>" + "<div class='contain'>" + b + "</div>"; 
}
