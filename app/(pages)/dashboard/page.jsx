'use client'
import { useSession } from "next-auth/react";
import Sidebar from "./_components/Sidebar";
const Dashboard = () => {
  
  const { data: session } = useSession();
  //console.log(session)


  return (
    <>
    <div className="text-2xl grid-cols-2">Your are logged in as: { session?.user?.name ?? 'Name not available'}</div>
      <Sidebar />
    </>
  )
};
export default Dashboard;
