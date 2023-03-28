$('document').ready(()=>{
  $('form').on('submit',(event)=>{
    event.preventDefault();
        userdata ={
            'email':$('#email').val(),
            'password':$('#password').val()
        };
        console.log(userdata);
        $.ajax(
          {
              url: './php/login.php',
              method: 'POST',
              data: userdata,
              dataType: 'json',
              success: (response)=>{
                if(response.success){
                  localStorage.setItem("usermail",userdata.email);
                  localStorage.setItem("username",response.message);
                  document.location.replace('./profile.html');
                }else{
                  console.log(response);
                }
              },
              error: (error)=>{
                  console.log(error);
              }
           }
        );
  });
});