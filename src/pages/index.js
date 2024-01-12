import Head from 'next/head';
import ChaseGame from '../components/ChaseGame';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Head>
        <title>Cursor Chase Game</title>
        <meta name="description" content="A simple cursor chase game in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <ChaseGame />
      </main>
    </div>
  )
}
