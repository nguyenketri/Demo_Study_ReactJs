// Ký thuật phân ra object , array
// Tạo ra biến mới từ thuộc tính object hoặc array
const student ={
    id:1,
    name:"David",
    date: "20/02/2000"
}

// Phân rã đối tượng
const {id,name}=student
const {id:_id,name:_name,date} =student
console.log(`id: ${id} name: ${name}`)
console.log(`id: ${_id} name: ${_name} date: ${date}`)

// Áp dụng truyền 1 đối tượng vào 1 hàm thực thi
//  ? để trừ trường hợp null
const printInf =(data) => `Student Infor: ${data?.id} - ${data?.name}`
const printInf2 =({id,name}) => `Student Infor2: ${id} - ${name}`
console.log(printInf(student))
console.log(printInf2(student))
const product =[{id:1,name:"Product1",price:10},
{id:2,name:"Product2",price:20},
{id:3,name:"Product3",price:30}
]

// Phân rã mảng product thnahf 3 đối tượng 

const [p1,p2] = product
console.log(p1)
console.log(p2)

// Duyệt các phần tử của mảng product in ra các danh sách đối tượng

  product?.map(({id,name,price})=>{
    console.log(`${id} -${name}-${price}`);
    
  })

// Thay thế cho phương pháp for
for(let i =0;i<product.length;i++){
     console.log(`${product[i].id} - ${product[i].name}- ${product[i].price}`)
     console.log(product[i].id)
}

 for(let item of product){
    console.log(item.id)
 }

  


