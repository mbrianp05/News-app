import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        <Head>
          <title>NewsApp - Home</title>
        </Head>

        <h1>Aprendiendo Next.js desde 0</h1>
        <Link href="/about">Ir a about</Link>
      </div>
    </PageLayout>
  )
}
