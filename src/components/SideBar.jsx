import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const categories = [
    "Electronics & Gadgets",
    "Fashion & Apparel",
    "Beauty & Personal Care",
    "Home & Kitchen",
    "Health & Fitness"
  ];

  const goToCategory = (category) => {
    // encode URI for safe URLs
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <ul className="flex flex-row md:flex-col flex-wrap gap-3 sm:gap-4 md:gap-8
        p-2 sm:p-3 md:p-10
        text-xs sm:text-sm md:text-lg
        font-medium text-gray-800 tracking-wide
        md:min-w-[200px]
        overflow-x-auto"
    >
      {categories.map((category) => (
        <li
          key={category}
          className="break-words cursor-pointer hover:text-red-600"
          onClick={() => goToCategory(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
