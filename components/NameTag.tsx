import React from 'react'
import { DiscordIcon } from './Icons'

type NameTagProps = {
  name: string
}

const NameTag = ({ name }: NameTagProps) => {
  return (
    <span className="flex items-center bg-discord rounded-full px-3 py-0.5 max-w-full">
      <DiscordIcon className="w-3 h-3" />
      <p className="text-white text-xs font-sans ml-2 whitespace-nowrap overflow-hidden">{name}</p>
    </span>
  )
}

export default NameTag
