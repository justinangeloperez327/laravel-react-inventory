import Table from "./Table/DataTable";
import TablePagination from "./Table/TablePagination";
import TableSizeRow from "./Table/TableSizeRow";

interface DataTableProps {
    columns: any;
    data: any;
    links: any;
    sizes?: any;
}

export default function DataTable({columns, data, links, sizes} : DataTableProps) {
  return (
    <>
        <div className="">
            <Table columns={columns} data={data}/>
        </div>
        <div className='flex justify-between mt-2 '>
            <TableSizeRow  sizes={sizes} />
            <TablePagination links={links} />
        </div>
    </>
  )
}
