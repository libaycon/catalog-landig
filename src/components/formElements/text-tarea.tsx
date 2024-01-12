import { Textarea } from "@nextui-org/react";

export default function CustomTextTarea({...rest}): JSX.Element {
    return (
        <Textarea
            size='md'
            radius='sm'
            spellCheck={false}
            variant='bordered'
            classNames={{
                label: "group-data-[filled-within=true]:text-tiny group-data-[filled-within=true]:font-bold text-foreground-500",
                inputWrapper: "group-data-[focus=true]:border-secondary group-data-[focus=true]:[&>label]:text-secondary"
            }}
            {...rest}
        />
    )
}