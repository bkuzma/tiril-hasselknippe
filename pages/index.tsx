import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tiril Hasselknippe</title>
        <meta name="description" content="Tiril Hasselknippe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `
  query {
    exhibitionCollection {
      items {
        name
        venue
        date
      }
    }
  }
  `

  const data = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())

  return {
    props: {
      data: data,
    },
  }
}

export default Home
