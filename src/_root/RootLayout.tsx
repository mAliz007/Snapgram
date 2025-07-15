import Topbar from '@/components/shared/Topbar';
import '../globals.css';
import Leftsidebar from '@/components/shared/Leftsidebar';
import { Outlet } from 'react-router-dom';
import Bottombar from '@/components/shared/Bottombar';

export const RootLayout = () => {
  return (
    <div className='w-full md:flex'>
      <Topbar />
      <Leftsidebar/>

      <section className='flex flex-1 h-full'>
        <Outlet/>
        </section>

        <Bottombar/>

       
    </div>
  )
}
