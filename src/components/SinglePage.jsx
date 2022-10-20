import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import {ShopData} from '../data/ShopData';

const SinglePage = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const data = ShopData.find((data) => data.id === parseInt(id));
        if (data) {
            setData(data)
        }
    }, [id])

  return (
    <>
    {
        data ? (
            <div className='data'>
                {data.title}
            </div>
        ) : (null)
    }

    <NavLink to='/shop'>Back</NavLink>
    </>
  );
}

export default SinglePage;