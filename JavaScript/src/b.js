function printInformation() {
    var roomName = document.querySelector('.bui-list__item').innerText;
	const allPrice = document.getElementsByClassName("bp-price-details__charge-value e2e-price-details__total-charge--user")[0].innerText;
	var currencyISOCode = allPrice.split(' ')[0].slice(0, 3);
	var detailPrice = allPrice.split(' ')[0].slice(4);
	var selectText = document.getElementsByClassName("bui-f-font-strong")[1].innerText;
	var selectPriceTetx = document.getElementsByClassName("bp-price-details__charge-name")[1].innerText;
    console.log(selectText +' '+roomName);
	console.log(selectPriceTetx + ': '+currencyISOCode+' '+detailPrice+'.');
};
     
