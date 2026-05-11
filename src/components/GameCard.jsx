import { Button, Card, Chip, Separator } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoDownload } from 'react-icons/io5'

const GameCard = ({game}) => {
    console.log(game,"game")
const image =
    typeof game?.thumbnail === "string" && game.thumbnail.startsWith("http")
      ? game.thumbnail
      : "/placeholder.jpg";
        return (
    <div>
        <Card>
        <div className='border rounded-xl'>
          <div className='aspect-square relative w-full'>
              <Image
           
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={image}
            alt={game?.title}
            className='object-cover rounded-xl'
            />
            <Chip size='sm' className='absolute top-2 right-2'>{game?.genre}</Chip>
          </div>
        </div>
        <div>
            <h2 className='text-xl font-bold'>{game?.title}</h2>
            <p className='text-gray-600 text-sm mb-4'>{game?.platform}</p>
        </div>
       <div className='flex gap-4 mt-2'>
         
       <div className='flex gap-4 mt-2'>
        
        <Link href={`/products/${game.id}`}>
        <Button size='sm' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'>
            View Details
        </Button>
        </Link>
       </div>
        
       
       </div>
    </Card>
    </div>
  )
}

export default GameCard