import { featuredCardData } from "@/lib/data";
import FeaturedItemCard from "./FeaturedItemCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const BestFeaaturedItmes = () => {
  return (
    <div className="bg-hero bg-cover bg-center flex items-center flex-col">
      <div className="padding-x py-[5rem]">
        <div className="flex flex-col items-center 640p:items-start mb-8">
          <h1 className="!text-background text-lg 640p:text-2xl bg-white/15 backdrop-blur-sm px-4 py-1 rounded-md font-normal tracking-wide text-opacity-10 capitalize">
            our best featured item
          </h1>
          <h1 className="text-[30px] 640p:text-[44px] text-background text-center 640p:text-left font-semibold">
            Our Featured Items
          </h1>
        </div>
        <Carousel className="w-full flex justify-center">
          <CarouselContent>
            {featuredCardData.map((item, index) => (
              <CarouselItem key={index} className="w-full">
                <FeaturedItemCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden 640p:flex absolute -top-16 right-10">
            <CarouselPrevious className="text-primary-foreground bg-primary absolute -left-20" />
            <CarouselNext className="text-primary-foreground bg-primary absolute " />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BestFeaaturedItmes;
