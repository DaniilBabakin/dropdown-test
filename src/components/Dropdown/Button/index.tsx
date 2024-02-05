import React, { useCallback, useContext, memo } from 'react'
import DropdownContext from '../../DropdownContext'

import './index.scss'

const DropdownButton = () => {
  const { state, setState } = useContext(DropdownContext)
  const { label } = state

  const handleChangeOpened = useCallback(() => {
    setState((prev) => ({ ...prev, opened: !prev.opened }))
  }, [setState])

  return (
    <button
      onClick={handleChangeOpened}
      className='dropdown__button'
    >
      {label}
    </button>
  )
}

export default memo(DropdownButton)
