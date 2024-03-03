import React, { useState } from "react"
import './Navbar.css'
import { Link } from "react-router-dom"
import image1 from '../../assets/icons8-x-50.png'

const Navbar = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
      
        const toggleModal = () => {
          setIsModalOpen(!isModalOpen);
        };
  return (
    <div className="w-full m-auto ">
        <nav className='xl:fixed  top-0 '>
            <Link to={'/'}>
                <h1 className="h1 xl:absolute absolute  xl:top-[3rem] xl:left-[4rem] ">FORTUNE</h1>
            </Link>
            
            <ul className=' hidden xl:block absolute w-[14rem] top-[8rem] p-[4rem]'>
                <Link to={'/About'}>
                    <li className="pb-[1rem]">About Fortune</li>
                </Link>
                <Link to={'/GetInTouch'}>
                    <li className="pb-[1rem]">Get in Touch</li>
                </Link>
                <Link to={'/Posts'}>
                    <li className="pb-[1rem]">Posts</li>
                </Link>
                <Link to={'/Stories'}>
                    <li className="pb-[1rem]">Stories</li>
                </Link>
                <Link to={'/Travels'}>
                    <li className="pb-[1rem]">Travels</li>
                </Link>

               
            </ul>
        </nav>
        <div className="hamburger xl:hidden" onClick={toggleModal}>
            <div className="hamburger1"></div>
            <div className="hamburger2"></div>
            <div className="hamburger3"></div>

            {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}></div>
      )}

            {isModalOpen && (
                <div className="dark">
                   <div className="fade bg-white w-[20rem] fixed right-[.05rem] h-[110vh] z-20 top-0">
                <img src={image1} alt="" className="absolute left-[15rem]" onClick={toggleModal} />
                <ul className="p-[2rem] absolute top-[7rem] left-[3rem] ">
                    <Link to={'/About'}>
                        <li className="pb-[3rem] text-[24px]">About Fortune</li>
                    </Link>
                    <Link to={'/GetInTouch'}>
                        <li className="pb-[3rem] text-[24px]">Get in Touch</li>
                    </Link>
                    <Link to={'/Posts'}>
                        <li className="pb-[3rem] text-[24px]">Posts</li>
                    </Link>
                    <Link to={'/Stories'}>
                        <li className="pb-[3rem] text-[24px]">Stories</li>
                    </Link>
                    <Link to={'/Travels'}>
                        <li className="pb-[rem] text-[24px]">Travels</li>
                    </Link>
                </ul>
                
            </div> 
                </div>
            
            )}
        </div>
    </div>
  )
}

export default Navbar