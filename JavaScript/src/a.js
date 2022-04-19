// Button click event
b_tt_holder_1.addEventListener('click', {
    handleEvent(event) {
      hprt_nos_select_32934401_211007526_0_1_0.value = '1';
      console.log('Selected rooms set to -> 1');
    }
});


function checkTable() {

  var n1 = document.getElementById("hprt-table").rows.length;

  var i=0,j=0;
  var str="";
   
  for(i=0; i<n1;i++){
   
    var n2 = document.getElementById("hprt-table").rows[i].cells.length;
     
    for(j=0; j<n2;j++){
     
      var x=document.getElementById("hprt-table").rows[i].cells.item(j).innerHTML;\
       
          str=str+x+":"; 
    };
  str=str+"#";
     
  };
     document.getElementById("tablecontent").innerHTML=str;
};

checkTable();