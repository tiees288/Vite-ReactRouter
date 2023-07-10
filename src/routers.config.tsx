import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import ListDetails from "./pages/listDetail.tsx";

const router = createBrowserRouter([
     {
          path: "/",
          element: <App />,
          children: [
               {
                    path: "home",
                    element: <h1>Home</h1>,
               },
          ]
     },
     {
          path: "/list",
          element: <h1>List</h1>,
     },
     {
          path: "/list/:id",
          element: <ListDetails />,
     }
]);

export default router;