import Head from 'next/head'

const PageLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NewsApp</title>
        <meta name="description" content="Watch the latest news online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>NewsApp</header>
      <main>
        {children}
      </main>
      <style jsx>{`
        header {
          padding: 20px;
        }
      `}</style>
    </>
  )
}

export default PageLayout