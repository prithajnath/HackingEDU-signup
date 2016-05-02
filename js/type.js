$('.signup').hide();
$('#start').click(function(event){

$('#welcome').hide();
$('.signup').fadeIn();

});

$("body").keyup(function(event){
    if(event.keyCode == 13){
        $("#start").click();
    }
});

$('#fnsub').click(function(event){

$("html, body").animate({ scrollTop: "900px" });
//$('body').scrollTop(960);
//console.log("click detected");


});
