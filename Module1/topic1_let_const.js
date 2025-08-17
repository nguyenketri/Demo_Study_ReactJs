// Block scope use in let and const 
var total =100
function add(a,b){
    let result = 0;
    result=a+b;
    return result;

}
// định nghĩa 1 hàm tính toán tổng 2 số

function subtract(a,b){
    const total  =a-b;
   // total =a-b // error type : assignment to constant variable ko cho phép gán lại 
    return total;
}
// trong hàm là biến cục bộ local
// Use 2 function above
console.log("SUm number: " + add(20.5,3));
// dùng dấu + hay dấu , cũng được
// dùng node với name file 
// overloading method 2 function hàm sau ghi đè hàm trc
//console.log("Total :"+total)
// const cần khai báo giá trị ban đầu cho nó 
console.log("SUb: "+subtract(20,10));

