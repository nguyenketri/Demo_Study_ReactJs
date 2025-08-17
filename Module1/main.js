import data from "./data_module.js";

// Print all DATA
console.log(data)
// Question 1:
console.log("Question1:")
   const function1 =((data)=>(data.map(({id,name,price,quantity})=>(
    console.log(` Question1: id:${id}- name:${name}- price:${price}-quantity:${quantity}`) 
   ))
 )) 
 function1(data)
 // Question 2: 
  console.log("QUestion2:")
  const id_user = 3
  console.log(`Id_User: ${id_user}`)
   for(let item of data){
     if(item.id===id_user){
        console.log(item)
     }
   }
   // Question 3: 
    console.log("Question 3:")
   console.log("Price >20 AND Price <100")
   for(let item of data){
     if(item.price>20&&item.price<100){
        console.log(item)
     }
   }

   // QUestion 4:
   console.log("QUestion 4 WIth Condiytion if same name desc by price")
   console.log("Name and price and sort")
   const newArr = data
   newArr.sort((a,b)=>{
    if(a.name==b.name){
        return b.price-a.price
    }else{
       return  a.name.localeCompare(b.name)
    }
   })

    newArr.map((item)=>
      console.log(`name ${item.name}= price:${item.price}`)
        
    )
    // Question 5:  ADD a New Object
  console.log("Question 5:")
  const newObj = {"id":11,"name":"TRí","price":137,"quantity":20}
  data.push(newObj)
  console.log(data)
  // Gọi lại 1 để kiểm tra
  data.map(({id,name,price,quantity})=>(
    console.log(` Question1: id:${id}- name:${name}- price:${price}-quantity:${quantity}`) 
   )
 ) 
 
 // Question 6: Update 
 console.log("Question6: Update Infor by ID and show it bu callback function1")
   const newObj2 = data
   const user_id = 11
   for(let item of newObj2){
     if(user_id===item.id){
       item.name="Hieu"
       item.price=600
       item.quantity=80
     }
   }
   // Gọi lại 2 để check

    for(let item of newObj2){
     if(item.id===user_id){
        console.log(item)
     }
   }
   // Question 7:
   // Delete a object by Id , callback function1 check
   console.log("Question 7: DELETE BY ID")
   const id_delete = 2
   console.log(id_delete)
    const arr3 = data.filter((i) => (i.id)!=id_delete)
     arr3.map(({id,name,price,quantity})=>(
    console.log(` Question1: id:${id}- name:${name}- price:${price}-quantity:${quantity}`) 
   )
 )
   

// Sử dụng arrow thực hiện các tác vụ sau
// 1 In ra danh sách các đối tượng gồm: id , name, price,quantity
// 2 In ra các danh sách đối tuownhgj cso id được truyền bởi người dùng
// 3 In ra danh sách các đối tượng có price > 20 và <100
// 4 In ra danh sách các đối tượng được sắp xếp theo 2 tiêu chí: name,price
//   Nếu trúng tên thì sắp xếp giảm dần theo price
// 5 Thêm mới 1 đối tượng cũng cấp bởi người dùng -> gọi lại 1 . để kiểm tra 
// 6 Cập nhật thông tin của 1 đối tượng (với id được chỉ định)
//   theo dữ liệu từ người dùng -> gọi lại chức năng 2 để kiểm tra

// 7 XÓa 1 đối tượng theo id -> gọi lại chức năng 1 để kiểm tra 

const printAll = () => (
    data.forEach(({id,name,price})=>{
    console.log(`id: ${id}`)
    }

  ) 
)

