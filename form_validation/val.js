function checkPass(txt){
            
    var pass=/^[A-Za-z0-9]\w{8,20}$/;
    if(txt.value.match(pass)){
        alert("Correct format");
        return true;
    }
        alert("wrong format");
        return false;
    
}