import React, { ReactNode } from 'react'
import { XIcon } from '@heroicons/react/solid'
import { Drawer as MuiDrawer } from '@mui/material'
import { Coffee } from 'react-feather'

export type DrawerProps = {
  isOpen: boolean
  close: () => void
  filterControls: ReactNode
}

const Drawer = ({ isOpen, close, filterControls }: DrawerProps) => {
  return (
    <MuiDrawer open={isOpen} onClose={() => close()} anchor="right">
      <div className="w-64 flex flex-col h-full justify-between">
        <div className="flex items-center border-b border-gray-300 pl-4 pr-3 py-2">
          <h1 className="w-full text-lg font-medium">Filter</h1>
          <XIcon className="w-8 h-8 cursor-pointer" onClick={() => close()} />
        </div>
        <div className="grow">
          { filterControls }
        </div>
        <div className="justify-center text-sm mb-2 flex items-center">
          Made with <Coffee className="h-4 w-4 mx-1" strokeWidth="3" /> by Loop<span className="text-xs text-gray-500 ml-0.5">#1155</span>
        </div>
      </div>
    </MuiDrawer>
  )
}

export default Drawer
