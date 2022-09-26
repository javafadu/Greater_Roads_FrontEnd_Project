import React, { useEffect, useState } from "react";
import { getVehiclesByPage } from "../../../../api/vehicle-service";
import Loading from "../../../common/loading/loading";
import SectionHeader from "../../common/section-header/section-header";
import PopularVehicle from "./popular-vehicle";
import VehicleBar from "./vehicle-bar";

const PopularVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const resp = await getVehiclesByPage();
      setVehicles(resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <SectionHeader
        title="Popular Vehicle Models"
        subTitle="Lux &amp; economic"
        desc="To contribute to positive change and achieve our sustainability goals with many extraordinary"
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <VehicleBar vehicles={vehicles} />
          <PopularVehicle />
        </>
      )}
    </div>
  );
};

export default PopularVehicles;
