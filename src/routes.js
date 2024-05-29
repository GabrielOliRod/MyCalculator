import AboutMe from "pages/AboutMe"
import BasePage from "pages/BasePage"
import IndexPage from "pages/Index"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<IndexPage />} />
                    <Route path="/AboutUs" element={<AboutMe />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes