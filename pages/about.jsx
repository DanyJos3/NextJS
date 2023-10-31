import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>

                <div>
                    Hola Mundo About
                </div>
                <h1> Ir a <a href="/">Home  </a> </h1>


            </main>
        </>
    )
}