import React, { useEffect, useState, Fragment } from "react";
import { doGet } from "../utils";
import ClipLoader from "react-spinners/ClipLoader";
import { appProps } from "../objects";
 
const Dashboard = (properties: appProps) => {
  const [data, setData] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const loadData = async () => {
    const results = await doGet(properties,"test/me",{projectId:properties.projectId});
    console.log(results);
    return results;
  };

  useEffect(() => {
    setIsDataLoaded(false);

    const load = async () => {
      let res = await loadData();
      setData(res);
      setIsDataLoaded(true);
    };
    
    load();
  }, []);

  return (
    <div>
      {isDataLoaded ? (
        <>
          <Fragment>{JSON.stringify(data)}</Fragment>
        </>
      ) : (
        <>
          <ClipLoader></ClipLoader>
        </>
      )}
    </div>
  );
};

export default Dashboard;
