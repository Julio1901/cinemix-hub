import { BrowserRouter, Route, Routes } from "react-router-dom"
import { InitialPage } from "../pages/initialPage/initialPage"
import { NotFoundPage } from "../pages/notFoundPage/notFoundPage"

export const RoutesComponent = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}