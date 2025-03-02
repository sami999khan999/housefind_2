import { BsBuildings, BsHousesFill } from "react-icons/bs";
import { FaHouseChimney } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { PiBuildingApartment, PiWarehouseThin } from "react-icons/pi";

export const countries = [
  { name: "US", flag: "/countries/us.png" },
  { name: "CA", flag: "/countries/ca.png" },
  { name: "BD", flag: "/countries/bd.png" },
  { name: "IN", flag: "/countries/in.png" },
];

export const navDropdownData = [
  {
    name: "Home",
    item: [
      { name: "Item 1", link: "/home/item1" },
      { name: "Item 2", link: "/home/item2" },
      { name: "Item 3", link: "/home/item3" },
    ],
  },
  {
    name: "Pages",
    item: [
      { name: "Web Development", link: "/services/web-development" },
      { name: "App Development", link: "/services/app-development" },
      { name: "SEO Services", link: "/services/seo" },
    ],
  },
  {
    name: "Listing",
    item: [
      { name: "Our Story", link: "/about-us/our-story" },
      { name: "Our Team", link: "/about-us/our-team" },
      { name: "Careers", link: "/about-us/careers" },
    ],
  },
  {
    name: "Properties",
    item: [
      { name: "Support", link: "/contact/support" },
      { name: "Sales", link: "/contact/sales" },
      { name: "General Inquiries", link: "/contact/general" },
    ],
  },
  {
    name: "Dashboard",
    item: [
      { name: "Support", link: "/contact/support" },
      { name: "Sales", link: "/contact/sales" },
      { name: "General Inquiries", link: "/contact/general" },
    ],
  },
  {
    name: "Blogs",
    item: [
      { name: "Support", link: "/contact/support" },
      { name: "Sales", link: "/contact/sales" },
      { name: "General Inquiries", link: "/contact/general" },
    ],
  },
];

export const searchParamaData = {
  forSale: [
    {
      name: "status",
      value: [{ name: "Available" }, { name: "Sold Out" }, { name: "Pending" }],
    },
    {
      name: "Labels",
      value: [
        { name: "Hot Deal" },
        { name: "New Listing" },
        { name: "Discounted" },
      ],
    },
    {
      name: "Type",
      value: [{ name: "Apartment" }, { name: "Condo" }, { name: "Townhouse" }],
    },
  ],
  forRent: [
    {
      name: "status",
      value: [
        { name: "Available" },
        { name: "Occupied" },
        { name: "Reserved" },
      ],
    },
    {
      name: "Labels",
      value: [
        { name: "Short Term" },
        { name: "Long Term" },
        { name: "Furnished" },
      ],
    },
    {
      name: "Type",
      value: [{ name: "Villa" }, { name: "Studio" }, { name: "Penthouse" }],
    },
  ],
};

export const aboutDetails = {
  homeSold: "0K",
  happyClients: "0K",
  satisfactionRate: "0K",
};

export const FeaturedProductionData = [
  {
    name: "For Sale",
    icon: <FaHouseChimney />,
    label: "forSale",
  },
  {
    name: "Villas",
    icon: <PiWarehouseThin />,
    label: "villas",
  },
  {
    name: "Apartments",
    icon: <PiBuildingApartment />,
    label: "apartments",
  },
  {
    name: "Houses",
    icon: <BsHousesFill />,
    label: "houses",
  },
  {
    name: "Condos",
    icon: <LuBuilding2 />,
    label: "condos",
  },
  {
    name: "Retail",
    icon: <BsBuildings />,
    label: "retail",
  },
];

