import classNames from 'classnames'
import React, { useContext } from 'react'
import { FilterContext } from '../providers/FilterProvider'
import Card from './Card'

const Cards = () => {
  const { items, nextPage, size } = useContext(FilterContext)

  return (
    <>
      <div className="grid gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 m-4 lg:m-6">
        { items.map(highland => <Card key={highland.token} {...highland} />) }
      </div>
      <div className="flex mb-10">
        <button
          className={classNames(
            'font-mono text-white text-xl font-medium tracking-wider',
            'bg-pink px-8 py-2 rounded shadow',
            'underline decoration-2 underline-offset-8 pb-4',
            'transition duration-300 hover:-translate-y-1 hover:shadow-lg',
            { 'hidden': items.length === size }
          )}
          onClick={() => nextPage()}
        >
          Show More Moos
        </button>
      </div>
    </>
  )
}

export default Cards
