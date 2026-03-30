'use client'

import { useSearchParams } from "next/navigation";

const Explore = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag')

  return <h1 className='text-3xl mb-3'>Tag by #{tag ? tag : 'need to add tag'}</h1>
}

export default Explore