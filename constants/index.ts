import { Asset, TRAIT } from '../types/asset'
import highlands from './highlands'

const baseUrl = 'https://api.opensea.io/api/v1'
const contract = '0x495f947276749ce646f68ac8c248420045cb7b5e'
const fallbackImgUrl = 'https://lh3.googleusercontent.com/h02MVM2uAxjAhQs4MzWM7ZYRo1NCxK59nxIm4GgxBu9lBmm60XPDie8bTZ5ppoqFS6pCYb6b62nIvo8E-8FPW4eztOB3AfZTXMXJaW8'
const collection = 'goodmorningcafe'
const marketplaceUrl = 'https://opensea.io/assets'

const fallbackAsset: Asset = {
  name: '',
  description: '',
  imageUrl: fallbackImgUrl,
  traits: {
    background: [],
    clothing: [],
    colour: [],
    feature: [],
    mood: [],
    object: []
  },
  token: ''
}

export {
  baseUrl,
  contract,
  highlands,
  fallbackAsset,
  collection,
  marketplaceUrl
}
