// use arrow function cú pháp lamda expression (hàm mũi tên)
//([parametwer]) => body fundtion if you want to use have to reference from call funtion
// function have parameter don't have return value
const primeNumber = (nu)=> {
    // Print positive number
    for(let i =0;i<nu;i++){
        console.log(i+" ")
    }
}
// anomamous Thực thi hàm
    primeNumber(5)
   const primeNumber1 = () => {
    console.log("Cách")
     for(let i =0;i<5;i++){
        console.log(i+" ")
    }
   }
   primeNumber1()
 // trong function là cục bộ , global là toàn cục
   // HÀm có tham số và có giá trị trả về

   const sun = (a,b,c) => a+b+c
   // const sum ko phải gán chỉ tham chiếu gái trị thôi  như constructor trong object

   // Nếu nó trả về giá trị ngay thì ko cần return còn có hơn 2 dòng lệnh khai báo trước khi gửi thì phải có return
  console.log("sum: "+sun(1,2,3))
   
