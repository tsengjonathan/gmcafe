import { Asset } from '../types/asset'
import _highlands from './highlands.json'

const baseUrl = 'https://api.opensea.io/api/v1'
const contract = '0x495f947276749ce646f68ac8c248420045cb7b5e'
const collection = 'goodmorningcafe'
const marketplaceUrl = 'https://opensea.io/assets'

// @ts-ignore
const highlands: Asset[] = _highlands

export {
  baseUrl,
  contract,
  highlands,
  collection,
  marketplaceUrl
}
