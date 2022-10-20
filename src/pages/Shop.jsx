import React from 'react';
import { Link } from 'react-router-dom';

import {ShopData} from '../data/ShopData';

const Shop = () => {

  return (
    <>
      <div>
        <div>
          Products
        </div>
        {
          ShopData.map((data) => {
            return (
              <>
                <div key={data.id}>
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