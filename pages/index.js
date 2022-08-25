import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home({ news }) {
  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        <Head>
          <title>NewsApp - Home</title>
        </Head>
        {news.map(singleNews => (
          <article key={singleNews.title}>{singleNews.title}</article>
        ))}
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://endpoint.com/news')
  const { news } = await response.json()

  return {
    props: {
      news,
    },
  }
}
