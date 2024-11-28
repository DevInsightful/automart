import React from "react";

interface CarCardProps {
  imageSrc?: string;
  imgStyles?:string;
  title?: string;
  price?: string;
  position?:string;
  buttonStyles?:string;
}

const CarCard: React.FC<CarCardProps> = ({
  imageSrc,
  imgStyles='w-48 h-48 rounded-lg',
  title,
  price,
  position,
  buttonStyles='text-white border font-bold py-1 my-1 px-4 rounded'
}) => {
  return (
    <div className={`flex ${position} items-center justify-center text-white gap-4`}>
      <img src={imageSrc} alt={title} className={`${imgStyles}`} />
      <div className="text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{price}</p>
        <button className={`${buttonStyles}`}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CarCard;
