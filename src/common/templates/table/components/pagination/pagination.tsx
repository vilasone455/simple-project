/* eslint-disable @typescript-eslint/naming-convention */
import ReactPaginate from "react-paginate";
import PaginationSelect from "./element/PaginationSelect";
import type { IPagination } from "./interface/interface";
const maxButtons = 5;
const ListPagination: React.FC<IPagination> = ({
  getState,
  setPageSize,
  setPageIndex,
  getCanPreviousPage,
  getPageCount,
  getCanNextPage,
}) => {
  const pageCount = getPageCount();
  const handlePageClick = (event: { selected: number }): void => {
    const selectPage: number = event.selected;
    setPageIndex(selectPage);
  };
  return (
    <nav className="flex  justify-between ">
      <PaginationSelect getState={getState} setPageSize={setPageSize} />
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={maxButtons}
        pageCount={pageCount}
        prevRel={getCanPreviousPage() ? "prev" : null}
        nextRel={getCanNextPage() ? "next" : null}
        breakLabel="..."
        nextLabel={<div className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md">»</div>}
        previousLabel={<div className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md">«</div>}
        containerClassName="flex items-center justify-center mt-8 mb-4 gap-2"
        pageClassName="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full "
        activeClassName="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
      />
    </nav>
  );
};

export default ListPagination;
