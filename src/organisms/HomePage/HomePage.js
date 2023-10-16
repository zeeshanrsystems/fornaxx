import React, { useState } from 'react';
import CarouselC from '../../molecules/Carousel/CarouselC';
import Footer from '../../molecules/Footer/Footer';
import NavbarC from '../../molecules/Navbar/NavbarC';
import ModalC from '../../molecules/Modal/ModalC';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [
    'https://raw.githubusercontent.com/zeeshanrsystems/fornaxx/main/public/Images/banner1.jpg',
    'https://raw.githubusercontent.com/zeeshanrsystems/fornaxx/main/public/Images/banner2.jpg',
    'https://raw.githubusercontent.com/zeeshanrsystems/fornaxx/main/public/Images/banner3.jpg',
  ];

  return (
    <div className="App">
      <NavbarC />
      <ModalC isOpen={isModalOpen} toggle={closeModal} />
      <CarouselC images={images} />
      <Footer />
    </div>
  );
}

export default HomePage;
