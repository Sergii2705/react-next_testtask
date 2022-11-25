import axios from 'axios';
import { GetServerSideProps } from 'next';
import Router from 'next/router';
import { AiOutlineLeft } from 'react-icons/ai';
import { DetailedJob } from '../../components/DetailedJob';
import { BASE_URL } from '../../constants';
import { TypeJob } from '../../type/TypeJobs';

export const getServerSideProps:GetServerSideProps = async (context) => { // here i use SSR (Server Side Rendering)
  const id = context.params?.id;
  const currentPage = context.params?.page;
  const { data }: { data: TypeJob[] } = await axios.get(BASE_URL);
  const jobDetails = (data && id) ? data.find(job => job.id === id): null; 

  if (!data || !jobDetails) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      job: jobDetails,
      currentPage,
    }
  }  
}

export default function DetailedJobPage({ job, currentPage }: {job: TypeJob, currentPage: number }) {

  return (
    <>
    <div className="container">
      <DetailedJob job={job} />
      <button 
        onClick={() => {Router.push(`/${currentPage}`)}}
        className="mx-auto md:mx-0 flex justify-center items-center my-22 w-55
                  h-12.5 rounded-lg bg-white-gray font-bold text-dark-gray text-xs"
      >
        <AiOutlineLeft className="text-xl mr-5 -mt-0.75"/>
        RETURN TO JOB BOARD
      </button>  
    </div>
    </>
  )
}
