import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import Table from "./Table";
import moment from "moment";
const Tabledata = () => {

const [show, setShow] = useState(false);

  const [tabledata, setTabledata] = useState([]);

  const [isloading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState([]);
  const [state, setState] = useState([
    {
      startDate:null,
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?rows=20"
      )
      .then((response) => {
        console.log(response.data.data.data);
        setTabledata(response.data.data.data);
        // for pages added function 
        let pages = []                             
        for(let i = 1; i <= response.data.data.pages; i++) {
          pages.push(i)
        }
        setCount(pages)
        setPage(response.data.data.current)
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // used the moment for formating the date data as follows and filter them by the start and end
  const filterList = async (item) => {
    setState([item.selection]);
    try {
      const startDate = moment(item.selection.startDate).format("YYYY-MM-DD");
      const endDate = moment(item.selection.endDate).format("YYYY-MM-DD");
      if (startDate && endDate) {
        setIsLoading(true);
        const response = await axios.get(
          `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${startDate}&todate=${endDate}`
        );
        setTabledata(response.data.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // column values for the rows of the table 
  const column = [
    { heading: "Date", value: "created_At" },
    { heading: "Day Install", value: "totalinstall" },
    { heading: "Platform", value: "android_install" , value: "ios_install" },
    { heading: "Day Uninstall", value: "totaluninstall" },
    { heading: "Platform", value: "android_uninstall", value: "ios_uninstall" },
    { heading: "churn Rate", value: "totalchurn" },
    { heading: "churn Platform", value: "ios_churn",value:"android_churn" },
  ];

  return (
    <div className="containier text-light rounded mt-3"  style={{background:"#213046"}}>
      <div className=" d-flex justify-content-between p-2">
        <div className="d-flex">
          <h4 className="p-2">show</h4>
          <div className="m-2 w-100">
            {/* sorting the data in 100 200 form to add additional details */}
            <select className="m-2 w-100" name="" id="">
              <option value="1">0-50</option>
              <option value="1">100-500</option>
              <option value="1">500-1000</option>
            </select>
          </div>
          <span className="fs-4 m-2">Entries</span>
        </div>
        <div className="calender position-relative">
          <button className="btn text-dark  bg-light" onClick={()=>setShow(!show) }>select date</button>
          <div onMouseLeave={()=>setShow(false)}  className="position-absolute end-50 top-100">
          {
 show?<DateRange
   
    onChange={(item) => filterList(item)}
    moveRangeOnFirstSelection={false}
    ranges={state}
    
  />:null
}

          </div>
{/* imported the dataRange component from the package for better use */}

        </div>
      </div>
      {/* mapping the pages data for using 50 values per page */}
      {isloading ? (
        <p>Loading....</p>
      ) : (
        <Table data={tabledata} column={column} />
      )}
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          {count.map((el, i) => 
          <li key={i} className="page-item">
            <span className="page-link" >
             {el}
            </span>
          </li>
            ) }
         
          <li className="page-item">
            <a className="page-link" >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Tabledata;
