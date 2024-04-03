import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const defaultSizes = [10, 25, 50, 100];

export default function TableSizeRow({ sizes = defaultSizes }: { sizes?: number[] }) {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a size" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {sizes.map((size) => (
                        <SelectItem key={size} value={String(size)}>
                                {size}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
