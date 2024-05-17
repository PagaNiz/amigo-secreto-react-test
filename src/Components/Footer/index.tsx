import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../State/Hooks/useListaDeParticipantes"
import "./styles.css"
import { useSorteador } from "../../State/Hooks/useSorteador"

const Footer = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegarPara("/sorteio")
    }

    return (
        <footer className="footerConfig">
            <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
        </footer>
    )
}

export default Footer