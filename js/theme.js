var flag = 1;
var items;
function toggle() {
  if(document.querySelector('*').style.filter != "invert(1)"){
    document.querySelector('*').style.filter="invert(1)";
    document.getElementById('port').style.backgroundImage="url('images/port_in..png')";
    document.getElementById('contrast').innerHTML="Light Mode";
    items = document.querySelectorAll('img');
    for(item in items){
      items[item].style.filter = "invert(1)";
    }    
  }
  else{
    document.querySelector('*').style.filter="none";
    document.getElementById('port').style.backgroundImage="url('images/port.png')";
    document.getElementById('contrast').innerHTML="Dark Mode";
    items = document.querySelectorAll('img');
    for(item in items){
      items[item].style.filter = "none";
    }
  }
}