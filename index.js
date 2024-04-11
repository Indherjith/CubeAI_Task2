

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    console.log(data)
});

const check_Fullname = (fname)=>{ 
    var name = fname.split("");
    var status;    
    name.map(item=>{
        if(Number(item)){
            status= false;
        }
        else{
            const specialChars = "/[`!@#$%^&*()_+-=[]{};':\|,.<>/?~]/".split("");
            const specialchar = specialChars.map(elem=>{
                if(elem == item){
                    status = false;
                }
            })
        }
    })
    if(status == false){
        alert("Numbers and Special Characters are not Acceptable!");
        document.getElementById("fname").value = null;
    }
}

const check_Username = (uname)=>{
    var name = uname.split("");
    var status;    
    name.map(item=>{
        const specialChars = "/[`!#$%^&*()_+-=[]{};':\|,.<>/?~]/".split("");
        const specialchar = specialChars.map(elem=>{
            if(elem == item){
                status = false;
            }
        })
    })
    if(status == false){
        alert("Special Characters except @ are not Acceptable!");
        document.getElementById("uname").value = null;
    }
}

const check_password = (pass)=>{
    var password = pass.split("");
    var num=0;
    var special = 0;
    if(pass.length >= 8){
        password.map(item=>{
            if(Number(item)){
                num+=1;
            }
            else{
                const specialChars = "/[`!@#$%^&*()_+-=[]{};':\|,.<>/?~]/".split("");
                const specialchar = specialChars.map(elem=>{
                    if(elem == item){
                        special+=1;
                    }
                })
            }
        })
        if(num<=0 || special<=0){
            alert("Password should contain atleast one number and one special charecter!");
            document.getElementById("pass").value = null;
        }
    }
    else{
        alert("Password length should be minimum  eight characters!")
    }
}

const check_confirmpassword=(pass)=>{
    let password = document.getElementById("pass").value;
    if(pass !== password){
        alert("Confirm Password and Password must be same!");
        document.getElementById("conpass").value = null;
    }
}

function check_mail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return;
  }
    alert("Invalid email address!")
    document.getElementById("mail").value = null;
}

function check_contact(num){
    const status = /^\d{10}$/.test(num);
    if(status){
        return;
    }
    else{
        alert("Enter a valid Contact Number!");
        document.getElementById("contact").value = null;
    }
}