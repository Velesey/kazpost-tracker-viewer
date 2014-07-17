var elementNum = document.getElementsByClassName('no')[2];
var elementDetails = document.getElementsByClassName('detail')[2];

var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://kazpost.kz/ru/requests/tracking/' + elementNum.innerHTML, true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) // если всё прошло хорошо, выполняем, что в скобках
	{
		var str = xhr.responseText;
		var posStart = str.indexOf('maintext courier">');
		var substr = str.substr(posStart);
		var posEnd = substr.indexOf('<!-- .main -->');
		elementDetails.innerHTML += "<br><b>KazPost:</b> ";
		elementDetails.innerHTML += substr.substr(18, posEnd);
	}
}
xhr.send(null);