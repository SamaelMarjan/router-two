import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { SoftData } from '../../data/SoftData';

const Soft = () => {
  return (
    <div className='soft'>
        <div className='soft-a'>
            <table className='table'>
                <tr className='t-head'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th className='one'>Website</th>
                </tr>
                {
                    SoftData.map((data) => {
                        return (
                            <>
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>+880 {data.phone}</td>
                                <td className='one'>
                                    <NavLink to={`soft/${data.id}`}>View</NavLink>
                                </td>
                            </tr>
                            </>
                        );
                    })
                }
            </table>
        </div>
        <div className='soft-b'>
            <Outlet />
        </div>
    </div>
  );
}

export default Soft;