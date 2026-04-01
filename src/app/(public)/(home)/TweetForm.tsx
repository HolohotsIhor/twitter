'use client';

import { postTweet } from '@/server-actions/post-tweet';
import { useRef } from 'react';

export default function TweetForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={postTweet}
      className='border border-white/10 rounded-xl p-4 mb-8 bg-[#151515] text-white shadow-md flex gap-3'
    >
      <div className='flex flex-col gap-3 w-full'>
        <textarea
          name='content'
          placeholder="What's happening?"
          maxLength={280}
          rows={3}
          required
          className='w-full bg-transparent text-white placeholder-white/40 resize-none outline-none text-lg'
        />
        <div className='flex justify-end pt-3'>
          <button
            type='submit'
            className='bg-white hover:bg-gray-300 transition-colors text-black font-semibold px-5 py-1.5 rounded-full text-sm'
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}