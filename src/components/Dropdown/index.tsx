import React, { memo, useEffect, useState } from 'react'
import './index.scss'

import DropdownButton from './Button'
import DropdownMenu from './Menu'

import DropdownContext from '../DropdownContext'

const Dropdown = () => {
  const [state, setState] = useState<DropdownState>({
    label: 'Account',
    opened: false
  })

  // Контроль над кликом вне компонента
  useEffect(() => {
    const specifiedElement: HTMLElement | null = document.getElementById('dropdown')

    const handleClickOutside = (event: MouseEvent): void => {
      if (event.target == null || specifiedElement == null) return

      const isClickOutside = !specifiedElement.contains(event.target as Node)
      if (isClickOutside) {
        setState((prev) => ({ ...prev, opened: false }))
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <DropdownContext.Provider value={{ state, setState }}>
      <div id="dropdown">
        <DropdownButton />
        <DropdownMenu />
      </div>
    </DropdownContext.Provider>
  )
}

export default memo(Dropdown)
