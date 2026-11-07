
let users = JSON.parse(localStorage.getItem("userList")) || [];

const form = document.getElementById("sign-in-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy dữ liệu nhập vào
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Kiểm tra dữ liệu trống
    if (email === "" || password === "") {
        alert("Vui lòng nhập email và mật khẩu!");
        return;
    }

    // Kiểm tra tài khoản
    let found = false;

    for (let i = 0; i < users.length; i++) {
        if (
            users[i].email === email &&
            users[i].password === password
        ) {
            found = true;
            break;
        }
    }

    // Xử lý đăng nhập
    if (found === true) {
        alert("Đăng nhập thành công!");

        // Không lưu email và password

        window.location.href = "./dashboard.html";

    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
});

        //window.location.href ="http://127.0.0.1:5500/Project_Template/pages/dashboard.html"
        
    
    