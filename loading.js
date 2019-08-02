$(document).ready(function(){
    $("#loginbtn").click(function() {
        //e.preventDefault();
        alert("aaaa");
        var first_name = $('#usertxt').val();
        var pass_wd = $('#passtxt').val();
        console.log("aaa");
        //var password = $('#password').val();
     
        $(".error").remove();
     
        if (first_name.length < 1) {
          $('#first_name').after('<span class="error">This field is required</span>');
        }
        if (pass_wd < 1) {
          $('#last_name').after('<span class="error">This field is required</span>');
        }
        
    
})
})