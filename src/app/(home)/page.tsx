import Image from 'next/image'
import styles from './page.module.css'
import Tweet from './Tweet'

export default function Home() {
  return (
    <div className='main-h-screen flex justify-center px-4 py-8'>
      <div className='w-full max-w-xl'>
        <h1 className='text-3xl font-bold mb-6'>Home</h1>
        <Tweet
          tweet={{
            text: 'Hello, world!',
            author: 'John Doe'
          }}
        />
      </div>
    </div>
  );
}
