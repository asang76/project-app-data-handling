import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Tabledata from "./Tabledata";

const Datafilter = () => {
  const [dash, setDash] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14"
      )
      .then((response) => {
        setDash(response.data.data);
        console.log(response.data.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container ">
        
      <div className="row ">
        <div className="col-lg-12 mt-3">
          <section className="container-fx text-light rounded m-1" style={{background:"#283046"}}>
            <ul className="p-4 d-flex flex-wrap align-items-center">
              {/* fetched dashboard data from given api in li using bootstrap */}

              <li className="text-start d-flex align-items-center m-4 w-25">
                <p className="p-2 bg-light text-dark rounded-circle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </p>
                <h3 className="fs-6 p-2 m-1">
                  {dash.totalInstall}
                  <p> App Installed</p>
                </h3>
              </li>

              <li className="text-start d-flex align-items-center m-4 w-25">
                <p className="p-2 bg-light text-dark rounded-circle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </p>
                <h3 className="fs-6 p-2 m-1">
                  {dash.totaluninstall}
                  <p> Total Uninstall</p>
                </h3>
              </li>
              <li className="text-start d-flex align-items-center m-4 w-25">
                <p className="p-2 bg-light text-dark rounded-circle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </p>
                <h3 className="fs-6 p-2 m-1">
                  {dash.activeinstall}
                  <p> Active Install</p>
                </h3>
              </li>
              <li className="text-start d-flex align-items-center m-4 w-25">
                <p className="p-2 bg-light text-dark rounded-circle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </p>
                <h3 className="fs-6 p-2 m-1">
                  {dash.aliveappusers}
                  <p> Alive App Users</p>
                </h3>
              </li>
              <li className="text-start d-flex align-items-center m-4 w-25">
                <p className="p-2 bg-light text-dark rounded-circle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </p>
                <h3 className="fs-6 p-2 m-1">
                  {dash.churn}%<p> churn</p>
                </h3>
              </li>
              <li className="text-start d-flex align-items-center m-4">
                <p className="p-2 bg-light text-dark rounded-circle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </p>
                <h3 className="fs-6 p-2 m-1">
                  {dash.alivechurn}%<p>Alive churn</p>
                </h3>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-lg-12">
          {/* table component for better understand the table view */}
          <Tabledata />
        </div>
      </div>
    </div>
  );
};

export default Datafilter;
