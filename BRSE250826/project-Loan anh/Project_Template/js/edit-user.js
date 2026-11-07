let users = JSON.parse(localStorage.getItem('userList'));

// 2. Lấy các phần tử HTML
const userCode = document.getElementById('user-code');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const role = document.getElementById('role');
const dob = document.getElementById('dob');
const form = document.getElementById('edit-user-form');

if (users === null) {
  users = [];
}

// Cho phép nhập và chỉnh sửa
userCode.disabled = false;
email.disabled = false;

// 3. Lấy mã user cần sửa
//let editCode = localStorage.getItem('editUserCode');
//let editIndex = -1;
const params = new URLSearchParams(window.location.search);
let editCode = params.get('usercode');
let editIndex = -1;

// 4. Tìm user và hiển thị thông tin
for (let i = 0; i < users.length; i++) {
  if (users[i].usercode === editCode) {
    editIndex = i;

    userCode.value = users[i].usercode;
    username.value = users[i].username;
    email.value = users[i].email;
    password.value = users[i].password;
    role.value = users[i].role;
    dob.value = users[i].birthday;

    document.querySelector('.description-text-input').value = users[i].description;

    if (users[i].status === 'Active') {
      document.getElementById('status-active').checked = true;
    } else {
      document.getElementById('status-deactive').checked = true;
    }

    break;
  }
}

// 5. Kiểm tra thông tin
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

// 6. Hiển thị thông báo
function showMessage(id) {
  document.getElementById('msg').classList.add('show');
  document.getElementById('edit-toast').classList.add('hidden');
  document.getElementById('edit-error').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}

// 7. Lưu thông tin đã sửa
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateUser() === false) {
    return;
  }

  if (editIndex === -1) {
    alert('Không tìm thấy user');
    return;
  }

users[editIndex].username = username.value;
users[editIndex].email = email.value; // BỔ SUNG DÒNG NÀY
users[editIndex].password = password.value;
users[editIndex].role = role.value;
users[editIndex].birthday = dob.value;
users[editIndex].status = document.querySelector('input[name="status"]:checked').value;
users[editIndex].description = document.querySelector('.description-text-input').value;

  // Lưu danh sách mới
  localStorage.setItem('userList', JSON.stringify(users));

  showMessage('edit-toast');

  setTimeout(function() {
    window.location.href = 'http://127.0.0.1:5500/Project_Template/pages/dashboard.html';
  }, 1500);
});

// 8. Nút Back
document.querySelector('.back-btn').addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/Project_Template/pages/dashboard.html';
});

// 9. Ẩn và hiện mật khẩu
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

