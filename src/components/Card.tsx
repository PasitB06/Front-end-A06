import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card ({ venueName, imgSrc, onCompare, onRating }:{ venueName:string, imgSrc:string, onCompare:Function, onRating:Function}) {

    return (
        <InteractiveCard contentName={venueName}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                    objectFit='cover' />
            </div>
            <div className="w-full h-[15%] p-[10px]">{venueName}</div>
            <Rating 
            data-testid={`${venueName} Rating`} 
            id={`${venueName} Rating`} 
            name={`${venueName} Rating`}
            className='mx-2 px-1 py-1' 
            defaultValue={0} 
            precision={1} 

            onChange={(e, newValue) => {onRating(venueName, newValue)}}
            onClick={(e) => {e.stopPropagation(); onCompare(venueName)}}
            />
        </InteractiveCard>
    )
}