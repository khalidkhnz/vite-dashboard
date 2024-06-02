import { Card, CardContent, CardTitle } from "../components/ui/card";
import { MyResponsiveLine } from "../components/LineChart";
import { Data } from "../lib/Data";
import { MyResponsivePie } from "../components/PieChart";
import { MyResponsiveCirclePacking } from "../components/CircleChart";
import { MyResponsiveChord } from "../components/ChordChart";
import { TableComponent } from "../components/Table";

interface IData {
  timestamp: string;
  flow_id: number;
  in_iface: string;
  event_type: string;
  src_ip: string;
  src_port: number;
  dest_ip: string;
  dest_port: number;
  proto: string;
  alert: {
    action: string;
    gid: number;
    signature_id: number;
    rev: number;
    signature: string;
    category: string;
    severity: number;
  };
  payload: string;
  payload_printable: string;
  stream: number;
}

const Dashboard = () => {
  const data: IData[] = Data.Data;

  const alertCountByTimestamp: { [timestamp: string]: number } = {};

  data.forEach((entry) => {
    const timestamp = entry.timestamp;
    if (!alertCountByTimestamp[timestamp]) {
      alertCountByTimestamp[timestamp] = 0;
    }
    alertCountByTimestamp[timestamp]++;
  });

  const filteredAlerts = Object.keys(alertCountByTimestamp).filter(
    (timestamp) => alertCountByTimestamp[timestamp] > 1
  );

  function getRandomColor(): string {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  const shapedData = filteredAlerts.map((timestamp) => ({
    id: timestamp,
    color: getRandomColor(),
    data: [
      {
        x: "alert",
        y: alertCountByTimestamp[timestamp],
      },
    ],
  }));

  console.log("shapedData", shapedData);

  return (
    <div className="bg-secondary w-full h-full">
      <div className="overflow-hidden bg-background/50 h-[400px] w-[90%] mx-auto flex flex-col justify-center">
        <MyResponsiveLine data={Data.Line} />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4 w-full">
        <Card className="bg-background/50 hover:bg-background transition-all w-[400px] h-[400px] p-4 border-primary/30">
          <CardTitle className="text-primary">PIE</CardTitle>
          <CardContent className="h-full w-full">
            <MyResponsivePie data={Data.Pie} />
          </CardContent>
        </Card>
        <Card className="bg-background/50 hover:bg-background transition-all w-[400px] h-[400px] p-4 border-primary/30">
          <CardTitle className="text-primary">Circle Chart</CardTitle>

          <CardContent className="h-full w-full">
            <MyResponsiveCirclePacking data={Data.Circle} />
          </CardContent>
        </Card>
        <Card className="bg-background/50 hover:bg-background transition-all w-[400px] h-[400px] p-4 border-primary/30">
          <CardTitle className="text-primary">Chord Graph</CardTitle>
          <CardContent className="h-full w-full">
            <MyResponsiveChord data={Data.Chord} />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-background/50 w-[90%] mx-auto my-8 border-primary/30 p-4">
        <CardTitle className="p-4 text-primary">Expenses</CardTitle>
        <TableComponent />
      </Card>
    </div>
  );
};

export default Dashboard;
