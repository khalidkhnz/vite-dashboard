import Eve from "./eve.json";

export class Data {
  public static Data: any = Eve;

  public static Chord: any = [
    [121, 130, 177, 130, 79],
    [78, 467, 450, 416, 1100],
    [59, 401, 1240, 459, 1477],
    [19, 1966, 74, 348, 135],
    [213, 495, 304, 823, 458],
  ];

  public static Circle: any = {
    name: "nivo",
    color: "hsl(305, 70%, 50%)",
    children: [
      {
        name: "viz",
        color: "hsl(101, 70%, 50%)",
        children: [
          {
            name: "stack",
            color: "hsl(45, 70%, 50%)",
            children: [
              {
                name: "cchart",
                color: "hsl(269, 70%, 50%)",
                loc: 60299,
              },
              {
                name: "xAxis",
                color: "hsl(248, 70%, 50%)",
                loc: 143885,
              },
              {
                name: "yAxis",
                color: "hsl(30, 70%, 50%)",
                loc: 189795,
              },
              {
                name: "layers",
                color: "hsl(167, 70%, 50%)",
                loc: 185007,
              },
            ],
          },
          {
            name: "ppie",
            color: "hsl(38, 70%, 50%)",
            children: [
              {
                name: "chart",
                color: "hsl(128, 70%, 50%)",
                children: [
                  {
                    name: "pie",
                    color: "hsl(60, 70%, 50%)",
                    children: [
                      {
                        name: "outline",
                        color: "hsl(309, 70%, 50%)",
                        loc: 158067,
                      },
                      {
                        name: "slices",
                        color: "hsl(122, 70%, 50%)",
                        loc: 106796,
                      },
                      {
                        name: "bbox",
                        color: "hsl(228, 70%, 50%)",
                        loc: 180878,
                      },
                    ],
                  },
                  {
                    name: "donut",
                    color: "hsl(140, 70%, 50%)",
                    loc: 141738,
                  },
                  {
                    name: "gauge",
                    color: "hsl(355, 70%, 50%)",
                    loc: 113365,
                  },
                ],
              },
              {
                name: "legends",
                color: "hsl(197, 70%, 50%)",
                loc: 12732,
              },
            ],
          },
        ],
      },
      {
        name: "colors",
        color: "hsl(9, 70%, 50%)",
        children: [
          {
            name: "rgb",
            color: "hsl(190, 70%, 50%)",
            loc: 41457,
          },
          {
            name: "hsl",
            color: "hsl(127, 70%, 50%)",
            loc: 195914,
          },
        ],
      },
      {
        name: "utils",
        color: "hsl(260, 70%, 50%)",
        children: [
          {
            name: "randomize",
            color: "hsl(99, 70%, 50%)",
            loc: 100042,
          },
          {
            name: "resetClock",
            color: "hsl(337, 70%, 50%)",
            loc: 159281,
          },
          {
            name: "noop",
            color: "hsl(100, 70%, 50%)",
            loc: 159087,
          },
          {
            name: "tick",
            color: "hsl(68, 70%, 50%)",
            loc: 96569,
          },
          {
            name: "forceGC",
            color: "hsl(239, 70%, 50%)",
            loc: 2748,
          },
          {
            name: "stackTrace",
            color: "hsl(167, 70%, 50%)",
            loc: 31373,
          },
          {
            name: "dbg",
            color: "hsl(352, 70%, 50%)",
            loc: 60521,
          },
        ],
      },
      {
        name: "generators",
        color: "hsl(81, 70%, 50%)",
        children: [
          {
            name: "address",
            color: "hsl(164, 70%, 50%)",
            loc: 92566,
          },
          {
            name: "city",
            color: "hsl(201, 70%, 50%)",
            loc: 127518,
          },
          {
            name: "animal",
            color: "hsl(174, 70%, 50%)",
            loc: 176673,
          },
          {
            name: "movie",
            color: "hsl(321, 70%, 50%)",
            loc: 72399,
          },
          {
            name: "user",
            color: "hsl(341, 70%, 50%)",
            loc: 59772,
          },
        ],
      },
      {
        name: "set",
        color: "hsl(79, 70%, 50%)",
        children: [
          {
            name: "clone",
            color: "hsl(92, 70%, 50%)",
            loc: 37795,
          },
          {
            name: "intersect",
            color: "hsl(339, 70%, 50%)",
            loc: 146215,
          },
          {
            name: "merge",
            color: "hsl(63, 70%, 50%)",
            loc: 153187,
          },
          {
            name: "reverse",
            color: "hsl(294, 70%, 50%)",
            loc: 165273,
          },
          {
            name: "toArray",
            color: "hsl(4, 70%, 50%)",
            loc: 6339,
          },
          {
            name: "toObject",
            color: "hsl(170, 70%, 50%)",
            loc: 180154,
          },
          {
            name: "fromCSV",
            color: "hsl(20, 70%, 50%)",
            loc: 95728,
          },
          {
            name: "slice",
            color: "hsl(84, 70%, 50%)",
            loc: 68326,
          },
          {
            name: "append",
            color: "hsl(239, 70%, 50%)",
            loc: 112873,
          },
          {
            name: "prepend",
            color: "hsl(313, 70%, 50%)",
            loc: 112901,
          },
          {
            name: "shuffle",
            color: "hsl(17, 70%, 50%)",
            loc: 193363,
          },
          {
            name: "pick",
            color: "hsl(35, 70%, 50%)",
            loc: 122358,
          },
          {
            name: "plouc",
            color: "hsl(220, 70%, 50%)",
            loc: 136623,
          },
        ],
      },
      {
        name: "text",
        color: "hsl(99, 70%, 50%)",
        children: [
          {
            name: "trim",
            color: "hsl(10, 70%, 50%)",
            loc: 742,
          },
          {
            name: "slugify",
            color: "hsl(283, 70%, 50%)",
            loc: 46852,
          },
          {
            name: "snakeCase",
            color: "hsl(338, 70%, 50%)",
            loc: 136033,
          },
          {
            name: "camelCase",
            color: "hsl(238, 70%, 50%)",
            loc: 94472,
          },
          {
            name: "repeat",
            color: "hsl(337, 70%, 50%)",
            loc: 145970,
          },
          {
            name: "padLeft",
            color: "hsl(299, 70%, 50%)",
            loc: 90421,
          },
          {
            name: "padRight",
            color: "hsl(96, 70%, 50%)",
            loc: 60946,
          },
          {
            name: "sanitize",
            color: "hsl(62, 70%, 50%)",
            loc: 160574,
          },
          {
            name: "ploucify",
            color: "hsl(320, 70%, 50%)",
            loc: 3524,
          },
        ],
      },
      {
        name: "misc",
        color: "hsl(145, 70%, 50%)",
        children: [
          {
            name: "greetings",
            color: "hsl(122, 70%, 50%)",
            children: [
              {
                name: "hey",
                color: "hsl(60, 70%, 50%)",
                loc: 135053,
              },
              {
                name: "HOWDY",
                color: "hsl(292, 70%, 50%)",
                loc: 59108,
              },
              {
                name: "aloha",
                color: "hsl(118, 70%, 50%)",
                loc: 188588,
              },
              {
                name: "AHOY",
                color: "hsl(232, 70%, 50%)",
                loc: 187710,
              },
            ],
          },
          {
            name: "other",
            color: "hsl(143, 70%, 50%)",
            loc: 169009,
          },
          {
            name: "path",
            color: "hsl(191, 70%, 50%)",
            children: [
              {
                name: "pathA",
                color: "hsl(15, 70%, 50%)",
                loc: 156274,
              },
              {
                name: "pathB",
                color: "hsl(288, 70%, 50%)",
                children: [
                  {
                    name: "pathB1",
                    color: "hsl(348, 70%, 50%)",
                    loc: 10665,
                  },
                  {
                    name: "pathB2",
                    color: "hsl(360, 70%, 50%)",
                    loc: 1940,
                  },
                  {
                    name: "pathB3",
                    color: "hsl(79, 70%, 50%)",
                    loc: 51513,
                  },
                  {
                    name: "pathB4",
                    color: "hsl(337, 70%, 50%)",
                    loc: 47149,
                  },
                ],
              },
              {
                name: "pathC",
                color: "hsl(50, 70%, 50%)",
                children: [
                  {
                    name: "pathC1",
                    color: "hsl(350, 70%, 50%)",
                    loc: 10989,
                  },
                  {
                    name: "pathC2",
                    color: "hsl(220, 70%, 50%)",
                    loc: 185692,
                  },
                  {
                    name: "pathC3",
                    color: "hsl(4, 70%, 50%)",
                    loc: 156403,
                  },
                  {
                    name: "pathC4",
                    color: "hsl(117, 70%, 50%)",
                    loc: 186643,
                  },
                  {
                    name: "pathC5",
                    color: "hsl(235, 70%, 50%)",
                    loc: 168360,
                  },
                  {
                    name: "pathC6",
                    color: "hsl(62, 70%, 50%)",
                    loc: 103893,
                  },
                  {
                    name: "pathC7",
                    color: "hsl(266, 70%, 50%)",
                    loc: 53682,
                  },
                  {
                    name: "pathC8",
                    color: "hsl(28, 70%, 50%)",
                    loc: 164737,
                  },
                  {
                    name: "pathC9",
                    color: "hsl(163, 70%, 50%)",
                    loc: 58736,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  public static Pie: any = [
    {
      id: "scala",
      label: "scala",
      value: 423,
      color: "hsl(54, 70%, 50%)",
    },
    {
      id: "java",
      label: "java",
      value: 470,
      color: "hsl(191, 70%, 50%)",
    },
    {
      id: "make",
      label: "make",
      value: 366,
      color: "hsl(257, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 452,
      color: "hsl(133, 70%, 50%)",
    },
    {
      id: "lisp",
      label: "lisp",
      value: 422,
      color: "hsl(101, 70%, 50%)",
    },
  ];

  public static Line: any = [
    {
      id: "france",
      color: "hsl(0, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 104,
        },
        {
          x: "helicopter",
          y: 110,
        },
        {
          x: "boat",
          y: 143,
        },
        {
          x: "train",
          y: 296,
        },
        {
          x: "subway",
          y: 229,
        },
        {
          x: "bus",
          y: 165,
        },
        {
          x: "car",
          y: 263,
        },
        {
          x: "moto",
          y: 73,
        },
        {
          x: "bicycle",
          y: 58,
        },
        {
          x: "horse",
          y: 114,
        },
        {
          x: "skateboard",
          y: 96,
        },
        {
          x: "others",
          y: 128,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(108, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 206,
        },
        {
          x: "helicopter",
          y: 37,
        },
        {
          x: "boat",
          y: 241,
        },
        {
          x: "train",
          y: 186,
        },
        {
          x: "subway",
          y: 283,
        },
        {
          x: "bus",
          y: 66,
        },
        {
          x: "car",
          y: 196,
        },
        {
          x: "moto",
          y: 290,
        },
        {
          x: "bicycle",
          y: 16,
        },
        {
          x: "horse",
          y: 25,
        },
        {
          x: "skateboard",
          y: 278,
        },
        {
          x: "others",
          y: 95,
        },
      ],
    },
  ];
}
