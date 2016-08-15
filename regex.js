document.getElementById("btnMatch").addEventListener("click",regularExpression);

function regularExpression(){
	var normalText = document.getElementById("normalText").value;
	var myRegexp=new RegExp(document.getElementById("regularEx").value);
	var match = myRegexp.exec(normalText);
	if(normalText == "" || myRegexp == "" || match == null ){
		document.getElementById("Rex").innerHTML = "";
		alert("Please be careful!");
		return;
	}
	var resultText ="";
	for (index = 0; index < match.length; index++) {
		resultText += "group["+index+"] --->"+match[index]+"<br/>";
	}	
	document.getElementById("Rex").innerHTML = resultText;
}