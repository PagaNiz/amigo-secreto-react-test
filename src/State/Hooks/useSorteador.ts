import shuffle from "just-shuffle"
import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecreto } from "../atom"
import { realizarSorteio } from "../Helpers/realizarSorteio"

export const useSorteador = () => {

    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

    return () => {
        const resultado = realizarSorteio(participantes)

        setResultado(resultado)
    }
}