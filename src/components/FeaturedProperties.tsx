import { featuredCardData, FeaturedProductionData } from "@/lib/data";
import Heading from "./shared/Heading";
import FeatureBtn from "./FeatureBtn";
import { Button } from "./ui/button";
import { RiArrowRightUpFill } from "react-icons/ri";
import FeaturedCart from "./FeaturedCard";

const FreturedProduction = () => {
  return (
    <div className="bg-secondary-foreground flex justify-center">
      <div className="flex h-fit pb-[5rem] flex-col items-center padding-x  640p:[4rem] mt-[4rem]">
        <div className="mt-20 flex flex-col 640p:flex-row  justify-between w-full  640p:items-start items-center mb-5 text-center">
          <div className="flex items-center 640p:items-start flex-col mb-3 640p:mb-0">
            <Heading>Featured Properties</Heading>
            <h1 className="text-[35px] 1080p:text-[44px] text-primary-foreground font-semibold">
              Our Featured Properties
            </h1>
          </div>

          <Button className="w-fit py-6 px-5 text-primary-foreground tracking-wide text-base hover:bg-primary-foreground hover:text-background">
            See All Properties <RiArrowRightUpFill size={20} />
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-5 640p:grid-cols-6">
          {FeaturedProductionData.map((item, i) => (
            <FeatureBtn key={i} label={item.label}>
              {item.icon}
              {item.name}
            </FeatureBtn>
          ))}
        </div>

        <div className="flex flex-col w-full justify-between mt-16 gap-6">
          {featuredCardData.map((item, i) => (
            <FeaturedCart key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreturedProduction;
