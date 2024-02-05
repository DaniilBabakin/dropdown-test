declare module '*.svg' {
  const content: any
  export default content
}

interface DropdownState {
  label: string
  opened: boolean
}

interface DropdownContextProps {
  state: DropdownState
  setState: React.Dispatch<React.SetStateAction<DropdownState>>
}
