import axios from 'axios';
import { TypeJob } from '../type/TypeJobs';
import { JobsList } from '../components/JobsList';
import { GetStaticProps } from 'next';
import { BASE_URL, JOBS_PER_PAGE } from '../constants';

export const getStaticProps:GetStaticProps = async () => { // here i use SSG (Static Site Generator)
  const { data }: { data: TypeJob[] } = await axios.get(BASE_URL);
  const pageCount = data ? Math.floor((data.length - 1) / JOBS_PER_PAGE) + 1 : 0

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      jobs: data.slice(0, JOBS_PER_PAGE),
      currentPage: 1,
      pageCount, 
    },
    // Next.JS will attempt to re-generate the page:
    // - When a request come in
    // - At most once every 300 seconds (5 min)
    revalidate: 300, 
  }  
}

export default function Home({ jobs, currentPage, pageCount } : { jobs: TypeJob[], currentPage: number, pageCount: number} ) {  
  return (
    <div className="container min-w-80">
      <JobsList jobs={jobs} currentPage={currentPage} pageCount={pageCount}/>
    </div>
  )
}
