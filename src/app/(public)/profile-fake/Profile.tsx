'use client';

import PAGES from "@/config/pages.config";
import { useRouter } from "next/navigation";

type ProfileProps = {};

const Profile = (props: ProfileProps) => {
  const router = useRouter();
  
  return (
    <>
        <h1 className='text-3xl mb-3'>Some title</h1>
        <button
            onClick={() => router.push(PAGES.HOME)}
        >Go to home</button>
    </>
  )
}

export default Profile