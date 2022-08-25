import Image from 'next/image'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home ({ news }) {
  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        {news.map((singleNews, index) => (
          <div key={index}>
            <Image
              alt={`Image related to ${singleNews.title}`}
              src={singleNews.urlToImage}
              width={450}
              height={300}
              layout="responsive"
              priority={index === 0}
            />
            <h2>{singleNews.title}</h2>
            <p>{singleNews.description}</p>
            <button className="bg-slate-700 border border-slate-500 px-2 py-4 text-white rounded">Read more</button>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3e5d9cafbb864611915f914912a82ff7'
  )

  const { articles: news } = await response.json()

  return {
    props: {
      news
    }
  }
}
