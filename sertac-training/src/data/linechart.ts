import  MotherChart  from "./motherchart"
/* eslint-disable */
export default class LineChart extends MotherChart {
    // @ts-ignore
    setTitle() {
        const x= {
            text: 'Beijing AQI',
            left: '1%'
          }

        return x  
    }
    // @ts-ignore
    setTooltip() {
        const x = {
            trigger: 'axis'
          }

        return x  
    }
    // @ts-ignore
    setGrid() {
        const x = {
            left: '5%',
            right: '15%',
            bottom: '10%'
          }

        return x  
    }
    // @ts-ignore
    setXaxis() {
        const x = {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        // const x = {
        //     data: data.map(function (item) {
        //       return item[0];
        //     })
        //   }

        return x  
    }
    // @ts-ignore
    setYaxis() {
        const x = {}

        return x
    }
    // @ts-ignore
    setToolBox() {
        const x = {
            right: 10,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          }

        return x  
    }    
    // @ts-ignore
    setDataZoom() {
        const x = [
            {
              startValue: '2014-06-01'
            },
            {
              type: 'inside'
            }
          ]

        return x  
    }
    // @ts-ignore
    setVisualMap() {
        const x = {
            top: 50,
            right: 10,
            pieces: [
              {
                gt: 0,
                lte: 50,
                color: '#93CE07'
              },
              {
                gt: 50,
                lte: 100,
                color: '#FBDB0F'
              },
              {
                gt: 100,
                lte: 150,
                color: '#FC7D02'
              },
              {
                gt: 150,
                lte: 200,
                color: '#FD0100'
              },
              {
                gt: 200,
                lte: 300,
                color: '#AA069F'
              },
              {
                gt: 300,
                color: '#AC3B2A'
              }
            ],
            outOfRange: {
              color: '#999'
            }
          }

        return x  
    }
    // @ts-ignore
    setSeries() {
        const x = {
            name: 'Beijing AQI',
            type: 'line',
            data: [320, 302, 301, 334, 390, 330, 320],
            markLine: {
              silent: true,
              lineStyle: {
                color: '#333'
              },
              data: [
                {
                  yAxis: 50
                },
                {
                  yAxis: 100
                },
                {
                  yAxis: 150
                },
                {
                  yAxis: 200
                },
                {
                  yAxis: 300
                }
              ]
            }
          }

        return x  
    }
    
}