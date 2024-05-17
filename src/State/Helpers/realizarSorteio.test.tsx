import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante nao sorteie o proprio nome', () => {
        const participantes = ['Ana', 'Juliana', 'Jones', 'Lucas', 'Brenda']

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})