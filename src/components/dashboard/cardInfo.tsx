
interface CardInfoProps {
    title: string;
    quantity: number;
    description: string;
    Icon: JSX.ElementType;
}

export default function CardInfo({ title, quantity, description, Icon }: CardInfoProps) {
    return(
        <div className="relative border-1 border-solid rounded-xl border-default-300 p-6">
            <div className="flex flex-col justify-between gap-3">
                <span className="font-semibold text-md text-secondary">{title}</span>
                <span className="font-bold text-2xl">{quantity}</span>
                <span className="text-tiny text-slate-400">{description}</span>
                <div className="absolute top-4 right-4">
                    <Icon  className="h-6 w-6"/>
                </div>
            </div>
        </div>
    )
};