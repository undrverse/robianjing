import ArrowDownIcon from "@/icons/ArrowDown";
import FilterIcon from "@/icons/Filter";
import React, { useState } from "react";

export default function FilterComponent({ onFilterChange, category, status }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleCategoryChange = (item) => {
    const updatedCategories = selectedCategories.includes(item)
      ? selectedCategories.filter((cat) => cat !== item)
      : [...selectedCategories, item];
    setSelectedCategories(updatedCategories);
    onFilterChange({ categories: updatedCategories, status: selectedStatus });
  };

  const handleStatusChange = (item) => {
    const updatedStatus = selectedStatus.includes(item)
      ? selectedStatus.filter((stat) => stat !== item)
      : [...selectedStatus, item];
    setSelectedStatus(updatedStatus);
    onFilterChange({ categories: selectedCategories, status: updatedStatus });
  };

  return (
    <div className="flex gap-2">
      {/* Filter Kategori */}
      <div className="relative z-10">
        <button
          onClick={() => {
            setIsCategoryOpen(!isCategoryOpen);
            setIsStatusOpen(false);
          }}
          className="w-full md:w-auto flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium text-slate-900 focus:outline-none bg-slate-100 rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 transition-all"
          type="button"
        >
          <FilterIcon />
          Filter Kategori
          <ArrowDownIcon />
        </button>
        <div
          className={`absolute ${
            !isCategoryOpen && "hidden"
          } sm:right-6 sm:top-8 ring-2 w-48 p-3 bg-white rounded-lg shadow dark:bg-slate-700`}
        >
          <h6 className="mb-3 text-sm font-medium text-slate-900 dark:text-white">
            Pilih Kategori
          </h6>
          <ul className="space-y-2 text-sm grid grid-cols-2">
            {category.map((item, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  value={item}
                  checked={selectedCategories.includes(item)}
                  onChange={() => handleCategoryChange(item)}
                  className="w-4 h-4 bg-slate-100 border-slate-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500"
                />
                <label
                  htmlFor={`category-${index}`}
                  className="ml-2 text-sm font-medium text-slate-900 dark:text-slate-100"
                >
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filter Status */}
      <div className="relative z-10">
        <button
          onClick={() => {
            setIsStatusOpen(!isStatusOpen);
            setIsCategoryOpen(false);
          }}
          className="w-full md:w-auto flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium text-slate-900 focus:outline-none bg-slate-100 rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 transition-all"
          type="button"
        >
          <FilterIcon />
          Filter Status
          <ArrowDownIcon />
        </button>
        <div
          className={`absolute ${
            !isStatusOpen && "hidden"
          } sm:right-6 sm:top-8 ring-2 w-48 p-3 bg-white rounded-lg shadow dark:bg-slate-700`}
        >
          <h6 className="mb-3 text-sm font-medium text-slate-900 dark:text-white">
            Pilih Status
          </h6>
          <ul className="space-y-2 text-sm">
            {status.map((item, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`status-${index}`}
                  value={item}
                  checked={selectedStatus.includes(item)}
                  onChange={() => handleStatusChange(item)}
                  className="w-4 h-4 bg-slate-100 border-slate-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500"
                />
                <label
                  htmlFor={`status-${index}`}
                  className="ml-2 text-sm font-medium text-slate-900 dark:text-slate-100"
                >
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
