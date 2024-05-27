import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mt-8 mb-4 flex justify-center mx-4">
        <Image
          src="/Homepage_image_1.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 mx-4">
        <p className="text-lg md:text-2xl text-black dark:text-lime-600 font-serif mb-4 ">Welcome to Alex's Kitchen!</p> 
        <div className="max-w-2xl mx-4">
        <p className="text-md md:text-lg font-normal dark:text-yellow-100 dark:font-thin font-sans text-center tracking-wide leading-7">Here, we combine passion and creativity to bring you an unforgettable dining experience. Our menu features a diverse selection of dishes crafted from the freshest ingredients, ensuring every bite is full of flavor. Whether you're craving a hearty meal or a light snack, we have something to satisfy every palate. Join us and discover why Alex's Kitchen is a favorite among food lovers. Come for the food, stay for the warmth and hospitality!</p>
        </div>
      
      </div>
    </>
  );
}
