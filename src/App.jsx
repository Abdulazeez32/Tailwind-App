import Counter from "./pages/counter"
import Hook from "./pages/hook"
import Hook1 from "./pages/hook1"
import UI from "./pages/UI"
import UX from "./pages/Ux"
import {Toaster} from "react-hot-toast";
export default function App(){
  return(
    <>
       <Toaster />
    <Counter />
    </>
  )
}