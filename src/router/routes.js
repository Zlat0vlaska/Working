import Layout from "../Components/Layout"
import Blog from "../pages/Blog"
import Home from "../pages/Home"
import PostIdPage from "../pages/PostIdPage"
import UserPage from "../pages/UserPage"

export const routes = [
    {path: "/", element: <Layout/>},
	{ path: "", element: <Home /> },
	{ path: "/blog", element: <Blog /> },
	{ path: "/blog/:id", element: <PostIdPage /> },
	{ path: "/users", element: <UserPage id={0} name={""} /> },
	//{ path: "*", element: <Home /> },
]

