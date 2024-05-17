import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../State/Hooks/useListaDeParticipantes";
import ListaParticipantes from "./index";


jest.mock('../../State/Hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe("uma lista vazia de participantes", () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test("uma lista de participante vazia deve ser renderizada sem elementos!", () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe("uma lista preenchida de participantes", () => {
    const participantes = ['Ana', 'Catarina']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test("deve ser renderizada sem elementos!", () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})
