import ReactPaginate from 'react-paginate';
import { TypeJob } from '../type/TypeJobs';
import { JobCard } from './JobCard';
import Router from 'next/router';

interface Props {
  jobs: TypeJob[],
  currentPage: number,
  pageCount: number,
}

export const JobsList:React.FC<Props> = ({ jobs, currentPage, pageCount}) => {
  const handlePageClick = ({ selected }: { selected: number }) => {
    Router.push(`/${selected + 1}`);
  }

  return (
    <div className="flex flex-col gap-2 mt-7.25 w-full min-w-75.5">
      {jobs.map(job => 
        <JobCard key={job.id} job={job} currentPage={currentPage}/>
      )}
      
      <div className="flex justify-center min-w-75.5">
        <ReactPaginate
          forcePage={currentPage - 1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          containerClassName="flex justify-center items-center gap-x-[6px] md:gap-x-2 my-4 max-w-fit h-13 md:h-15 bg-white rounded-[10px] shadow-base"
          activeClassName="font-bold text-blue-gray border-b-blue-gray"
          disabledLinkClassName="text-gray-100 hover:text-gray-100 cursor-default"
          pageLinkClassName="font-bold hover:text-blue-gray"
          breakLinkClassName="font-bold hover:text-blue-gray"
          nextLinkClassName="font-bold hover:text-blue-gray"
          previousLinkClassName="hover:text-blue-gray disabled:cursor-default disabled:text-white "
          pageClassName="flex justify-center items-center p-3 w-6 md:w-8 font-bold text-4 md:text-5.25 border-y-2 border-transparent"
          breakClassName="flex justify-center items-center p-3 w-6 md:w-8 font-bold text-4 md:text-5.25 border-2-transparent"
          nextClassName="flex justify-center items-center p-3 h-8 w-14 md:w-16 font-bold text-4 md:text-5.25 border-l-[1.3px] ml-4 ms:ml-7 md:ml-10"
          previousClassName="flex justify-center items-center p-3 h-8 w-14 md:w-16 font-bold text-4 md:text-5.25 border-r-[1.3px] mr-4 ms:mr-7 md:mr-10"
        />
      </div>
    </div>
  )
}
