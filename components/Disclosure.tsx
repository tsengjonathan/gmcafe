import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import FilterPanel from './FilterPanel'
import { TRAIT } from '../types/asset'
import { capitalize } from './util'

export type DisclosureProps = {
  title: TRAIT
  fields: { [key: string]: number }
}

const Disclosure_ = ({ title, fields }: DisclosureProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left focus:outline-none focus-visible:ring border-t border-gray-300">
            <span>{capitalize(title)}</span>
            <ChevronUpIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-3 pb-6 text-sm">
              <FilterPanel title={title} fields={fields} />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Disclosure_
