//Check off specific todos with clicks

$("li").click(function(){
    $(this).css("color","gray");
    $(this).css("text-decoration","line-through");
});