import Story from './Story';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

function randomInteger() {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }
  

const Data =
  [
    {
      id: "1",
      username: 'priyalgor2',
      avatar: 'https://www.infoknocks.com/wp-content/uploads/2021/04/Priyal-Gor.jpg',
    },
    {
        id: "2",
        username:  Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "3",
        username:  Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "4",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "5",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "7",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "8",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "9",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "10",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "11",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "12",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "13",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "14",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "15",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "16",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "17",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "18",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "19",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "20",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "21",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "22",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "23",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    },
    {
        id: "24",
        username: Math.random().toString(36).substr(2, 9),
        avatar: 'https://i.pravatar.cc/150?img='+randomInteger(),
    }
    
];

const Stories = () =>  {
    const { data: session } = useSession();
  return (
    <div className="flex space-x-3 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thumb-black scrollbar-hide"> 
      <Story img={session.user.image} username={session.user.username}/>
      {Data.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
}

export default Stories;
