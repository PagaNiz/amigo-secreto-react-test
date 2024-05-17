import { useState } from "react"
import { useListaDeParticipantes } from "../../State/Hooks/useListaDeParticipantes"
import { useResultadoDoSorteio } from "../../State/Hooks/useResultadoDoSorteio"
import "./styles.css"

const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoDoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (
        <section className="sorteio">
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDaVez"
                    placeholder="Selecione o seu nome"
                    id="participanteDaVez"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione seu nome</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <button className="botaoSortear">Sortear</button>
            </form>
            {amigoSecreto && <p role="alert" className="resultado">{amigoSecreto}</p>}
        </section>
    )
}

export default Sorteio