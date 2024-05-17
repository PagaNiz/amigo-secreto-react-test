import Card from "../../Components/Card"
import Footer from "../../Components/Footer"
import Formulario from "../../Components/Form/Formulario"
import ListaParticipantes from "../../Components/ListaParticipantes"

const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario/>
                <ListaParticipantes/>
                <Footer/>
            </section>
        </Card>
    )
}

export default Configuracao