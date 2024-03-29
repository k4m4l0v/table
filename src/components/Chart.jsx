import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Chart = ({sixDaysAgo, fiveDaysAgo, fourDaysAgo, threeDaysAgo, twoDaysAgo, yesterday, today, name}) => {
  const config = {
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Six days ago', 'Five days ago', 'Four days ago', 'Three days ago', 'Two days ago', 'Yesterday', 'Today']
    },
    series: [
      {
        name: name,
        data: [sixDaysAgo, fiveDaysAgo, fourDaysAgo, threeDaysAgo, twoDaysAgo, yesterday, today]
      }
    ]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={config}
    />
  )
}
