import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SoftData } from '../../../data/SoftData';

const SoftA = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const data = SoftData.find((data) => data.id === parseInt(id));
    if (data) {
      setData(data)
    }
  }, [id])

  return (
    <>
      <div className='softa'>
        {
          data ? (
            <>
              <div>
                <img src={data.image} alt='imgs' />
                <p>{data.name}</p>
                <p>{data.phone}</p>
              </div>
            </>
          ) : (null)
        }
      </div>
    </>
  );
}

export default SoftA;