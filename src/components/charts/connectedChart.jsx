"use client";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { getKeyData } from "@/utils";
import { useEffect, useState } from "react";
import BarChart from "./bar";
import Loading from "../loading";

Chart.register(CategoryScale);

const ConnectedChart = (props) => {
  const { infoChart, fetchData, bgColor, labelChart, value } = props;
  const [products, setProducts] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetchData();

      const categoryData = getKeyData(data, labelChart, value);
      const chartData = getKeyValue(categoryData);

      setProducts({
        ...products,
        labels: [...chartData?.keys],
        datasets: [
          {
            label: infoChart,
            data: [...chartData?.values],
            backgroundColor: bgColor,
          },
        ],
      });
    } catch (error) {}
  };

  const getKeyValue = (data) => {
    const keys = [];
    const values = [];
    for (let key in data) {
      keys.push(key);
      values.push(data[key]);
    }

    return {
      keys,
      values,
    };
  };

  return (
    <div>
      {Object.keys(products).length > 0 ? (
        <div className="bg-white w-full rounded-lg shadow-lg">
          <BarChart chartData={products} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ConnectedChart;
