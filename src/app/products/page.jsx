import React from 'react'
import { Card, Chip, Separator } from '@heroui/react'
import Image from 'next/image'
import GameCard from '@/components/GameCard'

const AllProductsPage = async() => {
    const res = await fetch("https://www.freetogame.com/api/games",{
      next: {
        revalidate: 3600,
      },
    })
    const games = await res.json()
     console.log(games)
  return (
    <div>
        <h1 className='text-3xl font-bold mb-4'>All Games</h1>
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                       {games.map(game =><GameCard className="border rounded-xl cursor-pointer" key={game.id} game={game}/>)} 

        </div>
    </div>
  )
}

export default AllProductsPage