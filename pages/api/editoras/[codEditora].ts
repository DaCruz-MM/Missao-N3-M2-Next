import { NextApiRequest, NextApiResponse } from 'next'
import {controleEditora} from '.'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;
    if ( method === "GET"){
        try {
            res.status(200).send({nome:controleEditora.getNomeEditora(Number(req.query.codEditora))});
        } catch {
            res.status(405).send({message:"Método não permitido!"});
        }
    }
}