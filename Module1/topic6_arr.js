//Khai báo Arr in JS
const number = [1,2,3,4,5]
console.log(number[0]);
number[2]=30
// Thay đổi arr được
for(let i = 0 ;i<number.length;i++){
  
    console.log(number[i]);   
} 



// REad Only chỉ lấy ra từng phần tử 1 trong ARRay
for(let item of number){
    console.log(item);  
    }

 // SỬ dụng hàm map()  phải là mảng mới dùng map() được

   const arr =  number.map(n => console.log(n))
    console.log("-----------------")
   console.log(arr);

   // Declaration a array contain object
   const arr2 = [
    {   id1: 1,
        name1: "NAme",
        gender:true
    },
    {   id1: 2,
        name1: "ANh"
        ,gender:false
    },
    {   id1: 3,
        name1: "KINH",
        gender:true

    },
    
   ]
    arr2?.map(s =>console.log(`${s.id1}-${s.name1}-${s.gender?"MAle":"Female"}`))
   
 