export const featuredCardData = [
  {
    title: "Luxury Suite Villa",
    name: "Jhon Doe",
    location: "Gulshan, Dhaka, Bangladesh",
    price: 49999,
    customerPhoto: "/profile/customer-1.png",
    facilities: { bed: 12, bath: 16, area: 800 },
    coordinates: { lat: 23.7925, lng: 90.4078 }, // Gulshan, Dhaka
  },
  {
    title: "Oceanfront Penthouse",
    name: "Jhon Doe",
    location: "Cox’s Bazar, Bangladesh",
    price: 70000,
    customerPhoto: "/profile/customer-2.png",
    facilities: { bed: 8, bath: 10, area: 1200 },
    coordinates: { lat: 21.4272, lng: 92.0058 }, // Cox’s Bazar Beach
  },
  {
    title: "Mountain View Mansion",
    name: "Jhon Doe",
    location: "Sajek Valley, Rangamati, Bangladesh",
    price: 950000,
    customerPhoto: "/profile/customer-3.png",
    facilities: { bed: 10, bath: 12, area: 1500 },
    coordinates: { lat: 23.381, lng: 92.2938 }, // Sajek Valley, Rangamati
  },
];

export const bestFeaturedItemData = [
  {
    title: "Moon Light Villa",
    location: "60002 Just Mead East Alfonso",
    price: 1900000,
    priceAfterDiscount: 1800000,
  },
  {
    title: "Sunset Bay Mansion",
    location: "405 Ocean Drive, Miami Beach, FL",
    price: 2500000,
    priceAfterDiscount: 2350000,
  },
  {
    title: "Royal Garden Estate",
    location: "78 King’s Avenue, Beverly Hills, CA",
    price: 3200000,
    priceAfterDiscount: 3100000,
  },
];

export const propertyLocationData = [
  { location: "New York", properties: 95 },
  { location: "Los Angeles", properties: 88 },
  { location: "Chicago", properties: 76 },
  { location: "Houston", properties: 92 },
  { location: "Miami", properties: 67 },
  { location: "San Francisco", properties: 59 },
  { location: "Dallas", properties: 83 },
  { location: "Seattle", properties: 71 },
  { location: "Boston", properties: 78 },
  { location: "Las Vegas", properties: 62 },
  { location: "Denver", properties: 54 },
];

export const feedbackData = [
  {
    name: "Sheldon Jackson",
    position: "Shop Store Owner",
    stars: 4,
    photo: "/profile/customer-1.png",
    feedback:
      "From start to finish, the team was exceptional. They listened to our needs, provided expert guidance, and helped us find exactly what we were looking for. I got the best deal possible! Highly recommended!",
  },
  {
    name: "Emily Carter",
    position: "Real Estate Agent",
    stars: 5,
    photo: "/profile/customer-2.png",
    feedback:
      "Absolutely great service! The team was knowledgeable, responsive, and made the entire process seamless. There was a slight delay in communication, but overall, I’m thrilled with the results!",
  },
  {
    name: "Michael Roberts",
    position: "Software Engineer",
    stars: 3,
    photo: "/profile/customer-3.png",
    feedback:
      "A top-notch experience! The support was outstanding, and they made sure every detail was perfect. The team was patient, professional, and truly cared about delivering the best outcome. I couldn’t be happier!",
  },
  {
    name: "Sophia Martinez",
    position: "Interior Designer",
    stars: 4,
    photo: "/profile/customer-1.png",
    feedback:
      "Fantastic experience! They understood my vision, provided valuable insights, and made the process stress-free. There was a small hiccup with timing, but everything was resolved quickly. Highly satisfied!",
  },
];

export const expertData = [
  {
    name: "Henry Nicolas",
    position: "CEO",
  },
  {
    name: "Sophia Martinez",
    position: "CMO",
  },
  {
    name: "James Anderson",
    position: "Head of Product",
  },
  {
    name: "Olivia Thompson",
    position: "Lead Engineer",
  },
];

export const latestBlogPostData = [
  {
    date: "2024-12-08",
    title: "5 Tips to Find Your Dream Home Without Stress: Know Your Budget",
  },
  {
    date: "2024-11-20",
    title: "Understanding Mortgage Rates: What Every Homebuyer Should Know",
  },
  {
    date: "2024-10-15",
    title: "How to Choose the Perfect Neighborhood for Your Family",
  },
];
