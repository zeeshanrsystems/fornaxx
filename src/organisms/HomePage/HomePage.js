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
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
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
