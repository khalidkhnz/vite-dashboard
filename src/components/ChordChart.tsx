import { ResponsiveChord } from "@nivo/chord";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveChord = ({
  data /* see data tab */,
}: {
  data: any;
}) => (
  <ResponsiveChord
    data={data}
    keys={["John", "Raoul", "Jane", "Marcel", "Ibrahim"]}
    margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
    valueFormat=".2f"
    padAngle={0.02}
    innerRadiusRatio={0.96}
    innerRadiusOffset={0.02}
    inactiveArcOpacity={0.25}
    arcBorderColor={{
      from: "color",
      modifiers: [["darker", 0.6]],
    }}
    activeRibbonOpacity={0.75}
    inactiveRibbonOpacity={0.25}
    ribbonBorderColor={{
      from: "color",
      modifiers: [["darker", 0.6]],
    }}
    labelRotation={-90}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1]],
    }}
    colors={{ scheme: "nivo" }}
    motionConfig="stiff"
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 70,
        itemWidth: 80,
        itemHeight: 14,
        itemsSpacing: 0,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);
