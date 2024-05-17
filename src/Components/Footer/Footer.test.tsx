import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "."
import { useListaDeParticipantes } from "../../State/Hooks/useListaDeParticipantes"

jest.mock('../../State/Hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})


const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})
jest.mock('../../State/Hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe('onde não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('quando exitem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina'])
    })
    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeEnabled()
    })
    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})