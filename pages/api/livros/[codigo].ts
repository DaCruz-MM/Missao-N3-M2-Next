import { NextApiRequest, NextApiResponse } from 'next'
import {controleLivro} from '.'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;
    if ( method === "DELETE"){
        try {
            controleLivro.excluir(Number(req.query.codigo))
            res.status(200).send({message:"Sucesso!"});
        } catch {
            res.status(500).send({message:"Erro!"});
        }
    }
}