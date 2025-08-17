

   
function restParam(number =[]){
   return number.reduce((acc,cur)=> acc+ cur ,0) // o là default value of acc
}

console.log(restParam([1,2,3]))
// Sử dụng kiểu tham số res -> giúp linh hoạt các định nghĩa hàm có tham số

function fnRestParam(...numbers){
     return numbers.reduce((acc,cur)=> acc+ cur ,0)
}

console.log(fnRestParam(1,5,3));
console.log(fnRestParam((1,5,3)));
console.log(fnRestParam([1,5,3]));
// Sử dụng toán tử spread (Toán tử rải)

const n1 = [1,2,3]
const n2 = [4,5,6]
// Sử dụng toán tử spread để gộp 2 mảng n1 vs n2 
const n3 = [...n1,...n2]
console.log(n3);

// Kết hợp thực thi hàm có spread để truyền dữ liệu 

console.log(fnRestParam(...n2))