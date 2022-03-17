import React, { ChangeEvent } from 'react'

export type FilterInputProps = {
  input: string
  setInput: (input: string) => void
  placeholder: string
}

const FilterInput = ({ input, setInput, placeholder }: FilterInputProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value
    setInput(newInput)
  }

  return (
    <input
      className="w-full bg-transparent duration-300 text-sm p-2 mb-3 border focus:outline-none focus:border-gray-700 rounded-sm"
      placeholder={placeholder}
      type="text"
      value={input}
      onChange={onChange}
    />
  )
}

export default FilterInput
