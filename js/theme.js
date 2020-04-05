var flag = 1;
var items;
var items1;
function toggle() {
  if(document.querySelector('*').style.filter != "invert(1)"){
    document.querySelector('*').style.filter="invert(1)";
    document.getElementById('port').style.backgroundImage="url('images/port_in..png')";
    document.getElementById('contrast').innerHTML="Light Mode";
    items = document.querySelectorAll('img');
    document.getElementById('comm').setAttribute("href","images/works/S3 Logo Artboard_in.jpg");
    document.getElementById('comm2').setAttribute("href","images/works/S3 Logo Artboard_in.jpg");
    document.getElementById('mock').setAttribute("href","images/works/mockup_in.jpg");
    document.getElementById('mock2').setAttribute("href","images/works/mockup_in.jpg");
    document.getElementById('post').setAttribute("href","images/works/poster_in.jpg");
    document.getElementById('post2').setAttribute("href","images/works/poster_in.jpg");
    document.getElementById('wall').setAttribute("href","images/works/wall_in.jpg");
    document.getElementById('wall2').setAttribute("href","images/works/wall_in.jpg");
    document.getElementById('logoo').setAttribute("href","images/works/logos_in.jpg");
    document.getElementById('logoo2').setAttribute("href","images/works/logos_in.jpg");
    for(var i=0; i<items.length; i++){
      items[i].style.filter = "invert(1)";
    }    
  }
  else{
    document.querySelector('*').style.filter="none";
    document.getElementById('port').style.backgroundImage="url('images/port.png')";
    document.getElementById('contrast').innerHTML="Dark Mode";
    items = document.querySelectorAll('img');
    document.getElementById('comm').setAttribute("href","images/works/S3 Logo Artboard.jpg");
    document.getElementById('comm2').setAttribute("href","images/works/S3 Logo Artboard.jpg");
    document.getElementById('mock').setAttribute("href","images/works/mockup.jpg");
    document.getElementById('mock2').setAttribute("href","images/works/mockup.jpg");
    document.getElementById('post').setAttribute("href","images/works/poster.jpg");
    document.getElementById('post2').setAttribute("href","images/works/poster.jpg");
    document.getElementById('wall').setAttribute("href","images/works/wall.jpg");
    document.getElementById('wall2').setAttribute("href","images/works/wall.jpg");
    document.getElementById('logoo').setAttribute("href","images/works/logos.jpg");
    document.getElementById('logoo2').setAttribute("href","images/works/logos.jpg");
    for(var i=0; i<items.length; i++){
      items[i].style.filter = "none";
    }
  }
}