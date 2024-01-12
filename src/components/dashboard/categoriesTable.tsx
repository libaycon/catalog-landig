'use client';
import React from "react";
import { useFormState } from "react-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { brandDelete, replaceBrandDelete, equipmentCategoryDelete, replaceCategoryDelete, rentalCategoryDelete } from "@/app/lib/delete/brandCategoryRemove";



const columns = [
  {
    id: "name",
    label: "NAME"
  },
  {
    id: "items",
    label: "QUANTITY"
  },
  {
    id: "actions",
    label: "ACTIONS"
  }
];

interface Data {
  id: number;
  name: string;
}

type DeleteAction = (formData: FormData) => Promise<void>;

export default function CategorieTable({ data, tableName }: { data: Data[] | undefined, tableName: string }) {
  const initialState = { message: null, error: {} };
  const deleteAction = tableName === 'brands' ? brandDelete :
    tableName === 'replaceBrand' ? replaceBrandDelete :
    tableName === 'equipmentCategory' ? equipmentCategoryDelete :
    tableName === 'replaceCategory' ? replaceCategoryDelete :
    rentalCategoryDelete;

  const [formState, dispatch] = useFormState(deleteAction , initialState);

  const renderCell = React.useCallback((row: Data, columnkey: React.Key) => {
    const cellValue = row[columnkey as keyof Data];
    
    switch (columnkey) {
      case "actions":
        return (
          <div className="w-full text-right">
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              dispatch(formData);
            }}>
              <input type="hidden" name="id" value={row.id} />
              <button type="submit" className="btn btn-secondary hover:text-danger">
                <TrashIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        );
      case "name":
        return (
          <div>
            <span className="text-ms text-slate-300">{cellValue}</span>
          </div>
        )
      case "items":
        return (
          <div className="w-full text-right">
            <span className="font-semibold text-md text-secondary">{cellValue}</span>
          </div>
        )
      default:
        return cellValue;
    }
  }, [])

  return (
    <Table
      aria-label="Example table with dynamic content"
      hideHeader
      classNames={{ wrapper: 'bg-transparent' }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.id}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
