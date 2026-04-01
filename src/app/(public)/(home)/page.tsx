import Tweet from './Tweet';
import { TWEETS } from '@/shared/data/tweets.data';
import TweetForm from './TweetForm';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold mb-6'>Home</h1>
      <TweetForm />
      {TWEETS.map((tweet, i) => (
        <div key={tweet.id} className={i !== TWEETS.length - 1 ? 'mb-4' : ''}>
          <Tweet tweet={tweet} />
        </div>
      ))}
    </>
  );
}
