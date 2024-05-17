import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Sorteio from "."
import { useListaDeParticipantes } from "../../State/Hooks/useListaDeParticipantes"
import { useResultadoDoSorteio } from "../../State/Hooks/useResultadoDoSorteio"

jest.mock('../../State/Hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
jest.mock('../../State/Hooks/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const participantes = [
        "Ana",
        "Bia",
        "Catarina"
    ]
    const resultado = new Map([
        ["Ana", "Catarina"],
        ["Bia", "Ana"],
        ["Catarina", "Bia"]
    ])
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado)
    })
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length + 1)
    })
    test('o amigo secreto e exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )
        const select = screen.getByPlaceholderText("Selecione o seu nome")
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })
        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')
        expect(amigoSecreto).toBeInTheDocument()
    })
})