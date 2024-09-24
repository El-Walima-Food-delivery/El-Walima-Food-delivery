import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Spinner: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div className="flex flex-col items-center justify-center h-3/4 pt-24">
      <GridLoader color="#ce193c" loading={loading} size={25} />
    </div>
  );
};

export default Spinner;
