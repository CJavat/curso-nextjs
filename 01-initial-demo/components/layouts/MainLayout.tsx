import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

import { Navbar } from '../Navbar';

import style from './MainLayout.module.css';

export const MainLayout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.container}>
      <Head>
        <title>Home - CJavatX</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${style.main}`}>
        { children }
      </main>
    </div>
  )
}