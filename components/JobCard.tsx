import Image from 'next/image';
import { TypeJob } from '../type/TypeJobs';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import Router from 'next/router';
import { howLongAgoPosted } from '../utils';

interface Props {
  job: TypeJob,
  currentPage: number,
}

export const JobCard:React.FC<Props> = ({ job, currentPage }) => {
  const {
    id,
    title,
    pictures,
    name,
    createdAt,
    address,
  } = job;

  const linkClickHandler = () => {
    Router.push(`/${currentPage}/${id}`);
  }

  return (
    <div
      className="cursor-default px-4 pt-3 pb-6 md:py-6 w-full min-w-75.5 max-h-[220px]  
                  md:h-[168px] flex flex-row gap-6.5 bg-white rounded-lg shadow-base"
    >
      <div className="relative rounded-full border-solid h-16.5 md:h-21 w-16.5 md:w-21 
                      min-w-16.5 md:min-w-21 overflow-hidden mt-8 md:mt-0">
        <Image 
          className="w-auto h-auto" 
          src={`${pictures[0]}?random=${id}`}
          alt="place"
          width={85}
          height={85}
        />
      </div>
    
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="order-2 w-full flex flex-col gap-2 mt-3.5 md:mt-0">
          <h2 
            title={title}
            className="cursor-pointer font-normal md:font-bold text-lg md:text-xl leading-6.25 md:leading-6 text-dark-gray 
                      min-h-6 max-h-12 md:max-h-12.5 overflow-hidden tracking-[-0.625px]"
            onClick={linkClickHandler}
          >
            {title}          
          </h2>
          
          <p className="pt-2 leading-6.25 text-light-gray">
            {`Department name - ${name}`}
          </p>
    
          <p className="flex gap-2 items-baseline leading-6.25 text-light-gray overflow-hidden">
            <BsFillGeoAltFill className="inline h-4"/>
            {address}
          </p>
        </div>
    
        <div className="order-1 md:order-2 w-full md:w-50 flex flex-row md:flex-col justify-between items-end text-light-gray">
          <BiBookmark className="cursor-pointer text-base md:text-xl"/>

          <div 
            className="text-sm leading-4 md:leading-4 md:text-base"
            title={createdAt}
          >
            {howLongAgoPosted(createdAt)}
          </div>
        </div>
      </div>
    </div>
  )
}