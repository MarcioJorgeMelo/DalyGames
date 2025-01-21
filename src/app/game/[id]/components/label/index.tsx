

interface LabelProps {
    data: string;
}

export function Label({ data }: LabelProps) {
    return (
        <div
            className="flex-grow py-1 px-3 bg-slate-200 rounded-lg text-black text-center hover:font-bold duration-200 sm:flex-grow-0"
        >
            {data}
        </div>
    )
}