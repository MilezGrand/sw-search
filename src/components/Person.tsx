import React from 'react'
import { IPerson } from '../types';
import style from './Person.module.scss';

export interface PersonProps {
  personInfo: IPerson;
}

const Person: React.FC<PersonProps> = ({ personInfo }) => {
  const [reveal, setReveal] = React.useState(false);

  return (
    <li className={style.person}>
        <div onClick={() => setReveal(!reveal)} className={reveal ? style.person__container_reveal : style.person__container}>
          <p className={style.person__name}>
            {personInfo.name}
            {reveal ? <img src='sw-search/show.svg' /> : <img src='sw-search/hide.svg' />}
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
    </li>
  )
}

export default Person