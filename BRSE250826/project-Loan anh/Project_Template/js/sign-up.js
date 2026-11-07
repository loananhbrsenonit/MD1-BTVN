
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const form = document.getElementById("sign-up-form");

    form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy dữ liệu người dùng nhập
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Kiểm tra dữ liệu trống
    if (email === "" || username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Kiểm tra email
    if (!email.includes("@") || !email.includes(".")) {
        alert("Email không đúng định dạng!");
        return;
    }

    // Kiểm tra mật khẩu
    if (password.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự!");
    }

    if (!/[0-9]/.test(password)) {
        alert("Mật khẩu phải có chữ số!");
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        alert("Mật khẩu phải có chữ hoa và chữ thường!");
    }

    
    // Kiểm tra email đã tồn tại chưa
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert("Email đã tồn tại!");
        }
    }

    // Ghi nhớ email nếu người dùng tích Remember me
    // const remember = document.getElementById("save-loggin-checkbox");

    // Tạo tài khoản mới
    const user = {
        email: email,
        username: username,
        password: password
    };

    // Thêm tài khoản vào danh sách
    users.push(user);

    // Lưu danh sách vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    // Xóa dữ liệu trong form
    form.reset();
});
