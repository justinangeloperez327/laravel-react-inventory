import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination"

interface Props {
    links: any[];
}

const PageButton = ({link}: {link: any}) => {
    const activeClass = link.active ? 'text-white bg-retro-teal' : '';
    return (
        <PaginationLink
            href={link.url}
            aria-current="page"
            className={`relative hidden items-center rounded px-4 py-2 text-sm font-bold  hover:bg-gray-100 focus:z-20 focus:outline-offset-0 md:inline-flex ${activeClass}`}
            dangerouslySetInnerHTML={{ __html: link.label }}
        >
        </PaginationLink>
    );

}

export default function TablePagination({links}: Props) {
    const maxPagesToShow = 5;
    return (
        <Pagination>
            <PaginationPrevious href={links[0].url} />
            <PaginationContent>
                {links.slice(1, -1).map((link, index, array) => {
                    const isFirst = index === 0;
                    const isLast = index === array.length - 1;
                    const isNearCurrent = Math.abs(array.findIndex(l => l.active) - index) <= maxPagesToShow / 2;
                    const shouldShow = isFirst || isLast || isNearCurrent;

                    return shouldShow ? (
                        <PaginationItem key={index}>
                            <PageButton link={link} />
                        </PaginationItem>
                    ) : index === 1 || index === array.length - 2 || isNearCurrent ? (
                        <PaginationEllipsis key={index} />
                    ) : null;
                })}
            </PaginationContent>
            <PaginationNext href={links[links.length - 1].url} />
        </Pagination>
    )
}
