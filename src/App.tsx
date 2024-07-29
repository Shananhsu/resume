import { createBrowserRouter, RouterProvider } from "react-router-dom";

//component
import Layout from "./components/Layout"; //layout

//頁面
import Home from "./home"; //首頁
import AboutMe from "./aboutMe"; //關於我

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutMe",
        element: <AboutMe />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
