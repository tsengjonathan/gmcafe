import { useContext } from 'react'
import { RotateCcw, Shuffle } from 'react-feather'
import { FilterContext } from '../providers/FilterProvider'
import FilterInput from './FilterInput'
import FilterToggle from './FilterToggle'

const ExtraFilters = () => {
  const {
    filterSpecial,
    setFilterSpecial,
    filterMaccas,
    setFilterMaccas,
    shuffle,
    reverse,
    nameInput,
    setNameInput
  } = useContext(FilterContext)
  
  return (
    <div className="flex gap-4 max-w-screen-xl bg-pink-light w-full p-4 my-1 rounded">
      <div className="flex gap-4 items-center py-2 px-4 bg-white bg-opacity-90 rounded">
        <RotateCcw className="h-5 w-5 text-gray-700 cursor-pointer" strokeWidth="2" onClick={() => reverse()} />
        <Shuffle className="h-5 w-5 text-gray-700 cursor-pointer" strokeWidth="2" onClick={() => shuffle()} />
      </div>
      <FilterToggle title="Custom" isEnabled={filterSpecial} setIsEnabled={setFilterSpecial} />
      <FilterToggle title="Waccas" isEnabled={filterMaccas} setIsEnabled={setFilterMaccas} />
      <FilterInput input={nameInput} setInput={setNameInput} placeholder="BenColefax#3753" />
    </div>
  )
}

export default ExtraFilters
