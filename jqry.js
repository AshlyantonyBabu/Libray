

//function ajaxTest() {
$(document).ready(function(){
    //console.log("aaaa");
    
    
   // $("#butn").click(function(){
       // console.log("aaaa");
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
            var c=" ";
            
            
                
            alert("load");
            for(var i in data){
                var content =  data[i].discription;
                function blink_text() {
                    $('#bl1').fadeOut(500);
                    $('#bl1').fadeIn(500);
                }
                setInterval(blink_text, 1000);


               
                output+=" <div class='col col-12 col-sm-3  d-flex align-items-stretch pt-4 bg-warning'>"
                output+="<div class='card'style='width: 18rem; '>"
                output+="<img class='card-img-top' src='"+data[i].pic +" 'height='300px' width='50px' >"
                output+="<div class='card-body'>"
                output+=  "<b><center><h class='card-title' style='font-style: italic ;font: size 5px;'>"+ data[i].title+"</b></center></h>"
            
                output+=  "<p class='card-text'style='text-align:justify ;font-style: italic ;' id='p1'>"+ content+ " </p>"
               
              
                output+= "</div>"
                output+="<ul class='list-group list-group-flush'>"
                 output+= "<li class='list-group-item'>"+ data[i].author+"</li>"
                 output+=  "<li class='list-group-item'>"+ data[i].category+"</li>"
                 output+= "<li class='list-group-item 'id='bl1'> <b>Price : </b> "+ data[i].price+"</li>"
                 output+= "</ul>"
               // output+="<div class='card-body'>"
                //output+=  "<a href='' class='card-link'>Card link</a>"
               // output+= "<a href='' class='card-link'>Another link</a>"
               // output+= "</div>"
           output+=" </div>"
           output+=" </div>"
    
           
            $("#dd").html(output);
        
        }
    }

    })
    // $("#redmr").click(function(){
    //     $.ajax({
    //         type:"GET",
    //         url:"libr.json",
    //         //dataType: "text",
           
    
            
    //         success:function(data){
    //             var output=" ";
    //             var showChar = 100;
    //             var ellipsestext = "...";
    //              var moretext = "more";
    //             var lesstext = "less";
    //             var c=" ";
    //             alert("load");
    //             for(var i in data){
    //                 var content =  data[i].discription;
    //                 if(content.length > showChar) {
    //                     c = content.substr(0, showChar);
    //                     var h = content.substr(showChar-1, content.length - showChar);
    //                     console.log(c);
    //                     var arr = c ;
    //                     console.log(h);
                  
                    
    //                 }
    

    //     output+=" <div class='col col-12 col-sm-3 '>"
    //     output+="<div class='card'style='width: 18rem; '>"
    //     output+="<img class='card-img-top' src='"+data[i].pic +" 'height='300px' width='50px' >"
    //     output+="<div class='card-body'>"
    //     output+=  "<b><center><h class='card-title' style='font-style: italic ;font: size 5px;'>"+ data[i].title+"</b></center></h>"
    //     $("#p1").hide();
    //     output+=  "<p class='card-text'style='text-align:justify ;font-style: italic ;'>"+ arr +h+ " </p>"
    //     output+= "</div>"
    //     output+="<ul class='list-group list-group-flush'>"
    //      output+= "<li class='list-group-item'>"+ data[i].author+"</li>"
    //      output+=  "<li class='list-group-item'>"+ data[i].category+"</li>"
    //      output+= "<li class='list-group-item'> <b>Price :  </b>"+ data[i].price+"</li>"
    //      output+= "</ul>"
    //             }
    //             $("#dd").html(output);
    
    //         }
    //     })
    })
    

    
// })
//         }
//     })
//   })
//})