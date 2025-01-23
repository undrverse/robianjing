import React, { useMemo, useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import Table from "@/Components/Table";
import MessageModal from "@/Components/MessageModal"; // Import modal
import DeleteConfirmationModal from "@/Components/DeleteConfirmationModal";
import DotsIcon from "@/icons/Dots";
import CrossIcon from "@/icons/Cross";
import FilterCategory from "@/Components/FilterCategory";

export default function DataRekening({ rekenings, attributes }) {
  const { data, setData } = useForm();
  const message = usePage().props;
  const usertype = usePage().props.auth.user.usertype;
  const [isOpen, setIsOpen] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const combinedAttributes = [
    ...attributes.DataRekening,
    ...attributes.MyBCA,
    ...attributes.Bisnis,
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredData = useMemo(() => {
    return rekenings.data.filter((item) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.status);
      return matchesCategory;
    });
  }, [rekenings.data, selectedCategories]);

  const handleFilterChange = (categories) => {
    setSelectedCategories(categories);
  };

  const cell = [
    "nama",
    "bank",
    "no_rek",
    "user_ib",
    "pin_ib",
    "kode_mb",
    "pin_mb",
    "password_my_bca",
    "pin_transaksi",
    "coorporate_id",
    "coorporate",
    "id_coop",
    "status",
    "supplier",
  ];

  const RenderCell = combinedAttributes
    .filter((field) => cell.includes(field.data))
    .sort((a, b) => cell.indexOf(a.data) - cell.indexOf(b.data));

  const ActionButton = {
    header: "Action",
    cell: (field) => (
      <td className="px-4 absolute top-1/2 -translate-y-1/2">
        <button
          onClick={() => handleButtonAction(field.id)}
          className="relative inline-flex items-center p-0.5 text-sm font-medium text-center text-slate-500 hover:text-slate-800 rounded-lg focus:outline-none dark:text-slate-400 dark:hover:text-slate-100"
          type="button">
          <DotsIcon />
          <div
            className={`${
              isOpen === field.id ? "block" : "hidden"
            } absolute left-[2rem] z-50 bg-white ring-2 rounded divide-y divide-slate-100 shadow dark:bg-slate-700 dark:divide-slate-600`}>
            <ul className="flex py-1 text-sm text-slate-700 dark:text-slate-200">
              <li>
                <Link
                  onClick={() => handleButtonAction(field.id)}
                  className="border-e-2 h-full block py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white">
                  <CrossIcon className="size-[1rem]" />
                </Link>
              </li>
              <li>
                <Link
                  href={`/rekening/${field.id}`}
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-600 border-e-2 h-full block py-2 px-4 hover:bg-blue-100 dark:hover:bg-blue-100 dark:hover:bg-opacity-90">
                  Detail
                </Link>
              </li>
              {usertype !== "user" && (
                <li>
                  <Link
                    href={`/rekening/${field.id}/edit`}
                    className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-600 border-e-2 h-full block py-2 px-4 hover:bg-yellow-100 dark:hover:bg-yellow-100 dark:hover:bg-opacity-90">
                    Edit
                  </Link>
                </li>
              )}
              {usertype === "admin" && (
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDeleteModalOpen(true);
                      setData(field);
                    }}
                    className="text-red-500 hover:text-red-600 h-full block py-2 px-4 hover:bg-red-100 dark:hover:bg-red-100 dark:hover:bg-opacity-90">
                    Hapus
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </button>
      </td>
    ),
  };

  const column = [ActionButton, ...RenderCell];
  const handleButtonAction = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  const confirmDelete = () => {
    if (data) {
      router.delete(route("rekening.destroy", data.id));
    }
    setIsDeleteModalOpen(false);
  };

  const filterCategory = combinedAttributes
    .filter((item) => item.data === "bank")
    .map((item) => item.options)
    .flat();

  const handleActionSelectedRow = async (selectedRows) => {
    if (selectedRows.length > 0) {
      const confirmationMessage =
        "Apakah anda yakin ingin menghapus beberapa data yang dipilih?";
      if (confirm(confirmationMessage)) {
        try {
          router.post(route("rekening.batchDelete", { ids: selectedRows }));
        } catch (error) {
          alert("Terjadi kesalahan saat menghapus data.");
        }
      }
    }
  };

  return (
    <Authenticated
      header={
        <h2 className="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-tight">
          Data Rekening
        </h2>
      }>
      <Head title="Data Rekening" />

      <MessageModal info={message.info} />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        closeModal={() => {
          setIsDeleteModalOpen(false);
          setData({});
        }}
        onConfirm={confirmDelete}
        itemName={data?.nama}
      />

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        <div className="sm:mt-6 bg-white dark:bg-slate-800 shadow-sm sm:rounded-lg">
          <Table
            data={filteredData}
            field={rekenings}
            attributes={column}
            filterCategory={filterCategory}
            TopTableLeft={
              <a
                href="/export-rekening"
                className="inline-block  bg-green-600 text-white p-2 rounded-lg">
                Export
              </a>
            }
            TopTableRight={
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <FilterCategory
                  category={["Active", "Stock", "Sakit", "Closed"]}
                  onFilterChange={handleFilterChange}
                />
              </div>
            }
            handeActionSelectedRow={handleActionSelectedRow}
          />
        </div>
      </div>
    </Authenticated>
  );
}
