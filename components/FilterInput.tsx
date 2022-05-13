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
      className="w-64 duration-300 text-sm p-2 border focus:outline-none focus:border-white rounded"
      placeholder={placeholder}
      type="text"
      value={input}
      onChange={onChange}
    />
  )
}

export default FilterInput
