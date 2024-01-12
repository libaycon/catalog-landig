'use client';
import React from "react";
import Image from "next/image";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, ChipProps, getKeyValue } from "@nextui-org/react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { columns, mobileColumns, equipments } from "@/data/dashboard/equipment";
import { useMediaQuery } from "@/contexts/react/mediaQuery";

const statusColorMap: Record<string, ChipProps["color"]> = {
    disponible: "success",
    agotado: "danger",
    alquilado: "warning",
};

type Equipment = typeof equipments[0];

export default function App() {
    const { mobile } = useMediaQuery();
    const cols = mobile ? mobileColumns : columns;

    const renderCell = React.useCallback((equipment: Equipment, columnKey: React.Key) => {
        const cellValue = equipment[columnKey as keyof Equipment];

        switch (columnKey) {
            case "equipment":
                return (
                    <div className="flex flex-row items-center gap-3 w-full max-w-[300px]"
                    >
                        <div className="relative h-[60px] w-[60px]">
                            <Image
                                src={equipment.image}
                                alt={equipment.brand}
                                fill
                                sizes="100%"
                                className="rounded-md object-cover"
                            />
                        </div>
                        <div className="flex flex-col text-tiny">
                            <span className="font-semibold line-clamp-2">{equipment.model}</span>
                            <span>{equipment.brand}</span>
                            <span><strong>Código: </strong> {equipment.code}</span>
                        </div>
                    </div>
                );
            case 'description':
                return (
                    <div className="text-tiny hidden sm:flex">
                        <p className="line-clamp-2">
                            {cellValue}
                        </p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[equipment.status.toLowerCase()]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-3">
                        <Tooltip content="Editar">
                            <span role="button" className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <PencilSquareIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Eliminar">
                            <span role="button" className="text-lg text-danger cursor-pointer active:opacity-50">
                                <TrashIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <Table aria-label="Example table with custom cells" className="w-full max-h-[calc(100vh-(72px+168px+3rem))] tablet:max-h-[calc(100vh-(136px+3rem))]">
            <TableHeader columns={cols} className="relative">
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"} className="sticky top-0 z-10">
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={equipments}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}