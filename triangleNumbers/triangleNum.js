// Function for calculating Triangle Numebrs
function mul() { 
	var b = ""; 
	var c = parseInt(txt.value); 
	for(var a=1; a<=c; a++) { 
			for(var d=1; d<=a; d++) { 
			b +="&utrif;" ; 
		} 
		b += "" + "<br>"; 
	} 
	box.innerHTML= "<br>"+ "<br>"+c + "  triangular number =   " +  (c*(c+1)/2) + "<br>" + "<br>"+b ; 
	  
}