var Body = {
  setBackgroundColor : function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css("backgroundColor", color)
  },
  setColor : function(color){
    // document.querySelector('body').style.color=color;
    $('body').css("color", color)
  }
}
var Links = {
  setColor : function(color){
    // var atag = document.querySelectorAll('a');
    // for(var i=0; i<atag.length; i++){
    //   atag[i].style.color=color;
    // }
    $('a').css("color", color)
  }
}
/*function BodySetBackgroundColor(color){
  document.querySelector('body').style.backgroundColor=color;
}
function BodySetColor(color){
  document.querySelector('body').style.color=color;
}
function LinksSetColor(color){
  var atag = document.querySelectorAll('a');
  for(var i=0; i<atag.length; i++){
    atag[i].style.color=color;
  }
}*/
function dayNightSwitch(self){
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    Links.setColor('powderblue');
  }else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
    Links.setColor('blue');
  }
}
