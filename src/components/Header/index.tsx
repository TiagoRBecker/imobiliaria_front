"use client"

import { waitForDebugger } from "inspector";
import getCookies from "../utils/cookies"
import { useEffect, useState } from "react";
type User = {
  name:string,
  email:string,
  role:string,
  avatar:string
}
const Header = ({search}:any) => {
   const [ user, setUser] = useState<User>()
  useEffect(()=>{getUserMe()},[])
   const getUserMe = async ()=>{
     const token = await getCookies()
    const get = await fetch("http://localhost:5000/user/me",{
      method:"GET",
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
     const res = await get.json()
     setUser(res)
     return
   }
  return (
    <div className="w-full h-[100px] flex items-center justify-between px-6 bg-white">
      <div className="w-[70%] flex items-center relative">
        <input
          type="search"
          className="w-2/3 h-9 outline-none border-[1px] border-gray-300 rounded-md pl-4 "
          placeholder="Buscar"
        />
        <div className="h-full" onClick={search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-500 cursor-pointer absolute right-72 top-1.5"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        </div>
        
      </div>
      <div className="w-[30%] h-full flex items-center gap-2">
        <img src={user?.avatar} alt={user?.name} className="w-8 h-8 object-cover rounded-full " />
        <p className="text-gray-500">{user?.name}</p>
      </div>
     
    </div>
  );
};

export default Header;
