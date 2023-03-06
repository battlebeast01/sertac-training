export default class MotherChart {
    tooltip: {
        trigger: string,
        axisPointer: {
          type: string 
        }
      }
     legend: undefined
     grid: undefined
     xAxis: undefined
     yAxis: any
     series: {
        name: string
        type: string
        stack: string
        label: {
          show: boolean
        }
        emphasis: {
          focus: string
        }
        data: number[]
      }[]
      backgroundColor: undefined
      title: undefined
      visualMap: undefined
      toolbox: undefined
      dataZoom: undefined
     

    constructor() {
        this.tooltip = this.setTooltip()
        this.legend = this.setLegend()
        this.grid = this.setGrid()
        this.xAxis = this.setXaxis()
        this.yAxis = this.setYaxis()
        this.series = this.setSeries()
        this.backgroundColor = this.setBackgroundColour()
        this.title = this.setTitle()
        this.visualMap = this.setVisualMap()
        this.toolbox = this.setToolBox()
        this.dataZoom = this.setDataZoom()
    }
    setTooltip() {
        const x = {
            trigger: 'aaa',
            axisPointer: {
              type: 'aaa'
            }
    }
    return x
}

    setSeries() {
        const x = 
        [
            {
              name: 'sss',
              type: 'ggg',
              stack: 'gggg',
              label: {
                show: true
              },
              emphasis: {
                focus: 'wwwwww'
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: 'mmmm',
              type: 'hhh',
              stack: 'hhh',
              label: {
                show: true
              },
              emphasis: {
                focus: 'gggg'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            }
          ]

          return x
    }

    setLegend() {
      return undefined
    }

    setGrid() {
        return undefined
    }

    setXaxis() {
        return undefined
    }

    setYaxis() {
        return undefined
    }

    setBackgroundColour() {
        return undefined
    }

    setTitle() {
        return undefined
    }

    setVisualMap() {
        return undefined
    }

    setToolBox() {
        return undefined
    }

    setDataZoom() {
        return undefined
    }

}