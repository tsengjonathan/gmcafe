import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import { Asset, TRAIT } from '../types/asset'
import Chip from './Chip'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { contract, marketplaceUrl } from '../constants'
import Link from 'next/link'


const Card = ({ name, imageUrl: inputUrl, traits, token, isSpecial }: Asset) => {
  const [ imageUrl, setImageUrl ] = useState(inputUrl)
  const displayName = isSpecial ? name : name.split(' ')[1]

  const { background, clothing, colour, mood, feature, object } = traits

  const externalLink = `${marketplaceUrl}/${contract}/${token}`

  return (
    <div className={classNames(
      'flex flex-col items-center overflow-hidden rounded lg:pb-6',
      { 'bg-gray-100 drop-shadow transition-transform hover:scale-105 duration-200 pb-4': isSpecial }
    )}>
      <div className="relative">
        <div className={classNames(
          'relative w-36 h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden m-3',
          { 'drop-shadow': isSpecial },
          { 'scale-110 lg:scale-100 transition-transform lg:hover:scale-110 duration-200': !isSpecial }
        )}>
          <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" onError={() => setImageUrl('/fallback.png')}/>
        </div>
        <Link href={externalLink} passHref>
          <a target="_blank">
            <ExternalLinkIcon className="h-5 w-5 m-1 cursor-pointer absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors" />
          </a>
        </Link>
      </div>
      <h3 className="mt-2 text-lg cursor-default px-3">{displayName}</h3>
      <div className="break-inside-avoid mt-2 px-2">
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
