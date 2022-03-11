import React, { useContext, useEffect, useState } from 'react'
import { Asset } from '../types/asset'
import Card from './Card'

type CardsProps = {
  items: Asset[]
}

const Cards = ({ items }: CardsProps) => {
  return (
    <div className="grid gap-4 lg:gap-6 grid-cols-2 lg:grid-cols-4 m-4 lg:m-6">
      { items.map(highland => <Card key={highland.token} {...highland} />) }
    </div>
  )
}

export default Cards
