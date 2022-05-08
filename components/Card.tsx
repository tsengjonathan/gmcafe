import classNames from 'classnames'
import Image from 'next/image'
import { Asset } from '../types/asset'
import Chip from './Chip'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { contract, marketplaceUrl } from '../constants'
import Link from 'next/link'
import NameTag from './NameTag'

const Card = ({ name, imageUrl, attributes, token, isSpecial, discord }: Asset) => {
  const displayName = isSpecial ? name : name.split(' ')[1]

  const externalLink = `${marketplaceUrl}/${contract}/${token}`

  const chips = attributes.map((attribute, idx) => {
    const { trait_type, value } = attribute
    return <Chip key={`${token}-${trait_type}-${idx}`} name={value} type={trait_type} />
  })

  return (
    <div className={classNames(
      'flex flex-col items-center overflow-hidden rounded lg:pb-6 animate-rerender w-60',
      { 'bg-gray-100 drop-shadow transition-transform lg:hover:scale-105 duration-200 pb-4': isSpecial }
    )}>
      <div className="relative">
        <div className={classNames(
          'relative w-36 h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden m-3',
          { 'drop-shadow': isSpecial },
          { 'scale-110 lg:scale-100 transition-transform lg:hover:scale-110 duration-200': !isSpecial }
        )}>
          <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
        </div>
        <Link href={externalLink} passHref>
          <a target="_blank">
            <ExternalLinkIcon className="h-5 w-5 m-1 cursor-pointer absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors" />
          </a>
        </Link>
      </div>
      <h3 className="mt-2 mb-1 text-lg cursor-default px-3">{displayName}</h3>
      { discord ? <NameTag name={discord} /> : null }
      <div className="break-inside-avoid mt-2 px-2">
        {chips}
      </div>
    </div>
  )
}

export default Card
