import type { Metadata } from 'next';

type Params = {username?: string};

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> {
  const { username } = await params;

  return {
    title: '@' + (await params).username,
  };
}

export default async function PageUsername({ params }: { params: Promise<Params> }) {
  const { username } = await params
  
  return <h1 className='text-3xl mb-3'>Username: {username ? username : 'need to add username'}</h1>
}