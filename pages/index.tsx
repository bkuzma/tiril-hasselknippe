import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { IExhibition } from '../@types/generated/contentful'
import { createClient } from 'contentful'
import Image from 'next/image'

type Props = {
  exhibitions?: IExhibition[]
}

const Home: NextPage<Props> = ({ exhibitions }: Props) => {
  return (
    <div>
      <Head>
        <title>Tiril Hasselknippe</title>
        <meta name="description" content="Tiril Hasselknippe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-4 md:my-12 md:mx-8 lg:my-36 space-y-12 md:space-y-36">
        {exhibitions?.map((exhibition) => {
          return (
            <ul
              key={exhibition.sys.id}
              className="flex flex-col items-center space-y-12 md:space-y-36"
            >
              {exhibition.fields.image?.map((image) => (
                <li className="" key={image.sys.id}>
                  <Image
                    src={`https:${image.fields.file.url}`}
                    alt={image.fields.title}
                    width={image.fields.file.details.image?.width}
                    height={image.fields.file.details.image?.height}
                    blurDataURL={`https:${image.fields.file.url}?w=10`}
                    placeholder="blur"
                  />
                </li>
              ))}
            </ul>
          )
        })}
      </main>

      <footer></footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  })

  const exhibitionCollection = await client.getEntries<IExhibition>()

  return {
    props: {
      exhibitions: exhibitionCollection.items,
    },
  }
}

export default Home
