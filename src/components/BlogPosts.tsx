import { latestBlogPostData } from "@/lib/data";
import { RiArrowRightUpFill } from "react-icons/ri";
import BlogPostCard from "./BlogPostCard";
import Heading from "./shared/Heading";
import { Button } from "./ui/button";

const BlogPosts = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex h-fit pb-[5rem] flex-col items-center padding-x  640p:[4rem] mt-[4rem]">
        <div className="-mb-[16rem] 640p:mb-0">
          <div className="mt-20 flex flex-col items-center text-center">
            <Heading>Latest Blog Posts</Heading>
            <h1 className="text-[35px] 1080p:text-[44px] text-primary-foreground font-semibold">
              Our Real Estate Updates
            </h1>
          </div>

          <div className="flex flex-col 640p:flex-row w-full justify-between mt-16 gap-6">
            {latestBlogPostData.map((item, i) => (
              <BlogPostCard key={i} {...item} />
            ))}
          </div>
        </div>
        <div className="bg-[#C4C4C4] 640p:rounded-[3rem] rounded-[2rem] relative 640p:-bottom-[15rem] -bottom-[20rem] flex flex-col 640p:flex-row justify-between 640p:h-[21rem] overflow-hidden w-full 640p:px-12 px-8 py-12">
          <div className=" space-y-5">
            <h2 className="text-background 640p:w-[24rem] text-[27px] 640p:text-[44px] font-semibold text-center 640p:text-left leading-tight">
              Step Into Your Dream Home with HouseBox
            </h2>
            <p className="text-background 640p:w-[32rem] tracking-wide text-center 640p:text-left">
              {`At HouseBox, we believe your next home is more than just a place -
            it's where your future begins you're buy.`}
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 640p:mt-0">
            <Button className="py-6 px-6 text-primary-foreground hover:bg-primary-foreground hover:text-background 640p:mr-[50%]">
              Find Your Dream Home <RiArrowRightUpFill size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
