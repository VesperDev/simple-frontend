import { API_URL } from '@/config/index'

const index = async (req, res) => {
    if (req.method === 'GET') {
        clientesGet(req, res)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function clientesGet(req, res) {

        const response = await fetch(`${API_URL}/clientes`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        const data = await response.json()

        if (response.ok) {
            res.status(200).json(data)
        } else {
            const { statusCode } = data
            res.status(statusCode).json({ error : true })
        }
    }
}

export default index