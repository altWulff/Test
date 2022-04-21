// css div.classes
var getTableClass = 'hprt-table-cell hprt-table-cell-occupancy',
    getButtonClass = 'txp-bui-main-pp bui-button bui-button--primary  hp_rt_input js-reservation-button px--fw-cta',
    getRoomPriceClass = 'prco-valign-middle-helper',
    getOccupancyClass = 'hprt-table-cell hprt-table-cell-occupancy',
    getRoomSelectClass = 'hprt-table-cell hprt-table-room-select';


function requestInfo(indx) {
	var tableCell = document.getElementsByClassName(getTableClass)[indx],
	    getCls = tableCell.nextElementSibling.classList,
	    roomPrice = document.getElementsByClassName(getCls[0])[indx].getElementsByClassName(getRoomPriceClass)[0].innerText,
	    occupancy = document.getElementsByClassName(getOccupancyClass)[indx].getElementsByClassName('hprt-block')[0].innerText,
	    selectId = document.getElementsByClassName(getRoomSelectClass)[indx].getElementsByTagName('select')[0].id;

	var selectInfo = String('#'+selectId),
	    occupancyInfo = parseInt(occupancy.split(':')[1]),
	    roomPriceInfo = parseFloat(roomPrice.split(' ')[0].slice(4).replace(',', '.'));

	return Array(selectInfo, occupancyInfo, roomPriceInfo);
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
	var table = document.getElementsByClassName(getTableClass),
	    cheapestRoom = findMinWithMaxPersons(table, 2),
	    arrayIndex = getIndexFromArray(table, cheapestRoom),
	    selectId = requestInfo(arrayIndex)[0],
	    select = document.querySelector(selectId),
        input = document.getElementsByClassName(getButtonClass);

    // Hack to dynamic button id
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
