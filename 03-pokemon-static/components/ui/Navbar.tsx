import { FC } from 'react'
import Image from 'next/image'

export const Navbar:FC = () => {

  return (
    <div style={{
      display: "flex",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      padding: "0 20px",
    }} className='bg-gray-900'>
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt='Icono de la app' width={70} height={70} />

      <p className='white text-xl'>P</p>
      <p className='white'>okémon</p>

      <p className='flex-1'></p>

      <p className='white'>Favoritos</p>
    </div>
  )
}
