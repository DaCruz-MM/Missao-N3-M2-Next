import { NextApiRequest, NextApiResponse } from 'next'
import ControleLivro from '../../../classes/controle/ControleLivros'

export const controleLivro = new ControleLivro

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;
    if ( method === "GET"){
        try {
            res.status(200).json(controleLivro.obterLivros());
        } catch {
            res.status(405).send({message:"Método não permitido!"});
        }
    };
    if ( method === "POST"){
        try {
            const {codigo,codEditora,titulo,resumo,autores} = JSON.parse(req.body);
            controleLivro.incluir({
                "codigo": 0,
                "codEditora": codEditora,
                "titulo": titulo,
                "resumo": resumo,
                "autores": autores
            });
            res.status(200).json({message:"Sucesso!"});
        } catch {
            res.status(500).send({message:"Erro!"});
        }
    };
};