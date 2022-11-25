import axios from 'axios';
import { TypeJob } from '../../type/TypeJobs';
import { JobsList } from '../../components/JobsList';
import { GetServerSideProps } from 'next';
import { BASE_URL, JOBS_PER_PAGE } from '../../constants';

export const getStaticPaths = async () => { 
  const { data }: { data: TypeJob[] } = await axios.get(BASE_URL);

  if (!data) {
    return {
      notFound: true,
    }
  }

  const pageCount = Math.floor((data.length - 1) / JOBS_PER_PAGE) + 1

  return {
    paths: new Array(pageCount).fill(0).map((_, index) => ({params:{ page: (index + 1).toString()}})),
    fallback: false,
  }
}


export const getStaticProps:GetServerSideProps = async (context) => {  // here i use SSG (Static Site Generator)
  const currentPage = Number(context.params?.page);
  const { data }: { data: TypeJob[] } = await axios.get(BASE_URL);

  const pageCount = (currentPage && data) ? Math.floor((data.length - 1) / JOBS_PER_PAGE) + 1 : 0
  
  if (!data || !currentPage || currentPage > pageCount) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      jobs: data.slice((currentPage - 1) * JOBS_PER_PAGE, (currentPage - 1) * JOBS_PER_PAGE + JOBS_PER_PAGE),
      currentPage,
      pageCount, 
    },
    // Next.JS will attempt to re-generate the page:
    // - When a request come in
    // - At most once every 300 seconds (5 min)
    revalidate: 300, 
  }  
}

export default function Home({ jobs, currentPage, pageCount } : { jobs: TypeJob[], currentPage: number, pageCount: number } ) {
  return (
    <div className="container min-w-80">
      <JobsList jobs={jobs} currentPage={currentPage} pageCount={pageCount} />
    </div>
  )
}