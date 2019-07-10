import React from 'react';
import _ from 'lodash'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

const average = (data) => {
  if (_.sum(data) / data.length > 90 && _.sum(data) / data.length < 900) {
    return Math.ceil((_.sum(data) / data.length) - 273.15) + '°C'
  }
  return Math.ceil(_.sum(data) / data.length)
};

const current = (data) => {
  if (data[0] > 90 && data[0] < 900) {
    return Math.ceil(data[0] - 273.15) + '°C'
  }
  return Math.ceil(data[0])
};


export default (props) => {
  return (
    <div>Current: {current(props.data)}
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type={'avg'}/>
      </Sparklines>
      <div>
        Average: {average(props.data)}
      </div>
    </div>
  )
}