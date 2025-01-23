import React, { useState, useMemo } from "react";
import SearchInput from "./SearchInput";
import FilterCategory from "./FilterCategory";
import Pagination from "./Pagination";
import formatDateToIndonesia from "@/utils/formatDateToIndonesia";
import { Button } from "@headlessui/react";

export default function Table({
  data,
  field,
  attributes,
  filterCategory,
  TopTableLeft,
  TopTableRight,
  handeActionSelectedRow,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch = Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.bank);
      return matchesSearch && matchesCategory;
    });
  }, [data, searchTerm, selectedCategories]);

  const handleFilterChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
    } else {
      const allIds = filteredData.map((item) => item.id);
      setSelectedRows(allIds);
    }
  };

  return (
    <div className="p-2 bg-white dark:bg-slate-800 transition-all shadow-md sm:rounded-lg">
      <header className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="flex justify-center items-center gap-4">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value || "")}
          />
          <button
            onClick={() => {
              if (selectedRows.length === 0) {
                alert("Tidak ada data yang dipilih");
                return;
              }
              handeActionSelectedRow(selectedRows);
            }}
            className="inline-block bg-red-600 text-white p-2 rounded-lg">
            Hapus
          </button>
          {TopTableLeft}
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            {filterCategory && (
              <FilterCategory
                category={filterCategory}
                onFilterChange={handleFilterChange}
              />
            )}
            {TopTableRight}
          </div>
        </div>
      </header>
      <main className="overflow-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-400">
        {filteredData.length === 0 ? (
          <div className="text-center bg-red-400 dark:bg-red-600 h-[3rem] sm:h-[4rem] my-4 mx-2 sm:mx-8 flex justify-center items-center font-bold text-lg rounded-lg ring-2 ring-red-500 dark:ring-red-400 text-slate-50 dark:text-slate-100">
            Tidak ada data !
          </div>
        ) : (
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            {/* TABLE HEADER */}
            <thead className="text-xs text-slate-700 uppercase bg-slate-200 dark:bg-slate-700 dark:text-slate-400 transition-all">
              <tr>
                <th className="border-2 border-slate-300 dark:border-slate-800 px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === filteredData.length}
                    onChange={handleSelectAll}
                  />
                </th>
                {attributes.map((field, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="border-2 border-slate-300 dark:border-slate-800 px-4 py-3 whitespace-nowrap">
                    {field.header}
                  </th>
                ))}
              </tr>
            </thead>
            {/* TABLE DATA */}
            <tbody className="bg-white divide-y divide-slate-200 dark:bg-slate-800 dark:divide-slate-700 text-slate-800 dark:text-slate-100 transition-all">
              {filteredData.map((field, index) => (
                <tr
                  key={index}
                  className="relative border-b-2 text-slate-800 dark:text-slate-200 dark:border-slate-700">
                  <td className="p-[1rem] whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(field.id)}
                      onChange={() => handleSelectRow(field.id)}
                    />
                  </td>
                  {attributes.map((attribute, attrIndex) => (
                    <td key={attrIndex} className="p-[1rem] whitespace-nowrap">
                      {(() => {
                        switch (attribute.type) {
                          case "date":
                            return formatDateToIndonesia(
                              field[attribute.data] || "-"
                            );
                          case "file":
                            return field[attribute.data]
                              ? "Lihat Foto di Detail"
                              : "-";
                          default:
                            return (
                              <div className="max-w-[10rem] overflow-hidden overflow-ellipsis">
                                {field[attribute.data] ||
                                  (attribute.cell && attribute.cell(field)) ||
                                  "-"}
                              </div>
                            );
                        }
                      })()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <footer
        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation">
        <span className="flex gap-2 text-sm font-normal text-slate-500 dark:text-slate-400">
          Showing
          <span className="font-semibold text-slate-900 dark:text-white">
            {null === field.from || null === field.to
              ? "0"
              : field.from + `-` + field.to}
          </span>
          of
          <span className="font-semibold text-slate-900 dark:text-white">
            {field.total}
          </span>
        </span>
        {/* PAGINATION */}
        <Pagination data={field} />
      </footer>
    </div>
  );
}
