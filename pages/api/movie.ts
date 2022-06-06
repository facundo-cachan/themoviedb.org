// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  product_id: string
  recommendations: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const { body, query } = req
  console.log('API', { body, query })
  res.status(200).json(query])
}
