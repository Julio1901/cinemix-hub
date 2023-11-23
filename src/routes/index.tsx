import { BrowserRouter, Route, Routes } from "react-router-dom"
import { InitialPage } from "../pages/initialPage/initialPage"
import { NotFoundPage } from "../pages/notFoundPage/notFoundPage"
import { AllCharactersPage } from "../pages/allCharactersPage/AllCharactersPage"

export const RoutesComponent = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPage/>}/>
                <Route path="/get-all-rick-and-morty-characters" element={<AllCharactersPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}