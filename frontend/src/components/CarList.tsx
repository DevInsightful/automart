import CarCard from './CarCard'; // Assuming CarCard is in the same directory
import { headerImg,gridCarImg } from '../assets';
const CarList = () => {
  const cars = [
    {
      imageSrc: 'https://example.com/car1.jpg',
      title: 'Aura Horizon GT',
      price: '$37,800.00 USD',
      position: 'right',
    },
    {
      imageSrc: 'https://example.com/car2.jpg',
      title: 'Ampera Evolut',
      price: '$37,800.00 USD',
      position: 'left',
    },
    {
        imageSrc: 'https://example.com/car1.jpg',
        title: 'Aura Horizon GT',
        price: '$37,800.00 USD',
        position: 'right'
      },
      {
        imageSrc: 'https://example.com/car2.jpg',
        title: 'Ampera Evolut',
        price: '$37,800.00 USD',
        position: 'left'
      },
  ];

  return (
    <div className='flex justify-center gap-5 my-5'>
      <div>
                <CarCard imageSrc={gridCarImg} title={cars[0].title} price={cars[0].price} position='flex-col h-full bg-[#163300]'
                imgStyles='w-[17rem]' buttonStyles='bg-[#c2f22d] w-full rounded text-black font-bold' />
      </div>
      <div>

                <CarCard imageSrc={headerImg} title={cars[1].title} price={cars[1].price}/>
                <CarCard imageSrc={headerImg} title={cars[2].title} price={cars[2].price} position='flex-row-reverse' />
                <CarCard imageSrc={headerImg} title={cars[3].title} price={cars[3].price}/>
      </div>



      {/* {cars.map((car, index) => (
        <CarCard key={index} {...car} />
      ))} */}
    </div>
  );
};

export default CarList;