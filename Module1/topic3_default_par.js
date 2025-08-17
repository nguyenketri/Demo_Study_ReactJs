// Hàm được định nghĩa với các tham số có giá trị mặc định
function add(a=10,b=20){
    return a+b;
}
const sum = (a,b=15) => a+b ;
// Không cần truyền đối số
// console.log(add())
// console.log(sum(5,10))
// console.log(add(6))
 console.log(sum(10));
 // NaN nothing a number
 console.log(sum(10,20))
 
