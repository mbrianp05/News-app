import Head from 'next/head'
import Link from 'next/link'

const PageLayout = ({ children, title = 'NewsApp' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Watch the latest news online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        NewsApp
        <Link href="/about">Ir a about</Link>
      </header>
      <main>{children}</main>
      <style jsx>{`
        header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default PageLayout
