import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../State/Hooks/useAdicionarParticipantes";
import { useMensagemDeErro } from "../../State/Hooks/useMensagemDeErro";
import "./styles.css"

const Formulario = () => {

    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={adicionarParticipante}>
            <div className="grupoInputBtn">
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                    type=""
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>Adicionar</button>
            </div>
            {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
        </form>
    )
}

export default Formulario;