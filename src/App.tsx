import React from 'react';
import { useFetchPeople } from './api';
import useDebounce from './hooks/useDebounce';
import LoadMore from './components/LoadMore';
import Person from './components/Person';

const App: React.FC = () => {
  const [searchState, setSearchState] = React.useState<string>('');
  const debouncedSearchTerm = useDebounce(searchState, 1000);

  const { data, isLoading } = useFetchPeople(debouncedSearchTerm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(event.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={searchState}
          onChange={handleInputChange}
          placeholder="Luke Skywalker"
          autoFocus
        />
      </form>
      {isLoading ? (
        <img src="sw-search/spinner.svg" alt="loading" />
      ) : (
        <>
          <ul>
            {data?.map((info, index) => (
              <Person key={index} personInfo={info} />
            ))}
          </ul>
          <LoadMore searchQuery={debouncedSearchTerm} />
        </>
      )}
    </>
  );
};

export default App;