import Head from 'next/head'
import { useContext } from 'react'
import Card from '../components/Card'
import FilterList from '../components/FilterList'
import Sidebar from '../components/Sidebar'
import { FilterContext } from '../providers/FilterProvider'

const Home = () => {
  const { items } = useContext(FilterContext)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Head>
        <title>Good Morning Café</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <main className="flex flex-1 flex-col items-center text-center lg:w-3/4">
        <FilterList count={items.length} />
        <div className="grid gap-4 lg:gap-6 grid-cols-2 lg:grid-cols-4 m-4 lg:m-6">
          { items.map(highland => <Card key={highland.token} {...highland}/>) }
        </div>
      </main>
    </div>
  )
}

export default Home
