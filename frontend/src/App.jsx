import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/getuser/user.jsx";
import "./App.css";
import Add from "./components/adduser/Add.jsx";
import Edit from "./components/updateuser/edit.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
    {
      path: "/edit/:id",
      element: <Edit/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
