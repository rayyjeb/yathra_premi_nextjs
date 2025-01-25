import PerksWidget from "@/components/component/perksWidget";
import {MarqueeDemo}  from "@/components/component/testimonials";
import { HeroVideoDialogDemo } from "@/components/component/videoUi";
import { CardWithForm } from "@/components/component/bookingCard";
import { AccordionDemo } from "@/components/component/FAQ";
import { Carousel } from "@/components/ui/carousel";
const HotelDesc = () => {
  const slides = [
    {
      title: "Luxury Room",
      button: "Book Now",
      src: "https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg",
      width: 600,  // Specify the image width
      height: 400,  // Specify the image height
    },
    {
      title: "Ocean View",
      button: "Explore Now",
      src: "https://hoteldel.com/wp-content/uploads/2022/11/the-views-2-queen-oceanfront-Q2TOQ2TOCQ2TOV.jpg",
      width: 600,  // Specify the image width
      height: 400,  // Specify the image height
    },
    {
      title: "Private Villa",
      button: "View Details",
      src: "https://hoteldel.com/wp-content/uploads/2021/03/the-views-2queen-1600x1000-1.jpg",
      width: 600,  // Specify the image width
      height: 400,  // Specify the image height
    },
  ];
  return (
    <div className="px-5 lg:px-32 sm:px-20  mt-20 font-urbanist overflow-hidden">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-center flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold">Blue Origin Farms</h1>
          <h1 className="text-sm  text-gray-500 ">Galle, Sri Lanka</h1>
        </div>
        {/* <HotelGallery /> */}
        <div className="mb-20 ">

        <Carousel slides={slides}/>
        </div>
      </div>
      <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="">
          <div className="my-4 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">About the place</h2>
            <p className="text-base text-gray-500 leading-6">
              The Hilton Hotels & Resorts brand is synonymous with luxury,
              comfort, and impeccable service, offering a world-class
              hospitality experience. With a global presence spanning more than
              a century, Hilton has become a trusted name for travelers seeking
              exceptional accommodations, fine dining, and modern amenities.
            </p>
          </div>
          <PerksWidget />
          </div>
        <div className="flex justify-center">
          {/* add card */}
          <CardWithForm/>
        </div>
      </div>
          <div className="pt-20 pb-10 flex-col flex gap-28">
            <HeroVideoDialogDemo />
            <MarqueeDemo/>
            <AccordionDemo/>
            {/* <TextRevealDemo/> */}
          </div>
    </div>
  );
};

export default HotelDesc;
