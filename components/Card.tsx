import Image from 'next/image'
import { useState } from 'react'
import { Asset, TRAIT } from '../types/asset'
import Chip from './Chip'


const Card = ({ name, imageUrl: inputUrl, traits, token }: Asset) => {
  const [ imageUrl, setImageUrl ] = useState(inputUrl)
  const displayName = name.split(' ')[1]

  const { background, clothing, colour, mood, feature, object } = traits

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="relative w-48 h-48 rounded-full overflow-hidden transition-transform hover:scale-110 duration-200 m-3">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" onError={() => setImageUrl('/fallback.png')}/>
      </div>
      <h3 className="mt-2 text-lg">{displayName}</h3>
      <div className="break-inside-avoid">
        {background.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.BACKGROUND} variant="sm" />
        })}
        {clothing.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.CLOTHING} variant="sm" />
        })}
        {colour.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.COLOUR} variant="sm" />
        })}
        {mood.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.MOOD} variant="sm" />
        })}
        {feature.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.FEATURE} variant="sm" />
        })}
        {object.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.OBJECT} variant="sm" />
        })}
      </div>
    </div>
  )
}

export default Card
