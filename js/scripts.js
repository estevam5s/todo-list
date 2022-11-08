$(document).ready(function(){
$("ul").on("click","li",function(){
  $(this).addClass("finish");
 });
 //click on X to delete
 $("ul") .on("click", "span" , function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
 });

 //creating todos
 $("input[type='text']").keypress(function(event){
   if(event.which===13){
     var todo = $(this).val();
     $(this).val('');
     $("ul").append("<li><span></span>" + todo + "</li>");
   }

 });
});
