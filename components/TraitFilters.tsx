import useCollection from '../hooks/useCollection'
import { TRAIT } from '../types/asset'
import TraitFilter from './TraitFilter'

const TraitFilters = () => {
  const collection = useCollection()

  return (
    <div className="grid grid-cols-6 gap-4 max-w-screen-xl bg-pink-light w-full p-4 my-1 rounded">
      <TraitFilter title={TRAIT.BACKGROUND} fields={collection[TRAIT.BACKGROUND]} />
      <TraitFilter title={TRAIT.CLOTHING} fields={collection[TRAIT.CLOTHING]} />
      <TraitFilter title={TRAIT.COLOUR} fields={collection[TRAIT.COLOUR]} />
      <TraitFilter title={TRAIT.FEATURE} fields={collection[TRAIT.FEATURE]} />
      <TraitFilter title={TRAIT.MOOD} fields={collection[TRAIT.MOOD]} />
      <TraitFilter title={TRAIT.OBJECT} fields={collection[TRAIT.OBJECT]} />
    </div>
  )
}

export default TraitFilters
