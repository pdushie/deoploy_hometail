'use client'
import { useSession } from "next-auth/react";
import Sidebar from "./_components/Sidebar";
const Dashboard = () => {
  
  const { data: session } = useSession();
  //console.log(session)


  return (
    <>
    <Sidebar />
    <div className="text-2xl flex justify-center items-center bg-gray-100">Your are logged in as: { session?.user?.name ?? 'Name not available'}</div>
      
      <div className="min-h-[100vh] bg-gray-100"></div>
    </>
  )
};
export default Dashboard;
