import Image from 'next/image'
import { Asset, TRAIT } from '../types/asset'
import Chip from './Chip'


const Card = ({ name, imageUrl, traits, token }: Asset) => {
  const displayName = name.split(' ')[1]

  const { background, clothing, colour, mood, feature, object } = traits

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="relative w-48 h-48 rounded-full overflow-hidden transition-transform hover:scale-110 duration-200 m-2">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3 className="mt-2 text-lg">{displayName}</h3>
      <div className="break-inside-avoid">
        {background.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.BACKGROUND} />
        })}
        {clothing.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.CLOTHING} />
        })}
        {colour.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.COLOUR} />
        })}
        {mood.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.MOOD} />
        })}
        {feature.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.FEATURE} />
        })}
        {object.map((trait, idx) => {
          const key = `${token}-${trait}-${idx}`
          return <Chip key={key} name={trait} type={TRAIT.OBJECT} />
        })}
      </div>
    </div>
  )
}

export default Card
