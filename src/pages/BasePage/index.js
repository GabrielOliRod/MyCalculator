import { Container } from "@mui/material"
import Cabecalho from "components/Cabecalho"
import Footer from "components/Footer"
import { Outlet } from "react-router-dom"

function BasePage() {
    return (
        <main>
            <Cabecalho />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default BasePage