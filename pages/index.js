import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hyeonah's Portfolio</title>
        <meta
          name='description'
          content='Hyeonah Cho&#39;s Portfolio'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css'
        />
      </Head>
    </div>
  )
}

export default Home
