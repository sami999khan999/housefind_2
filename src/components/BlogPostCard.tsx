import Image from "next/image";
import Link from "next/link";
import { BsCalendar2DateFill, BsPersonFill } from "react-icons/bs";
import { RiArrowRightUpFill } from "react-icons/ri";

type BlogPostType = {
  date: string;
  title: string;
};

const BlogPostCard = (item: BlogPostType) => {
  return (
    <div className="w-full">
      <div className="rounded-t-2xl overflow-hidden relative">
        <Image
          src={"/featured-card-img.png"}
          width={416}
          height={303}
          alt="card-img"
          className="w-full"
        />
        <div className="absolute bottom-4 left-4 flex gap-3 text-[16px] font-medium cursor-pointer">
          <div className="bg-primary rounded-sm text-primary-foreground text-xl w-fit px-4 py-1.5 flex items-center gap-2">
            <BsPersonFill size={20} />
            By Alex Roy
          </div>
        </div>
      </div>
      <div className="px-4 py-6 rounded-b-xl bg-background shadow-md">
        <div className="space-y-3">
          <div className="text-primary-foreground flex gap-3 text-lg items-center ">
            <BsCalendar2DateFill />

            <p>{item.date}</p>
          </div>
          <h2 className="text-primary-foreground text-[24px] font-medium tracking-wide line-clamp-2">
            {item.title}
          </h2>

          <Link
            href={"/"}
            className="flex items-center gap-3 text-xl text-primary-foreground hover:underline duration-150"
          >
            Learn More <RiArrowRightUpFill />
          </Link>
        </div>

        <div className="flex justify-between items-center"></div>
      </div>
    </div>
  );
};

export default BlogPostCard;
