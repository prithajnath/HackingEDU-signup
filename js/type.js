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