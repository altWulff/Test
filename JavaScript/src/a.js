function addButtonEvent() {
    var select = document.querySelector('#hprt_nos_select_32934401_211007526_0_1_0'),
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
