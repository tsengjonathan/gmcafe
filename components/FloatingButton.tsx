import { ArrowUpIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import React from 'react'
import { useWindowScroll } from 'react-use'

const FloatingButton = () => {
  const { y } = useWindowScroll()

  const isVisible = y >= 1000

  const className = classNames(
    'rounded-full fixed right-8 bottom-8 transition-opacity',
    'bg-pink shadow',
    { 'opacity-0': !isVisible },
    { 'opacity-100 cursor-pointer': isVisible }
  )

  const scrollToTop = () => {
    isVisible && window && window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a className={className} onClick={scrollToTop}>
      <ArrowUpIcon className="h-6 w-6 m-4 text-white" />
    </a>
  )
}

export default FloatingButton
