
// 1. Lấy dữ liệu từ Local Storage
let users = JSON.parse(localStorage.getItem("userList")) || [];

let currentPage = 1;
let usersPerPage = 5;
let searchKeyword = "";


// 2. Hiển thị danh sách User
function renderUsers() {

    let tableBody = document.getElementById("table-body");

    tableBody.innerHTML = "";

    let count = 0;

    for (let i = 0; i < users.length; i++) {

        if (users[i].username.toLowerCase().includes(searchKeyword.toLowerCase())) {

            count++;

            if (count > (currentPage - 1) * usersPerPage &&
                count <= currentPage * usersPerPage) {

                tableBody.innerHTML += `
                    <tr>
                        <td>${users[i].usercode}</td>
                        <td>${users[i].username}</td>
                        <td>${users[i].email}</td>
                        <td>${users[i].role}</td>
                        <td>${users[i].birthday}</td>
                        <td>${users[i].status}</td>
                        <td>
                            <i class="fa-solid fa-trash"
                            onclick="deleteUser('${users[i].usercode}')"></i>

                            <i class="fa-solid fa-pen"
                            onclick="editUser('${users[i].usercode}')"></i>
                        </td>
                    </tr>
                `;
            }
        }
    }

    renderPagination(count);
}


// 3. Tìm kiếm User
document.getElementById("search-box").addEventListener("keyup", function(event) {

    if (event.key == "Enter") {

        searchKeyword = this.value.trim();

        currentPage = 1;

        renderUsers();
    }
});


// 4. Hiển thị số trang
function renderPagination(totalUsers) {

    let paginationList = document.getElementById("pagination-list");

    paginationList.innerHTML = "";

    let totalPages = Math.ceil(totalUsers / usersPerPage);

    for (let i = 1; i <= totalPages; i++) {

        paginationList.innerHTML += `
            <li>
                <button onclick="changePage(${i})">${i}</button>
            </li>
        `;
    }
}


// 5. Chuyển trang
function changePage(page) {

    currentPage = page;

    renderUsers();
}


// 6. Xóa User
function deleteUser(usercode) {

    if (confirm("Do you want to delete this user?")) {

        for (let i = 0; i < users.length; i++) {

            if (users[i].usercode == usercode) {

                users.splice(i, 1);

                break;
            }
        }

        localStorage.setItem("userList", JSON.stringify(users));

        renderUsers();
    }
}


// 7. Chuyển sang trang Edit
function editUser(usercode) {

    window.location.href = "./edit-user.html?usercode=" + usercode;
}


// 8. Hiển thị dữ liệu khi mở trang
renderUsers();
