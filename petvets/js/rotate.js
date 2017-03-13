function rotateBanners(elem) {
  var active = $(elem+" img.active");
  var next = active.next();
  if (next.length == 0) 
    next = $(elem+" img:first");
  active.removeClass("active").fadeOut(200);
  next.addClass("active").fadeIn(200);
}

function prepareRotator(elem) {
  $(elem+" img").fadeOut(0);
  $(elem+" img:first").fadeIn(0).addClass("active");
}

function startRotator(elem) {
  prepareRotator(elem);
  setInterval("rotateBanners('"+elem+"')", 2500);
}

function isQ3Answered(){
  var q = document.getElementsByName('time');
  var count=0;
for(var i = 0; i < q.length; i++){
    if(q[i].checked){
        count=count+1;
    }
}
if(count>0)
return true;
return false;
}

$(document).ready(function() {
  $('.appointment_form').submit(function()
{
    if (!isQ3Answered()) { 
        alert('Please select an appointment time!');
        return false; 
    }
    return true;
});
});