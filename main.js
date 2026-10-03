let choice;
let name="";
let age=0;

do{
  choice = Number (prompt(
        "===== MENU =====\n" +
        "1. Nhập tên người dùng\n" +
        "2. Nhập tuổi người dùng\n" +
        "3. In tên và tuổi\n" +
        "4. In bảng cửu chương\n" +
        "5. Kiểm tra số chẵn hay lẻ\n" +
        "6. Tính tổng từ 1 đến N\n" +
        "7. In các số trong một dãy\n" +
        "8. Kiểm tra số nguyên tố\n" +
        "9. In chuỗi đảo ngược\n" +
        "10. Thoát\n" +
        "================\n" +
        "Nhập lựa chọn:"
    ));
    switch (choice) {
        // lựa chọn 1
        case 1:
            name = prompt("Nhập tên của bạn:");
            alert("Tên của bạn là:" + name);
            break;

        // Lựa chọn 2
        case 2:
            age = Number(prompt("Nhập tuổi của bạn:"));
            alert("Tuổi của bạn là: " + age);
            break;
        
        // Lựa chọn 3
        case 3:
            alert("Tên: " + name + "\nTuổi: " + age);
            break;
        
        // Lựa chọn 4
        case 4:
            let number = Number(prompt("Nhập một số:"));
            for (let i = 1; i <= 10; i++) {
                console.log(Number + "x" + i + "=" + (number * i)); 
            }
            alert("Đã in bảng cửu chương trong console （F12）.");
            break;

        // Lựa chọn 5
        case 5:
            let n = Number(prompt("Nhập một số:"));
            if (n %2=== 0) {
                alert(n + "Đây là số chẵn");
                }else {
                    alert(n +"Đây là số lẻ");
                }
                break;
        
        // Lựa chọn 6
        case 6:
            let N = Number(prompt("Nhập N:"));
            let sum = 0;
            for (let i=1; i <= n; i++) {
                sum += i;
            }
            alert("Tổng từ 1 đến " + N + "là:" + sum);
            break;

        // Lựa chọn 7
        case 7:
            let locationNumber = prompt("Nhập các số, cách nhau bằng dấu phẩy:\n ví dụ:1,2,3,4,5");
            let arr = number.split(",");
            alert("Các số trong dãy: " + arr.join(","));
            break;

        // Lựa chọn 8
        case 8:
            let prime = Number(prompt("Nhập một số:"));
            let isPrime = true;
            if (prime <2) {
                isPrime = false;
            }else {
                for (let i= 2; i < prime; i++) {
                    if (prime % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            if (isPrime) {
                alert(prime + "Đây là số nguyên tố");
            }else {
                alert(prime + "Không phải số nguyên tố"); 
            }
            break;

        // Lựa chọn 9
        case 9:
            let text = prompt("Nhập chuỗi:");
            let reverse = text.split("").reverse().join("");
            alert("Chuỗi đảo ngược: " + reverse);
            break;

        // Lựa chọn 10
        case 10:
            alert("Thoát chương trình");
            break;

        // Nếu nhập sai
        default:
            alert("Lựa chọn không hợp lệ");

    }  
} while (choice!==10);
    
