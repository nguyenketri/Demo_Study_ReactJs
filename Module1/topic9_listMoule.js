// Khai báo thành phần trong module
const student ={id:1,name:"Da"}
 const display = ({id,name})=>{
    console.log(id)
    console.log(name)
}

// Export để sử dụng module khác
export {student,display}