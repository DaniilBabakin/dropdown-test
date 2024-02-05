// React context для компонента Dropdown, чтобы избежать передачи на несколько уровней вниз
// Типы прописаны в custom.d.ts

import { createContext } from 'react'

const DropdownContext = createContext<DropdownContextProps>({
  state: { label: '', opened: false },
  setState: () => {}
})

export default DropdownContext
