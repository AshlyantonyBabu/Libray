$(document).ready(function(){
    $("#log").click(function(){
   var user=     $("#txt1").val();
   if(user=="")
   {
       $("td1").text("plz fill this field");
   }
    })
})