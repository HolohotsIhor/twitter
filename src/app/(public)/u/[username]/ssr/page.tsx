type Params = {username?: string};

export default async function PageUsername({
    params
}: {
    params: Promise<Params>
}) {
  const { username } = await params
  
  return <h1 className='text-3xl mb-3'>Username: {username ? username : 'need to add username'}</h1>
}