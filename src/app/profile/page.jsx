'use client'
import UpdateUserModal from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react'

const ProfilePage = () => {
    const userData = authClient.useSession();
      const user = userData.data?.user;
      if(!user){
        redirect("/signin");
      }
      console.log(user,"user data in profile")
  return (
    <div>
        <Card className='border mx-auto w-125 py-10 mt-5 flex flex-col items-center gap-4'>
            <h1 className='text-2xl font-bold'>Profile</h1>
              <Avatar>
                    <Avatar.Image alt="John Doe" src={user?.image}
                    referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                    <h2 className='text-xl font-semibold'>{user?.name}</h2>
                    <p className='text-gray-500'>{user?.email}</p>
                    <UpdateUserModal/>
        </Card>
    </div>
  )
}

export default ProfilePage