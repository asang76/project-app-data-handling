import React from 'react'
import moment from 'moment'
import { FaApple } from 'react-icons/fa'
import { DiAndroid } from "react-icons/di";
import './table.css'
const Table = ({data, column}) => {
  return (
    <div className='table-wrapper-scroll-x my-custom-scrollbar'>
          
<table class="table text-light  rounded"style={{background:"#213046"}}> 
{/* created a table in bootstrap  */}
  <thead className='thead-dark' style={{background:""}}>
    <tr>
        {/* mapped the values through props from the tabledata component to the column   */}
     {column.map((item , index) => <TableHeadItem item={item}  key={index}/>)}
    </tr>
  </thead>
  <tbody>
    {/* mapped the values from making seprate the values from the data */}
    {data.map((item, index) => <TableRowItem item={item} key={index}/>)}
  </tbody>
</table>
    </div>
  )
}

const TableHeadItem = ({item}) => <th className='text-center p-3'  >{item.heading}</th>
const TableRowItem = ({item})=> {
//    mapped the values from pros from the tabledata component
    return <tr>
        <td>{moment(item.created_At).format('YYYY-MM-DD')}</td>
        <td>{item.totalinstall}</td>
        <td><DiAndroid/>{item.android_install} <p><FaApple/>{item.ios_install}</p> </td>
        <td>{item.totaluninstall}</td>
        <td><DiAndroid/>{item.android_uninstall} <p><FaApple/>{item.ios_uninstall}</p> </td>
        <td>{item.totalchurn}%</td>
        <td><FaApple/>{item.ios_churn}% <p><DiAndroid/>{item.android_churn}%</p></td>
        
    </tr>
}

export default Table