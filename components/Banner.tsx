import { Coffee } from 'react-feather'
import { OpenSeaIcon, TwitterIcon, DiscordIcon } from './Icons'
import Logo from './Logo'

const Banner = () => {
  return (
    <div className="w-full bg-pink flex flex-col items-center justify-center py-10 mb-4">
      <div className="flex mb-8 justify-center">
        <a href="https://opensea.io/collection/goodmorningcafe" target="blank">
          <OpenSeaIcon className="h-5 w-5 mx-1" />
        </a>
        <a href="https://twitter.com/gmcafeNFT" target="blank">
          <TwitterIcon className="h-5 w-5 mx-1" />
        </a>
        <a href="https://discord.gg/gmcafe" target="blank">
          <DiscordIcon className="h-5 w-5 mx-1" />
        </a>
      </div>
      <Logo className="w-96" />
      <div className="text-white justify-center mt-8 text-sm flex items-center">
        Made with <Coffee className="h-4 w-4 mx-1" strokeWidth="3" /> by Loop <span className="text-xs ml-0.5">#1155</span>
      </div>
    </div>
  )
}

export default Banner
