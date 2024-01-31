import { useQuery } from 'react-query';
import { IPerson } from './types';

export const useFetchPeople = (searchQuery: string, page?: number) => {
  return useQuery<IPerson[]>(['people', searchQuery, page], async () => {
    const response = await fetch(`https://swapi.dev/api/people/?search=${searchQuery}&page=${page || 1}`);
    const data = await response.json();
    return data.results;
  });
};