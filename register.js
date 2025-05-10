window.onload = pageLoad;
function pageLoad(){
	var clickbutton = document.getElementById("myForm")
    clickbutton.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms[myForm] ["password"].value;
    var repassword = document.forms[myForm] ["repassword"].value;

    if(password  !=  repassword)
    {
        alert("Your password in not validate");
        return false;
    }
    else
    {
        alert("Welcome to login page");
    }
}