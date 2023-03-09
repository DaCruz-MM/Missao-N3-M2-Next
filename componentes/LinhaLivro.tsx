import ControleEditora from '../classes/controle/ControleEditora'
import React from 'react'
import { Livro } from '../classes/modelo/Livro'

const controleEditora = new ControleEditora()

interface LinhaLivroProps {
    livro:Livro
    excluir():void
}

export const LinhaLivro:React.FC<LinhaLivroProps> = (props) => {
    return (
        <>
            <tr>
                <td>
                    {props.livro.titulo}
                    <br></br>
                    <button className='btn btn-danger' onClick={props.excluir}>excluir</button>
                </td>
                <td>{props.livro.resumo}</td>
                <td>{controleEditora.getNomeEditora(props.livro.codEditora)}</td>
                <td><ul>
                    {props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul></td>
            </tr>
        </>
    );
};
