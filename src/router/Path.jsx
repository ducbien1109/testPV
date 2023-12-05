import { createBrowserRouter } from "react-router-dom";
import path from "./Index";
import Content from "../components/Content";
import HeaderComponent from "../components/HeaderComponent";
import Admin from "../admin/Admin";
import Detail from "../components/Detail";
const router = createBrowserRouter([
  {
    path: path.home,
    element: <Content />,
  },
  {
    path: path.manpower,
    element: <HeaderComponent />,
  },
  {
    path: path.admin,
    element: <Admin />,
  },
  {
    path:path.detail,
    element:<Detail/>
  },
]);
export default router;
