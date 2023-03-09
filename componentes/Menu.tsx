import React from 'react'
import Link from 'next/link'

export const Menu: React.FC = () => {return(
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <Link className='navbar-brand mx-sm-3' href="/">Home</Link>
        <Link className='navbar-brand mx-sm-3' href="/LivroLista">LivroLista</Link>
        <Link className='navbar-brand mx-sm-3' href="/LivroDados">LivroDados</Link>
    </nav>
);}