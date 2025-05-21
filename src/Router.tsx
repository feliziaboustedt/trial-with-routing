import { createBrowserRouter } from "react-router";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import { Layout } from "./Pages/Layout";
import { CV } from "./Pages/CV";

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
    {
        path: "/CV",
        element: <CV/>
    }
    ]
    }
]);