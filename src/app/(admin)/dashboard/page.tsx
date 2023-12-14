"use client"
import Header from "@/components/Header";
import getCookies from "@/components/utils/cookies";
import { useEffect } from "react";
const Dashboard = () => {
    useEffect(()=>{cookies()},[])
     const searchData = ()=>{
        console.log("ok")
     }
      const  cookies = async ()=>{
       
         const cookies = await getCookies()
        
      }
    return ( 
    <section className="w-full h-full">
        <Header search={searchData}/>

    </section> );
}
 
export default Dashboard;