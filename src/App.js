import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from './router/Path';

function App() {
  return (
   <div>
     <RouterProvider router={router}/>
    <ToastContainer theme="colored"/>
   </div>
  );
}

export default App;
