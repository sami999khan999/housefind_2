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
    location: "Los Angeles City, CA, USA",
    price: 49999,
    facilities: { bed: 12, bath: 16, area: 800 },
  },
  {
    title: "Oceanfront Penthouse",
    location: "Miami Beach, FL, USA",
    price: 70000,
    facilities: { bed: 8, bath: 10, area: 1200 },
  },
  {
    title: "Mountain View Mansion",
    location: "Aspen, CO, USA",
    price: 950000,
    facilities: { bed: 10, bath: 12, area: 1500 },
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
    name: "Emily Johnson",
    feedback:
      "This platform has completely transformed the way I manage my real estate listings. The user interface is intuitive, and the support team is always ready to help.",
  },
  {
    name: "Michael Williams",
    feedback:
      "I have used several real estate services before, but none compare to this. The seamless experience and detailed property insights make a huge difference.",
  },
  {
    name: "Sophia Martinez",
    feedback:
      "Absolutely love the design and ease of use! I was able to find my dream home within days, thanks to the smart recommendations.",
  },
  {
    name: "Daniel Lee",
    feedback:
      "Highly recommended! The filtering options are top-notch, and I appreciate how quickly I could connect with sellers.",
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
