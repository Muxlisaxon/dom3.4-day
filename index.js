// let userinput = document.getElementById("DOB").value;
// let dob = new Date(userinput);
// if(userinput == null || userinput == ''){
//     document.getElementById('massage').innerHTML = "Select a date please!";
//     return false
// }else{
//     let month_diff = Date.now() - dob.getTime();
//     let age_dt = new Date (month_diff);
//     let year = age_dt.getUTCFullYear();
//     let age = Math.abs(year - 1970);
//     return document.getElementById("result").innerHTML = "Age is: " + age + "years";
// }





let inp =document.getElementById("DOB")
let age = document.querySelector(".age")
let btn=document.querySelector("button")
btn.onclick=(e)=>{
    e.preventDefault()

    function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    let ages = calculate_age(new Date(inp.value))
    if (inp.value=="") {
        age.innerHTML=`siz son kiritmadingiz`  
    }else{
        age.innerHTML=ages
    }
}


