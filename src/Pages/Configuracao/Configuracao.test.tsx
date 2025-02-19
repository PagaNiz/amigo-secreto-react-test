import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Configuracao from "."

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('a pagina de config', () => {

    test('deve ser renderizada corretamente', () => {
        const { container } = render(
            <RecoilRoot>
                <Configuracao />
            </RecoilRoot>
        )
        expect(container).toMatchSnapshot()
    })
})