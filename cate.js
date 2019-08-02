
function categoriess(){
    $.ajax({
        type:"GET",
        url:"libr.json",
        //dataType: "text",
       
    
        
        success:function(data){
            var output=" ";
            var showChar = 100;
            var ellipsestext = "...";
             var moretext = "more";
            var lesstext = "less";
           // var c=" ";

console.log("aaa");
    var c=  document.getElementById("s1").value;
    console.log(c);
       for (i in data)
       {
        var content =  data[i].discription;
console.log(data[i].category);
    if( data[i].category==c)
    {
  

 output+=" <div class='col col-12 col-sm-6  d-flex align-items-stretch pt-4 bg-warning'>"
output+="<div class='card'style='width: 18rem; '>"
output+="<img class='card-img-top' src='"+data[i].pic +" 'height='300px' width='50px' >"
output+="<div class='card-body'>"
output+=  "<b><center><h class='card-title' style='font-style: italic ;font: size 5px;'>"+ data[i].title+"</b></center></h>"

output+=  "<p class='card-text'style='text-align:justify ;font-style: italic ;' id='p1'>"+ content+ " </p>"


output+= "</div>"
output+="<ul class='list-group list-group-flush'>"
 output+= "<li class='list-group-item'>"+ data[i].author+"</li>"
 output+=  "<li class='list-group-item'>"+ data[i].category+"</li>"
 output+= "<li class='list-group-item'> <b>Price :  </b>"+ data[i].price+"</li>"
 output+= "</ul>"
// output+="<div class='card-body'>"
//output+=  "<a href='' class='card-link'>Card link</a>"
// output+= "<a href='' class='card-link'>Another link</a>"
// output+= "</div>"
output+=" </div>"
output+=" </div>"
       }
       


       
      
           }
           $("#dd").html(output);

        }
       
    })
    }