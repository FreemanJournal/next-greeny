// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';
import { Orders } from '../../models/Orders';
import { connect } from "../../utilities/database/db"


export default async function handler(req, res) {
  await connect();
  if (req.method === 'POST') {
   const order = await Orders.create({
      orderId:uuidv4(),
      order:req.body

    })
    res.status(200).json(order)

  } else {
    throw new Error('http method not supported on this endpoint')
  }
}
