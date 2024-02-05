import React, { useContext, useMemo } from 'react'
import './index.scss'

import MenuButton from './MenuButton'

import DropdownContext from '../../DropdownContext'

const DropdownMenu = () => {
  const { state } = useContext(DropdownContext)

  const buttonsInfo = useMemo(() => (
    [
      { label: 'Account', id: 'account-button' },
      { label: 'Wallet', id: 'wallet-button' },
      { label: 'Bonuses', id: 'bonuses-button' },
      { label: 'Bets', id: 'bets-button' },
      { label: 'History', id: 'history-button' }
    ]
  ), [])

  return (
    <ul className={`dropdown__menu ${state.opened ? 'opened' : ''}`}>
      {buttonsInfo.map((buttonInfo) => (
        <MenuButton {...buttonInfo} key={buttonInfo.id}/>
      ))}
    </ul>
  )
}

export default DropdownMenu
