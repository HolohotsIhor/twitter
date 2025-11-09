import type { ITweet } from '@/shared/types/tweet.interface'
import Image from 'next/image'

interface Props {
    tweet: ITweet
}

const Tweet = ({ tweet }: Props) => {
  return (
    <div className='border border-white/10 rounded-xl p-4 bg-black text-white shadow-md'>
        <div className='flex items-center gap-3 mb-2'>
            <Image
                src='/window.svg'
                alt='X Logo'
                width={24}
                height={24}
                className='flex'
            />
            <span>{tweet.author}</span>
        </div>
        <p className='text-white/90'>{tweet.text}</p>
    </div>
  );
};

export default Tweet;