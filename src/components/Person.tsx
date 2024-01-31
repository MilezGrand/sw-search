import React from 'react'
import { IPerson } from '../types';

interface PersonProps {
  personInfo: IPerson;
}

const Person: React.FC<PersonProps> = ({ personInfo }) => {
  const [reveal, setReveal] = React.useState(false);

  return (
    <li className='person'>
      {reveal ? (
        <div onClick={() => setReveal(false)} className='person__container'>
          <p className='person__name'>
            {personInfo.name}
            <img src='sw-search/hide.svg' />
          </p>
          <div>
            <p>Height: {personInfo.height} cm</p>
            <p>Mass: {personInfo.mass} kg</p>
          </div>
          <div>
            <p>Gender: {personInfo.gender}</p>
            <p>Skin color: {personInfo.skin_color}</p>
          </div>
        </div>
      ) : (
        <div onClick={() => setReveal(true)} className='person__container'>
          <p className='person__name'>
            {personInfo.name}
            <img src='sw-search/show.svg' />
          </p>
        </div>
      )}
    </li>

  )
}

export default Person