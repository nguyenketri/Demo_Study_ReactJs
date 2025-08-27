import Home from "./component/Home.js"

import Body from "./component/Body.js";
import { useContext } from "react";
import { themConT } from "./component/Context.js";
import FetchApi from "./fetchApi/fetch.js";
function App() {
    const context = useContext(themConT)
  return(
   <> 
   <FetchApi/>
    </>
    
    
  )
}

export default App;
// Context
// 1 createContext
// 2 Provider
// 3 Consumer
// Trong 1 app có thể sử dụng vô số context khác nhau
