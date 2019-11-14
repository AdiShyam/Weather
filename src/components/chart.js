import React from 'react';
// import _ from 'loadash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

export const Chart = ({data, color, units}) => {
    const  average = data => {
        
        const sum = data.reduce( (accumulator, element) => {
            return (accumulator + element);
        }, 0)
        const avg = sum / (data.length);
        return Math.round(avg)

    }

    return ( 
        <div>
            <Sparklines height={120} width={180} data={data} >
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type ="avg" />
            </Sparklines>
            <div>{average(data)} {units}</div>
        </div>
    )
}