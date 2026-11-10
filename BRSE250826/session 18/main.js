 //1. lấy các phần tử HTML bằng DOM
 const studentForm = document.getElementById("studentForm");
 const nameInput = document.getElementById("name");
 const ageInput = document.getElementById("age");
 const classInput = document.getElementById("className");
 const studentList = document.getElementById("studentList");
 const searchInput = document.getElementById("search");
 const submitBtn = document.getElementById("submitBtn");

 //2. mảng lưu danh sách sinh viên
 let students = [
    {
        name: "Huấn",
        age : 18,
        className : "A1"
    },
    {
        name : "Cường",
        age : 22,
        className : "A1"
    }
 ];
 // vị trí sinh viên đang sửa
 let editIndex = -1;
 
 //3. Hàm hiển thị danh sách sinh viên
 function displayStudents (data = studens){
    // xóa nội dung cũ trong bảng
    studentList.innerHTML = "";
    //Duyệt qua từng sinh viên
    data.forEach(function(student){
        //Tạo một dòng mới
        const row = document.createElement("tr");

        // Tạo các ô dữ liệu
        const nameCell = document.createElement("td");
        const ageCell = document.createElement("td");
        const classCell = document.createElement("td");
        const actionCell = document.createElement("td");
        
        // Đưa thông tin vào các ô
        nameCell.textContent = student.name;
        ageCell.textContent = student.age;
        classCell.textContent =student.className;

        // Tạo nút sửa
        const editBtn = document.createElement("button");
        editBtn.textContent = "sửa";
        editBtn.className = "edit-btn";

        // Tạo nút xóa 
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.className = "delete-btn";

        // Sự kiện nhấn nút sửa
        editBtn.addEventListener("click", function() {
            editStudent(student);
        });

        //Sự kiện nhấn nút xóa
        deleteBtn.addEventListener("click", function() {
            deleteStudent(student);
        });

        //Thêm nút vào ô hành động
        actionCell.appendChill(editBtn);
        actionCell.appendChild(deleteBtn);

        //Thêm các ô vào dòng
        row.appendChill(nameCell)
        row.appendChild(ageCell);
        row.appendChild(classCell);
        row.appendChild(actionCell);

        // Thêm dòng vào bảng
        studentList.appendChild(row);

    });
 }

 // 4. Thêm sinh viên hoặc thêm thông tin đã sửa
 studentForm.addEventListener("submit", function(event) {

    //Ngăn form tải lại trang
    event.preventDefault();

    // Lấy dữ liệu từ các ô nhập
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const className = classInput.value.trim();

    // kiểm tra dữ liệu
    if (name === "" || className === "" || age <= 0) {
        alert("vui lòng nhập thông tin hợp lệ !");
        return;
    }

    // Tạo đối tượng sinh viên
    const student = {
        name: name,
        age: age,
        className: className
    };

    //Nếu editIndex khác -1 thì cập nhật sinh viên
    if (editIndex !== -1){
        students[editIndex]=student;
        editIndex = -1;
        submitBtn.textContent = "Thêm sinh viên";
    } else {
        // Nếu không sửa thì thêm sinh viên mới
        students.push(student);
    }
    // Xóa dữ liệu trong form
    studentForm.reset();

    // Hiển thị lại danh sách
    displayStudents();
 });

 // 5. Hàm sửa sinh viên
 function editStudent(student) {
    //Tìm vị trí sinh viên trong mảng
    editIndex = student.indexOf(student);

    // Đưa dữ liệu lên form
    nameInput.value = student.name;
    ageInput.value = student.age;
    classInput.value = student.className;

    // Đổi tên nút
    submitBtn.textContent = "Lưu chỉnh sửa";
 }

 // 6. Hàm xóa sinh viên
 function deleteStudent(student) {
    // Hỏi xác nhận trước khi xóa 
    const confirmDelete = confirm(
        "Bạn có chắc chắn muốn xóa sinh viên không?"
    );
    if (confirmDelete) {
        // Tìm vị trí sinh viên
        const index = students.indexOf(student);
        // Xóa sinh viên khỏi mảng
        if (index !==-1) {
            student.splice(index, 1);
        }
        // Nếu đang sửa sinh viên vừa bị xóa
        if (editIndex === index) {
            editIndex =-1;
            studentForm.reset();
            submitBtn.textContent ="Thêm sinh viên";
        } else if (editIndex > index) {
            editIndex --;
        }
        // Hiển thị lại bảng
        displayStudents();
    }
 }

 // 7. Tìm kiếm sinh viên theo tên
 searchInput.addEventListener("input", function(){
    //Lấy từ khóa tìm kiếm
    const keyword = searchInput.value
    .trim()
    .toLowerCase();
    // Lọc danh sách sinh viên
    const result = students.filter(function(student) {
        return student.name
        .toLowerCase()
        .includes(keyword);
    });
    // Hiển thị kết quả tìm kiếm
    displayStudents(result);
 });

 // 8. Hiển thị danh sách khi mở trang
 displayStudents();