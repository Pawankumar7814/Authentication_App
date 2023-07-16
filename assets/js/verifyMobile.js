var mobile_number = document.getElementById("mobile_number");
var send_otp_button = document.getElementById("send_otp_button");

console.log('Script is added');

send_otp_button.addEventListener("click", function(e) {
    console.log(`Mobile nimber ${typeof mobile_number.value}`);
    if (mobile_number.value != "") {
        console.log("111111111111111111")
        e.preventDefault();
        fetch(`/user/sendOTP/${mobile_number.value}`)
            .then((response) => console.log('11111', response.json()))
            .then((data) => console.log(`1213123213 ${data}`));
    } else {
        console.log("Mobile number is empty");
    }
});