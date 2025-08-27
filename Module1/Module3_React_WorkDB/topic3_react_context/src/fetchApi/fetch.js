import { useEffect, useState } from "react"

import "../App.css"
function FetchApi(){

    const [user, setUser] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        return response.json()
      }).then(function(data){
        return setUser(data)
      }).catch(function(err){
        alert("Error")
      })
    },[])
    return(
      <div> 
        <table className="table " >
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
            {  
            user.map((e) => {
               return  (
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                </tr>
               )
            })
           
        } 
        </table>
        
      </div>
    )
}
export default FetchApi
// arrow function
// có 1 tham số , có ko tham số có nhiều tham sôs
// có 0 const arr = () => {return 1}
// có 1 const arr = x => {return x}
// có nhiều const arr = (a,b) => {return a*b}
// hàm trong fetch là hàm vô danh anonymous function express
// hàm bình thường là hàm khai báo function declaration