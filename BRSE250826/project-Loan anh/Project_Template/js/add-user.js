let users = JSON.parse(localStorage.getItem("userList")) || [];

// 2. Lấy các phần tử HTML
const userCode = document.getElementById('user-code');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const role = document.getElementById('role');
const dob = document.getElementById('dob');
const form = document.getElementById('add-new-user-form');

//let users = JSON.parse(localStorage.getItem("users")) || [];
//const form = document.getElementById("sign-in-form");

//form.addEventListener("submit", function (event) {
    //event.preventDefault();

    // Cho phép nhập và chỉnh sửa
//userCode.disabled = false;
//email.disabled = false;

    // Lấy dữ liệu người dùng nhập
    //const email = document.getElementById("email").value.trim();
    //const password = document.getElementById("password").value;

    // Kiểm tra dữ liệu trống
    //if (email === "" || password === "") {
      //  alert("Vui lòng nhập email và mật khẩu!");
    
    //}


    // Tìm tài khoản khớp email và mật khẩu
    //let found = false;

    //for (let i = 0; i < users.length; i++) {
      //  if (
        //    users[i].email === email &&
          //  users[i].password === password
        //) {
          //  found = true;
            //break;
        //}
    //}

    // Kiểm tra kết quả đăng nhập
    //if (found === true) {
      //  alert("Đăng nhập thành công!");
        //window.location.href ="http://127.0.0.1:5500/Project_Template/pages/dashboard.html";

        
    //} else {
      //  alert("Email hoặc mật khẩu không đúng!");
    //}

    // Ghi nhớ email nếu người dùng tích Remember me
    //const remember = document.getElementById("save-loggin-checkbox");

    //if (remember.checked) {
      //  localStorage.setItem("rememberedEmail", email);
    //} else {
      //  localStorage.removeItem("rememberedEmail");
    //}
//});


//if (users === null) {
  //users = [];
//}

// 3. Tạo User code
let number = users.length + 1;
userCode.value = 'U' + String(number).padStart(3, '0');

// 4. Kiểm tra thông tin
function validateUser() {
  if (username.value.trim() === '') {
    alert('Username không được để trống');
    return false;
  }

  if (email.value.trim() === '') {
    alert('Email không được để trống');
    return false;
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    alert('Email không đúng định dạng');
    return false;
  }

  if (password.value.trim() === '') {
    alert('Password không được để trống');
    return false;
  }

  if (password.value.length < 8) {
    alert('Password phải có ít nhất 8 ký tự');
    return false;
  }

  return true;
}

// 5. Hiển thị thông báo
function showMessage(id) {
  document.getElementById('msg').classList.add('show');
  document.getElementById('add-toast').classList.add('hidden');
  document.getElementById('add-error').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}

// 6. Thêm user mới
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateUser() === false) {
    return;
  }

  // Kiểm tra email đã tồn tại
  console.log("Email nhập vào:", email.value);
　console.log("Danh sách users:", users);
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email.value) {
      alert('Email đã tồn tại');
      return;
    }
  }

  // Tạo user mới
  let newUser = {
    usercode: userCode.value,
    username: username.value,
    email: email.value,
    password: password.value,
    role: role.value,
    birthday: dob.value,
    status: document.querySelector('input[name="status"]:checked').value,
    description: document.querySelector('.description-text-input').value
  };

  // Thêm user vào danh sách
  users.push(newUser);


  // Lưu danh sách user
  localStorage.setItem('userList', JSON.stringify(users));
  showMessage('add-toast');

  setTimeout(function() {
    window.location.href = './dashboard.html';
  }, 1500);
});

// 7. Nút Back
document.querySelector('.back-btn').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = './dashboard.html';
});

// 8. Ẩn và hiện mật khẩu
const eye = document.querySelector('.fa-eye');
const eyeSlash = document.querySelector('.fa-eye-slash');

eye.addEventListener('click', function() {
  password.type = 'text';
  eye.style.display = 'none';
  eyeSlash.style.display = 'block';
});

eyeSlash.addEventListener('click', function() {
  password.type = 'password';
  eye.style.display = 'block';
  eyeSlash.style.display = 'none';
});

