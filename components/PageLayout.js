import Head from 'next/head'

const PageLayout = ({ children, title = 'NewsApp' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Watch the latest news online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>NewsApp</header>
      <main>{children}</main>
      <style jsx>{`
        header {
          padding: 20px;
        }
      `}</style>
    </>
  )
}

export default PageLayout
