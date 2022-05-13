import { TRAIT } from '../types/asset'
import { Combobox } from '@headlessui/react'
import { useContext, useEffect, useState } from 'react'
import { SelectorIcon, CheckIcon } from '@heroicons/react/outline'
import { kebabCase } from './util'
import classNames from 'classnames'
import { FilterContext } from '../providers/FilterProvider'

type TraitFilterProps = {
  title: TRAIT
  fields: { [key: string]: number }
}

const TraitFilter = ({ title, fields }: TraitFilterProps) => {
  const [ input, setInput ] = useState('')
  const [ selected, setSelected ] = useState<string[]>([])
  
  const { overwriteFilters } = useContext(FilterContext)

  const changeSelected = (newSelected: string[]) => {
    setSelected(newSelected)
    setInput('')
  }

  useEffect(() => {
    overwriteFilters(title, selected)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ selected ])

  const options = Object.keys(fields)
    .filter(field => {
      if (input === '') { return field }
      return field.toUpperCase().includes(input.toUpperCase())
    })
    .sort((a, b) => {
      const aSelected = a in selected
      const bSelected = b in selected
      const bothSelected = aSelected && bSelected
      aSelected || bSelected && console.log({
        aSelected, bSelected, bothSelected
      })
      return bothSelected ? a.localeCompare(b) : aSelected ? 1 : bSelected ? -1 : a.localeCompare(b)
    })
    .map((field) => {
      const key = kebabCase(field)
      return <Option key={key} name={field} value={field} />
    })

  return (
    <Combobox value={selected} onChange={changeSelected} multiple>
      <div className="relative">
        <div className="flex bg-white rounded overflow-hidden relative p-1">
          <Combobox.Button className="flex items-center w-full">
            <Combobox.Input
              className="focus:outline-none text-sm w-full px-2 py-1"
              displayValue={() => input}
              onChange={e => setInput(e.target.value)}
              placeholder={title}
            />
            <span className={classNames(
              'h-5 w-5 bg-gray-300 rounded-full shrink-0 mr-1 text-xs flex items-center justify-center',
              { 'hidden': selected.length === 0 }
            )}>
              {selected.length}
            </span>
            <SelectorIcon className="h-5 w-5 text-gray-700" />
          </Combobox.Button>
        </div>
        <Combobox.Options className="absolute overflow-y-auto bg-white max-h-72 w-full text-sm mt-1 z-10 rounded shadow">
          {options}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

type OptionProps = {
  name: string
  value: string
}

const Option = ({ name, value }: OptionProps) => {
  return (
    <Combobox.Option
      className={({ active }) => classNames(
        'relative py-2 pl-8 cursor-default',
        { 'bg-pink': active }
      )}
      value={value}
    >
      {({ selected, active }) => (
        <>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <CheckIcon className={classNames(
              'h-4 w-4',
              { 'text-pink': !active && selected },
              { 'text-white': active && selected },
              { 'hidden': !selected },
            )} />
          </span>
          <span className={classNames(
            'block truncate text-left',
            { 'text-white': active }
          )}>
            {name}
          </span>
        </>
      )}
    </Combobox.Option>
  )
}

export default TraitFilter
