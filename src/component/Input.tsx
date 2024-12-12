import { LegacyRef } from "react"

interface InputProps {
    label : string
    placeholder: string
    reference?: any
}


function Input({label, placeholder, reference}: InputProps) {
  return (
    <div className="w-full px-8 flex flex-col gap-1">
        <p className="text-white">
        {label}
        </p>
        <input type="text" ref={reference} className="w-full px-2 py-1 text-black bg-white/90 rounded-md focus:outline-none" placeholder={placeholder} />
    </div>
  )
}

export default Input