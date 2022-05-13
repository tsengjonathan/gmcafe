import { Switch } from '@headlessui/react'
import classNames from 'classnames'
import React from 'react'

type FilterToggleProps = {
  title: string
  isEnabled: boolean
  setIsEnabled: (_isEnabled: boolean) => void
}

const FilterToggle = ({ title, isEnabled, setIsEnabled }: FilterToggleProps) => {
  return (
    <div className="flex px-3 py-2 text-sm justify-between items-center bg-white bg-opacity-90 rounded">
      <span className="mr-2">{title}</span>
      <Switch
        checked={isEnabled}
        onChange={() => setIsEnabled(!isEnabled)}
        className={classNames(
          { 'bg-pink': isEnabled },
          { 'bg-gray-500': !isEnabled },
          'relative inline-flex flex-shrink-0 h-6 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-200 focus:outline-none'
        )}
      >
        <span className="sr-only">{title}</span>
        <span
          aria-hidden="true"
          className={classNames(
            { 'translate-x-4': isEnabled },
            { 'translate-x-0': !isEnabled },
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </div>
  )
}

export default FilterToggle
