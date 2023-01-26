import { FC } from 'react'

interface ButtonProps {
  text: string
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className='border-cyan-30 border px-12 py-2 hover:bg-slate-700'>
      {text}
    </button>
  )
}
