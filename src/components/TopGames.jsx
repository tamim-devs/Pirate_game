import GameCard from '@/components/GameCard'
import React from 'react'

const TopGames = async() => {
const res = await fetch('https://www.freetogame.com/api/games', {
  cache: "no-store"
});
    const games = await res.json()
    const topGames = games.slice(0, 8)
  
    console.log(topGames)
  return (
    <div>
        <h1 className="text-3xl font-bold mb-4">Top Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
           {topGames.map(game => <GameCard key={game.id} game={game}/>)} 
            
            </div>
    </div>
  )
}

export default TopGames