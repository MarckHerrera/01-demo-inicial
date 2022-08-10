import Head from 'next/head'
import Link from 'next/link'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'
import { FC, PropsWithChildren } from 'react';


export const MainLayout: FC<PropsWithChildren>  = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home Dylan</title>
                <meta name="description" content="Hola estoy feliz en home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>

                {children}

            </main>
        </div>
    )
}
