var orderNumber = document.getElementsByName("OrderNumber")[0].value;
var xhtr = new XMLHttpRequest();
xhtr.open("GET", 'https://my.dx.com/MyOrders/OrderTracking/' + orderNumber, true);
xhtr.onreadystatechange = function() {
	if (xhtr.readyState == 4) {
		var str = xhtr.responseText;
		var posStart = str.indexOf('_blank');
		var substr = str.substr(posStart + 10);
		posStart = substr.indexOf('_blank');
		substr = substr.substr(posStart);
		var trackNumber = substr.substr(8, 13);

		var elementDetails = document.getElementsByClassName('order_status_info oh')[0];

		var xhr = new XMLHttpRequest();
		xhr.open("GET", 'http://kazpost.kz/ru/requests/tracking/' + trackNumber, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				var str = xhr.responseText;
				var posStart = str.indexOf('maintext courier">');
				var substr = str.substr(posStart);
				var posEnd = substr.indexOf('<!-- .main -->');
				elementDetails.innerHTML += "<br><b>KazPost:</b> ";
				elementDetails.innerHTML += substr.substr(18, posEnd);
			}
		}
		xhr.send(null);
	}
}
xhtr.send(null);