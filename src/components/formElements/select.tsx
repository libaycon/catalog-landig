'use client';
import { Select, SelectItem } from "@nextui-org/react";


export interface OptionTypes {
    label: string;
    value: Number;
}

export default function CustomSelect({ ...rest }): JSX.Element {
    return (
        <Select
            size='md'
            radius='sm'
            spellCheck={false}
            variant='bordered'
            {...rest}
            classNames={{
                label: "group-data-[filled-within=true]:text-tiny group-data-[filled-within=true]:font-bold text-foreground-500",
                trigger: "data-[focus=true]:border-secondary data-[open=true]:border-secondary",
                listbox: "hello"
            }}
        >
            {(item:OptionTypes) => (
                <SelectItem
                    key={`${item.value}`}
                    value={`${item.value}`}
                >
                    {item.label}
                </SelectItem>
            )}
        </Select>
    )
}