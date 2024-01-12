import { Input } from '@nextui-org/react';

export default function CustomInput({ ...rest }): JSX.Element {

    return (
        <Input
            spellCheck={false}
            size='md'
            radius='sm'
            autoComplete='off'
            labelPlacement='inside'
            variant='bordered'
            classNames={{
                label: "group-data-[filled-within=true]:text-tiny group-data-[filled-within=true]:font-bold text-foreground-500",
                inputWrapper: "group-data-[focus=true]:border-secondary group-data-[focus=true]:[&>label]:text-secondary"
            }}
            {...rest}
        />
    )
}