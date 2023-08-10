import { FC, PropsWithChildren } from 'react'

export const DarkLayout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{background: "rgba(255,255,255,0.3)", padding: "10px", borderRadius: "5px"}}>
      <h1>Dark Layout</h1>
      <div>
        { children }
      </div>
    </div>
  )
}