import React from 'react';
import { useFetchPeople } from '../api';
import { IPerson } from '../types';
import Person from './Person';

interface LoadMoreProps {
  searchQuery: string;
}

const LoadMore: React.FC<LoadMoreProps> = ({ searchQuery }) => {
  const [containerRef, setContainerRef] = React.useState<HTMLDivElement | null>(null);
  const [page, setPage] = React.useState<number>(2);
  const [moreResults, setMoreResults] = React.useState<IPerson[]>([]);

  const { data, isLoading } = useFetchPeople(searchQuery, page);

  const handleIntersection = async (inView: boolean) => {
    if (inView && !isLoading && data) {
      setPage(page + 1);
      setMoreResults([...moreResults, ...data]);
    }
  };

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      handleIntersection(entry.isIntersecting);
    }, options);

    if (containerRef) {
      observer.observe(containerRef);
    }

    return () => {
      if (containerRef) {
        observer.unobserve(containerRef);
      }
    };
  }, [containerRef, handleIntersection]);

  return (
    <>
      <ul>
        {moreResults.map((info, index) => (
          <Person key={index} personInfo={info} />
        ))}
      </ul>
      <div ref={(ref) => setContainerRef(ref)}></div>
      {isLoading ? (
        <img src='sw-search/spinner.svg' alt='loading' />
      ) : null}
    </>
  );
};

export default LoadMore;
