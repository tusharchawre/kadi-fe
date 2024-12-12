import { ReactElement } from "react"

interface ButtonProps{
  variant : "dark" | "light"
  startIcon? : ReactElement
  children: ReactElement | string
  onClick?: () => void;
}


function Button({variant, startIcon, children, onClick
}: ButtonProps) {
  return (
    <div>
      <button onClick={onClick} className={`${variant == "dark" ? "bg-transparent border-[0.2px] border-white/20 hover:opacity-90 text-white/90":"bg-white text-black  hover:bg-white/90"} px-2 py-2 rounded-md flex text-sm gap-2 items-center transition-all duration-100`}>
        {startIcon}
      {children}
      </button>
    </div>
  )
}

export default Button