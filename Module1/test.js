// import data from "./data_module.js";
// Function print all data

var data= [{ "id": 1, "name": "Product A", "price": 300.5, "quantity": 10 },
    { "id": 2, "name": "Product A", "price": 200.0, "quantity": 5 },
    { "id": 3, "name": "Product C", "price": 150.75, "quantity": 8 },
    { "id": 4, "name": "Product D", "price": 50.25, "quantity": 20 },
    { "id": 5, "name": "Product E", "price": 300.0, "quantity": 2 },
    { "id": 6, "name": "Product F", "price": 120.0, "quantity": 15 },
    { "id": 7, "name": "Product G", "price": 75.5, "quantity": 7 },
    { "id": 8, "name": "Product H", "price": 90.0, "quantity": 12 },
    { "id": 9, "name": "Product I", "price": 250.0, "quantity": 4 },
    { "id": 10, "name": "Product J", "price": 180.0, "quantity": 6 } 
]
 console.log(data.includes({ "id": 10, "name": "Product J", "price": 180.0, "quantity": 6 }))
const printAll = () =>{
    console.log("Lists Data")
    data.forEach(item =>{
        console.log(`ID:${item.id}`)
    })
}
printAll()

// 2 
let id =2;
  const findById = (id) =>{
     var newdata = data.filter((item)=>item.id == id)
     if(newdata.length == 0){
     console.log("Not foundd")
     }else{
       
       newdata.forEach((item)=>{
       console.log(`ID:${item.id} - name :${item.name}`)
       })
      
     }
  }
  findById(id)

  // 3 
  const findByPrice = () => {
     const newdata = data.filter((item) =>item.price>20 && item.price < 100)
     newdata.forEach(item =>{
        console.log(`ID:${item.id}`)
     })
  }
  findByPrice()

  // 4
   
   const sortByNameAndPrice = () =>{
     const newdata =  data.sort((a,b) =>{
        if(a.name == b.name){
            return (a.price - b.price)
        }else{
           return (a.name.localeCompare(b.name))
        }
     })
     console.log(newdata)
   }
   sortByNameAndPrice()

   // 5 
   const newobj = {
    id:12, name: "tri", price:111,quantity:20
   }
   const addNewObj =(obj)=>{
    const newdata = data
    newdata.push(obj)
    printAll()
   }
   addNewObj(newobj)
   // newdata chỉ lấy địa chỉ để trỏ đến vùng bộ nhớ có chưa data
   // arr or obj đều chỉ dùng poiter lấy địa chỉ chỉ đến vùng nhớ chứ ko chưa trực tiếp mảng
   

   // 6
    const changeInf =(id,updateData)=>{
     data =  data.map((item) => (item.id == id)?{...item,...updateData}:item)
        findById(id)
    }
    changeInf(2,{name:"Hương",price:12,qunatity:23})

   // 7 
    const Delete = (id) =>{
        data =  data.filter((item) =>item.id !=id)
        console.log("d")
        printAll()
    }
    Delete(2)
   
  console.log("Return by ID")
    const returnById = (id)=>{
      const newdata = data.filter((i)=>i.id == id)
      return newdata
    }
    const data2 = returnById(3)
    const isEqual = (a,b) =>{
      return  JSON.stringify(a) ===JSON.stringify(b);
    }
    const target =  { "id": 10, "name": "Product J", "price": 180.0, "quantity": 6 } 
    const found = data.some((i)=>isEqual(i,target))
    console.log(found)
    const arr2 = [1,2,3]
    console.log(arr2.includes(2))
    const chekck = data.some((i)=>{
       return (i.id===10 &&
        i.name === "Product J" &&
        i.price === 180.0 &&
        i.quantity === 6)
        
  })
  console.log(chekck)
  const name2 = "Hello world"
  console.log(name2.includes("world"))
  console.log(name2.includes("World"))
  console.log(name2.startsWith("e"))
  console.log(name2.startsWith("H"))
  console.log(name2.endsWith("d"))
  console.log(name2.endsWith("2"))
  const arr3 = [1,2,3,4,5]
  arr3.splice(0,0,2,7,9)
  console.log(arr3)
  console.log(arr3.splice(2,2,2))
  arr3.splice(2,0,2)
  console.log(arr3)