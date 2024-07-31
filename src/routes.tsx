import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CreatePost from "./pages/Post";
import Profile from "./pages/Profile";
import MyPhotos from "./pages/MyPhotos";
import ProtectedRoutes from "./components/protectedRoutes";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      { path: "/post", element: <CreatePost />, errorElement: <Error /> },
      { path: "/profile", element: <Profile />, errorElement: <Error /> },
      { path: "/myphotos", element: <MyPhotos />, errorElement: <Error /> },
    ],
  },

  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/signup", element: <Signup />, errorElement: <Error /> },
]);
