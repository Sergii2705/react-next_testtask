import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import styles from '../styles/Loading.module.css';

export const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url:string) => setLoading(true);//(url !== router.asPath) && setLoading(true);
      const handleComplete = (url:string) => setLoading(false);//(url === router.asPath) && setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })

  return loading 
    ? (  
      <svg className={styles.spinner} viewBox="0 0 60 60">
        <circle className={styles.path} cx="30" cy="30" r="25" fill="none" strokeWidth="5"></circle>
      </svg>
    ) 
    : <></>
}
