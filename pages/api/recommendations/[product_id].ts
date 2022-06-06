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
  res.status(200).json([
    {
      product_id: req.query.product_id as string,
      recommendations: ['4854058647597', '4854058942509', '4854059270189'],
    },
  ])
}
