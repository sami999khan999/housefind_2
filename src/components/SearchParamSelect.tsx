import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Define the type for the `item` prop
interface SearchParamItem {
  name: string;
  value: { name: string }[];
}

// Define props for the component
interface SearchParamSelectProps {
  item: SearchParamItem;
  index: number;
}

const SearchParamSelect: React.FC<SearchParamSelectProps> = ({
  item,
  index,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  return (
    <div key={index} className="w-full">
      <p className="text-primary-foreground text-center 640p:text-left text-lg font-semibold capitalize mb-1">
        {item.name}
      </p>
      <div className="flex flex-col 640p:flex-row 640p:gap-8 items-center justify-center">
        <Select
          value={selectedFilter}
          onValueChange={(value) => setSelectedFilter(value)}
        >
          <SelectTrigger className="bg-secondary-foreground text-primary-foreground text-lg w-full outline-none border-none 640p:py-6 px-5">
            <SelectValue
              placeholder={`All ${item.name}`}
              className="text-primary-foreground"
            />
          </SelectTrigger>
          <SelectContent className="bg-background py-2">
            {item.value.map((filter, idx) => (
              <SelectItem
                key={idx}
                value={filter.name}
                className="text-lg font-medium"
              >
                {filter.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="border-t-2 640p:border-l-2 border-secondary-foreground 640p:h-[40px]"></div>
      </div>
    </div>
  );
};

export default SearchParamSelect;
