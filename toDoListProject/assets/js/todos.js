//Check off specific todos with clicks
$("ul").on('click', "li", function(){
   $(this).toggleClass("completed");
});   
// Click X to delete Todo
$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500, function(){
    $(this).remove();
});
event.stopPropagation();
});

// Adding Todos
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val(); 
        $(this).val("");
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span>" + todoText +"</li>");        
      }
});


$(".fa-pencil-alt").on("click","span",function(event){
    $("input[type='text']").fadeToggle();
});
