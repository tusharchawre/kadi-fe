import { ReactElement } from "react"

interface ItemProps {
    startIcon : ReactElement
  children: ReactElement | string
  onClick : ()=>void
}


function NavItem({startIcon, children, onClick}: ItemProps) {
  return (
    <div onClick={onClick} className="flex  gap-2 px-4 py-2 hover:bg-black/30 w-48 rounded-lg items-center">
        {startIcon}
        {children}
    </div>
  )
}

export default NavItem