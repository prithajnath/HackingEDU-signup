//scrollTop variable
var scroll = 900;

$('.signup').hide();
$('#start').click(function(event){

$('#welcome').hide();
$('.signup').fadeIn();

});

$('.fnsub').click(function(event){

$("html, body").animate({ scrollTop: scroll.toString() + "px" });
scroll += 900;
//$('body').scrollTop(960);
//console.log("click detected");


});

$("body").keyup(function(event){
    if(event.keyCode == 13){
      if($('#welcome').css('display','block')){
        $("#start").click();
      }
    }
});
