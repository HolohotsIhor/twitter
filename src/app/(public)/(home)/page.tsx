import Image from 'next/image'
import styles from './page.module.css'
import Tweet from './Tweet'
import { TWEETS } from '@/shared/data/tweets.data';

export default function Home() {
  return (
    <div className='main-h-screen flex justify-center px-4 py-8'>
      <div className='w-full max-w-xl'>
        <h1 className='text-3xl font-bold mb-6'>Home</h1>
        {TWEETS.map((tweet, i) => (
            <div key={tweet.id} className={i !== TWEETS.length - 1 ? 'mb-4' : ''}>
              <Tweet tweet={tweet} />
            </div>
          ))}
      </div>
    </div>
  )
}
