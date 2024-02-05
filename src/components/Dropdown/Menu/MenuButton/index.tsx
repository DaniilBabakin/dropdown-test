import React, { useCallback, useContext } from 'react'
import './index.scss'

import DropdownContext from '../../../DropdownContext'

import { ArrowIcon } from '../../../icons'

interface Props {
  label: string
  id: string
}

const MenuButton = (props: Props) => {
  const { label, id } = props

  const { setState } = useContext(DropdownContext)

  const handleClick = useCallback(() => {
    setState((prev) => ({ label, opened: !prev.opened }))
  }, [label, setState])

  return (
    <li
      id={id}
      className='menu__button'
    >
      <button
        onClick={handleClick}
      >
        {label}
        <ArrowIcon />
      </button>
    </li>
  )
}

export default MenuButton
