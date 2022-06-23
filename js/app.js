let maforme=document.getElementById("maforme");
maforme.addEventListener("submit",function(e)
                {
        e.preventDefault()
        
        let myinput=document.getElementById("first-name");
        if(myinput.value== "")
        {
            myinput.classList.add("error-icon")
            let myError=document.querySelector("#error");
            
            myError.innerHTML="First name can not be empty";
            myError.style.color="red";
           

            
        }
        let myinput1=document.getElementById("last-name");
        if(myinput1.value== "")
        {
            myinput1.classList.add("error-icon")
            let myError=document.querySelector("#error1");
            myError.innerHTML="Last can not be empty";
            myError.style.color="red";
        

            
        }
        let myinput2=document.getElementById("email");
        if(myinput2.value== "")
        {
            myinput2.classList.add("error-icon")
            let myError=document.querySelector("#error2");
            myError.innerHTML="Email can not be empty";
            myError.style.color="red";
        

            
        }
        let myinput3=document.getElementById("password");
        if(myinput3.value== "")
        {
            myinput3.classList.add("error-icon")
            let myError=document.querySelector("#error3");
            myError.innerHTML="password can not be empty";
            myError.style.color="red";
        }

            
        
    })