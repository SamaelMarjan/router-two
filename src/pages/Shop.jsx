import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {ShopData} from '../data/ShopData';

const Shop = () => {
  const [data, setData] = useState(ShopData);

  return (
    <>
      <div>
        <div>
          Products
        </div>
        {
          data.map((data) => {
            return (
              <>
                <div>
                  <p>{data.title}</p>
                  <Link to={`/shop/${data.id}`}>View</Link>
                </div>
              </>
            );
          })
        }
      </div>
    </>
  )
}

export default Shop