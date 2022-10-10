import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextGen CMS Platform</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        <h1>UNDER DEVELOPMENT</h1>
      </main>

      <footer className={styles.footer}>
        <a>© NextGen Solutions</a>
      </footer>
    </>
  )
}
