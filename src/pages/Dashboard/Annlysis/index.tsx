import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Pie } from "react-chartjs-2";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  plugins: {
    legend: {
      position: "top",
    },
  },
  title: {
    display: true,
    text: "Chart.js Pie Chart",
  },

  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Annalysis() {
  return (
    <>
    <div  className="flex m-0 p-0 space-x-0  border border-solid border-blue md:flex-row  gap-4 w-full h-full font-Poppins mb-6 px-6 py-3 border-none shadow-none  flex-col">
      <div
        
        className="flex flex-col   gap-4 w-full md:w-1/2 rounded-none md:flex-row  items-center mt-4"
      >
        <div className=" rounded-lg bg-cardBGColor  p-5 text-white-500">
          <div className="flex flex-row   items-center justify-start gap-4 mb-4">

            <Square3Stack3DIcon className="h-12 w-12 text-indigo-500" />

            <Typography variant="h4" className="text-greenMain font-Poppins">
              Disease Distribution in Nairobi
            </Typography>
          </div>
          <Typography
            variant="small"
            color="white"
            className=" md:max-w-lg md:text-white text-gray-500 text-base font-light leading-relaxed mb-4 "
          >
            Explore an Visualise the distribution of tomato diseases among
            farmers in Nairobi with our interactive pie chart. This
            visualization showcases the prevalence of different diseases based
            on predictions made by farmers in the Nairobi region. Each segment
            of the pie chart represents a specific disease, allowing you to
            quickly identify Tomato disease Outbreaks therefore making informed
            decision. Gain valuable insights into the agricultural landscape,
            make informed decisions, and take proactive measures to address
            prevalent diseases. The pie chart simplifies complex data, making it
            easy for farmers to understand and respond effectively to the
            challenges faced in their tomato plantations.
          </Typography>
        </div>
      </div>
      <CardBody
        className=" md:max-h-[500px] md:w-1/2  w-full
           grid place-items-center px-2"
      >
        <div>desease data </div>
        <Pie data={data} />;
      </CardBody>
    </div>
    </>
  );
}
