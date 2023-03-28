$('document').ready(()=>{
    $('form').on('submit',(event)=>{
          event.preventDefault();
          var userdetails={
            firstname:$('#firstname').val(),
            lastname:$('#lastname').val(),
            email:$('#email').val(),
            password:$('#password').val(),
            cpassword:$('#cpassword').val()
          };
          console.log(userdetails);
          $.ajax({
            url: './php/register.php',
            method: 'POST',
            data:userdetails,
            dataType: 'json',
            success: (response)=>{
                  if(response.success){
                    console.log("sucess");
                    localStorage.setItem("usermail",userdetails.email);
                    localStorage.setItem("username",userdetails.firstname);
                    document.location.replace("./profile.html");
                  }else{
                    console.log(response);
                  }
            },
            error: (error)=>{
                  console.log(error);
            }
          });
    });
});