import { createBrowserRouter } from "react-router";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import { Layout } from "./Pages/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
    
    {
        path: "/", 
        element: <Portfolio/>,
    }, 
    {
        path: "/contact",
        element: <Contact/>,
    
    },
    ]
    }
]);