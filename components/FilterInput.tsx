import React, { ChangeEvent } from 'react'

export type FilterInputProps = {
  input: string
  setInput: (input: string) => void
}

const FilterInput = ({ input, setInput }: FilterInputProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value
    setInput(newInput)
  }

  return (
    <input
      className="w-full bg-transparent duration-300 text-sm p-2 mb-3 border focus:outline-none focus:border-black"
      placeholder="Search..."
      type="text"
      value={input}
      onChange={onChange}
    />
  )
}

export default FilterInput
