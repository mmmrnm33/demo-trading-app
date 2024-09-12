import { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const fetchInitialData = async (coin) => {
  const url = `https://api.upbit.com/v1/candles/minutes/60?market=${coin}&count=200`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.reverse().map((dataPoint) => {
      const { timestamp, opening_price, high_price, low_price, trade_price } =
        dataPoint;
      console.log(timestamp, opening_price, high_price, low_price, trade_price);
      return [timestamp, opening_price, high_price, low_price, trade_price];
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

const CandleChart = ({ coin, interval }) => {
  const [ohlcData, setOhlcData] = useState();
  const chartComponentRef = useRef(null);

  useEffect(() => {
    fetchInitialData(coin, interval).then((data) => {
      setOhlcData(data);
    });
  }, [coin, interval]);

  const options = {
    lang: {
      thousandsSep: ",",
      rangeSelectorZoom: "",
    },
    scrollbar: {
      enabled: false,
    },
    rangeSelector: {
      enabled: false,
    },
    tooltip: {
      positioner: function () {
        return {
          x: 12,
          y: 2,
        };
      },
      format:
        "{series.name} 시{point.open} 고{point.high} " +
        "저{point.low} 종{point.close}",
      borderWidth: 0,
      shadow: false,
    },

    xAxis: {
      oversroll: 10 * 60 * 1000,
      gridLineWidth: 1,
      crosshair: {
        snap: false,
        label: {
          backgroundColor: "#000000",
          padding: 2,
          shape: "rect",
          borderRadius: 0,
        },
      },
      type: "datetime",
      min: Date.now() - 120 * 60 * 60 * 1000,
      max: Date.now(),
    },
    yAxis: [
      {
        left: 80,
        gridLineWidth: 1,
        crosshair: {
          snap: false,
          label: {
            backgroundColor: "#000000",
            padding: 2,
            shape: "rect",
            borderRadius: 0,
          },
        },
        labels: {
          formatter: function () {
            return Highcharts.numberFormat(Number(this.value), 0, "", ",");
          },
        },
      },
    ],
    time: {
      useUTC: false,
    },
    chart: {
      marginRight: 90,
      plotBorderWidth: 1,
      plotBorderColor: "#000000",
      width: 1100,
      height: 500,
      zooming: {
        mouseWheel: {
          enabled: false,
        },
      },
    },
    credits: {
      enabled: false,
    },
    navigator: {
      enabled: false,
    },

    series: [
      {
        type: "candlestick",
        name: `${coin}`,
        data: ohlcData,
        color: "#000000",
        lastPrice: {
          enabled: true,
        },
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      ref={chartComponentRef}
      options={options}
    />
  );
};

export default CandleChart;
