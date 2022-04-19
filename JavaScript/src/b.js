
function printInformation() {
    const roomName = document.querySelector('.bui-list__item').innerText;
    const priceDetails = document.getElementsByClassName('bp-price-details__charge-value e2e-price-details__total-charge--user');
    const span = priceDetails[0].getElementsByTagName('span');
    const roundPrice = span[0].getAttribute('data-value');
    const currency = span[0].getAttribute('data-currency');

    console.log('Room name: '+roomName+'. Currency: '+currency+'. Price: '+roundPrice)
};
