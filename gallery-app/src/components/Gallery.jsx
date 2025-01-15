// src/components/Gallery.jsx
import React from 'react';
import { MdPeople } from 'react-icons/md';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import './Gallery.css';



const Gallery = () => {
  const images = [
    {
      src: image1,
      transport: 'на автобусе',
      people: true,
      count: 10,
      title: 'Тбилиси, апрель — 83.000',
    },
    {
      src: image2,
      transport: 'на самолете',
      people: false,
      title: 'Стамбул, март — 110.000',
    },
    {
      src: image3,
      transport: 'на самолете',
      people: true,
      count: 15,
      title: 'Дубай, июнь — 220.000',
    },
    {
      src: image4,
      transport: 'самолет + паром',
      people: true,
      count: 11,
      title: 'Пхукет, сентябрь — 135.000',
    },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Галерея путешествий</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" style={{ backgroundImage: `url(${image.src})` }}>
            <div className="image-details">
              <div className="transport">{image.transport}</div>
              {image.people && (
                <div className="count">
                  {image.count} <MdPeople />
                </div>
              )}
              <div className="gallery-item-title">{image.title}</div>
            </div>
          </div>
        ))}
      </div>
  
    </div>

  );
};

export default Gallery;