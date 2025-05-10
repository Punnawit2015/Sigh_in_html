window.onload = loginLoad;
function loginLoad() {
	var loginbutton = document.getElementById("myLogin")
	loginbutton.onsubmit = checkLogin;
}

function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const checkusername = urlParams.get('username');
	const checkpassword = urlParams.get('password');
	let username = document.forms["myLogin"]["typeusername"].value;
	let repassword = document.forms["myLogin"]["typepassword"].value;
	console.log(username,checkusername);
	console.log(repassword,checkpassword);

	if (checkusername != username && repassword != checkpassword) {
		alert("Your username or password is not correct");
		return false;
	}
	else {
		alert("Hello welcome to webpage");
	}
}

