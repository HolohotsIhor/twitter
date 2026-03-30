type Params = {tag?: string};

export default async function Page({
    searchParams
}: {
    searchParams: Promise<Params>
}) {
  const { tag } = await searchParams
  
  return <h1 className='text-3xl mb-3'>Tag by #{tag ? tag : 'need to add tag'}</h1>
}