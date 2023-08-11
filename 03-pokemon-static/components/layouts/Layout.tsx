import { FC, PropsWithChildren, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout:FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title ? title : "Pokemon App" }</title>
        <meta name='author' content='Daniel Plascencia' />
        <meta name='description' content={`Información sobre el pokémon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar /> 

      <main style={{ padding: "0 20px" }}>
        { children }
      </main>
    </>
  )
}
