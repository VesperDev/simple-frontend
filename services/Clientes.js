import { NEXT_URL } from '@/config/index'

export const clientesGet = async () => {

    const response = await fetch(`${NEXT_URL}/api/clientes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()
    return data
}