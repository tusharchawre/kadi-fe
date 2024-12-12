import { ReactElement } from "react"

interface ItemProps {
    startIcon : ReactElement
  children: ReactElement | string
}


function NavItem({startIcon, children}: ItemProps) {
  return (
    <div className="flex  gap-2 px-4 py-2 hover:bg-black/30 w-48 rounded-lg items-center">
        {startIcon}
        {children}
    </div>
  )
}

export default NavItem