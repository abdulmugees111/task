'use client'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideMenu from '../components/SideBar';
import { ModalProvider } from "react-modal-hook";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalProvider>
       <div className="flex flex-col h-screen h-100">
        <div >
        <Header/>
        </div>
        <div className='h-100'>
        <SideMenu />
        </div>
      <div className="flex-1">
      <Footer />
      </div>
    </div>
    </ModalProvider>
  )
}
