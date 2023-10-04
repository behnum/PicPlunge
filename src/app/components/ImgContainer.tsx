import type { Photo } from '@/models/Images'
import Image from 'next/image'

interface Props {
  photo: Photo
}

export default function ImgContainer({ photo }: Props) {
  return (
    <div className='relative h-64 bg-gray-800 rounded-xl'>
      <div key={photo.id} className='h-64 bg-gray-800 rounded-xl'>
        <Image
          src={photo.src.large}
          alt={photo.alt}
          layout='fill'
          objectFit='cover'
          className='rounded-xl'
        />
      </div>
    </div>
  )
}
