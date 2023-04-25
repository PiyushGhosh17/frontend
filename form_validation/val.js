function checkPass(pass,user){
    console.log(pass.value, user.value)
        
    // var pat=/^[A-Za-z0-9]\w{8,20}$/;
    if(user.value.length === 0){
        alert("Please Enter username");
        return false;
    }
    else if(pass.value.length===0){
        alert("Please Enter password");
        return false;
    }
    else if(!pass.value.match( /[A-Za-z]{1,20}/ )){
        alert("8 characters and at least 1 digit is required");
        return false;
    }
    else if(!pass.value.match(/[0-9]{1,20}/)){
        alert("8 characters and at least 1 digit is required");
        return false;
    }
    else if( (pass.value.match( /[A-Za-z]{8,20}/ )) && (pass.value.match(/[0-9]{1,20}/)) ){
        alert("Login Successfull");
        return true;
    }
        
    
}