import DownloadButton from '@/components/DownloadButton';
import { Button, Chip } from '@heroui/react'
import Image from 'next/image';
import React from 'react'

const GameDetailsPage = async ({params}) => {
    const { id } = await params;
    const res = await fetch(`https://www.freetogame.com/api/games`)
    const games = await res.json()
    const game = games.find(g=> g.id == id)

  return (
    <div>
        <h1 className='text-3xl font-bold mb-4'>Game Details</h1>
        <div className='max-w-7xl mx-auto px-4 py-10'>
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border rounded-3xl p-6 shadow-lg bg-white'>

    {/* Image */}
    <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
      <Image
        src={game.thumbnail}
        alt={game.title}
        fill
        className='object-cover'
      />
    </div>

    {/* Content */}
    <div>

      <Chip
        color='primary'
        variant='flat'
        className='mb-4'
      >
        {game.genre}
      </Chip>

      <h1 className='text-5xl font-extrabold mb-4'>
        {game.title}
      </h1>

      <p className='text-gray-500 leading-8 mb-6'>
        {game.short_description}
      </p>

      <div className='grid grid-cols-2 gap-4 mb-8'>

        <div className='border rounded-2xl p-4'>
          <p className='text-gray-500 text-sm'>Platform</p>
          <h3 className='font-bold'>{game.platform}</h3>
        </div>

        <div className='border rounded-2xl p-4'>
          <p className='text-gray-500 text-sm'>Publisher</p>
          <h3 className='font-bold'>{game.publisher}</h3>
        </div>

        <div className='border rounded-2xl p-4'>
          <p className='text-gray-500 text-sm'>Developer</p>
          <h3 className='font-bold'>{game.developer}</h3>
        </div>

        <div className='border rounded-2xl p-4'>
          <p className='text-gray-500 text-sm'>Release Date</p>
          <h3 className='font-bold'>{game.release_date}</h3>
        </div>

      </div>

      <div className='flex gap-4'>
        <DownloadButton title={game.title}/>

      
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default GameDetailsPage