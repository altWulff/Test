function requestInfo(indx) {	
	var tableCell  = document.getElementsByClassName('hprt-table-cell hprt-table-cell-occupancy')[indx]
	var getCls = tableCell.nextElementSibling.classList;
	var roomPrice = document.getElementsByClassName(getCls[0])[indx].getElementsByClassName('prco-valign-middle-helper')[0].innerText;
	var ocupacy = document.getElementsByClassName('hprt-table-cell hprt-table-cell-occupancy')[indx].getElementsByClassName('hprt-block')[0].innerText;
	var seectId = document.getElementsByClassName(' hprt-table-cell hprt-table-room-select')[indx].getElementsByTagName('select')[0].id;
	return Array(String('#'+seectId), parseInt(ocupacy.split(':')[1]), parseFloat(roomPrice.split(' ')[0].slice(4).replace(',', '.')));
};


function getArrayMin(array) {
	return Math.min.apply(null, array);
};


function findMinWithMaxPersons(array, maxPersons) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (requestInfo(i)[1] == maxPersons) {
			newArray.push(requestInfo(i)[2]);
		};	
	};
	return getArrayMin(newArray);
};


function getIndexFromArray(array, number) {
	for (var i = 0; i < array.length; i++) {
		if (requestInfo(i)[2] == number) {
			return i;
		};
	};	
};


function addButtonEvent() {
	var table = document.getElementsByClassName('hprt-table-cell hprt-table-cell-occupancy');
	var chepeastRoom = findMinWithMaxPersons(table, 2);
	var arrayIndex = getIndexFromArray(table, chepeastRoom); 
	var selectId = requestInfo(arrayIndex)[0];
    var select = document.querySelector(selectId),
        input = document.getElementsByClassName('txp-bui-main-pp bui-button bui-button--primary  hp_rt_input js-reservation-button px--fw-cta');

    if (document.getElementById('b_tt_holder_1') == null ) {
       input = document.getElementById('b_tt_holder_2');
    }
    else if (document.getElementById('b_tt_holder_2') == null) {
        input = document.getElementById('b_tt_holder_1');
    }

    select.addEventListener('change', function() {
        console.log('Add button event');
    });
    input.addEventListener('click', function() {
        select.value = 1;
        select.dispatchEvent(new Event('change'));
    });
};
