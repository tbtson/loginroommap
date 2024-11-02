const USERNAME = "nlong2511";
const PASSWORD = "hotel@mng";

const button = document.getElementById('signInButton');

function getInputValues() {
    const user = document.getElementById('taikhoan').value;
    const pass = document.getElementById('password').value;
    return { user, pass };
}

function isLoginValid(user, pass) {
    return user === USERNAME && pass === PASSWORD;
}

function handleLogin() {
    const { user, pass } = getInputValues();

    if (isLoginValid(user, pass)) {
        redirectToRoomMap();
    } else {
        showAlert("Wrong Username or Password!!");
    }
}

function redirectToRoomMap() {
    location.href = "https://tbtson.github.io/hotelroommap/";
}

function showAlert(message) {
    alert(message);
}

button.addEventListener("click", handleLogin);
