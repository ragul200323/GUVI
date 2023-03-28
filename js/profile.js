$(document).ready(()=>{
    if(localStorage){
        $('#mname').text(localStorage.getItem('username'));
        $('#mmail').text(localStorage.getItem('usermail'));
    }
});