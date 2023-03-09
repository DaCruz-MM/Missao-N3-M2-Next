import { NextApiRequest, NextApiResponse } from 'next'
import ControleEditora from '../../../classes/controle/ControleEditora'

export const controleEditora = new ControleEditora

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;
    if ( method === "GET"){
        try {
            res.status(200).json(controleEditora.getEditoras());
        } catch {
            res.status(405).send({message:"Método não permitido!"});
        }
    };
};