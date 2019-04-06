import React, { Component } from 'react';
import './Year.css';
import MonthCol from '../MonthCol/MonthCol'

class Year extends Component {

  render() {
    let months ={
      "Jan": {
        "name": "January",
        "short": "Jan",
        "number": 1,
        "days": 31
      },
      "Feb": {
        "name": "February",
        "short": "Feb",
        "number": 2,
        "days": 28
      },
      "Mar": {
        "name": "March",
        "short": "Mar",
        "number": 3,
        "days": 31
      },
      "Apr": {
        "name": "April",
        "short": "Apr",
        "number": 4,
        "days": 30
      },
      "May": {
        "name": "May",
        "short": "May",
        "number": 5,
        "days": 31
      },
      "Jun": {
        "name": "June",
        "short": "Jun",
        "number": 6,
        "days": 30
      },
      "Jul": {
        "name": "July",
        "short": "Jul",
        "number": 7,
        "days": 31
      },
      "Aug": {
        "name": "August",
        "short": "Aug",
        "number": 8,
        "days": 31
      },
      "Sep": {
        "name": "September",
        "short": "Sep",
        "number": 9,
        "days": 30
      },
      "Oct": {
        "name": "October",
        "short": "Oct",
        "number": 10,
        "days": 31
      },
      "Nov": {
        "name": "November",
        "short": "Nov",
        "number": 11,
        "days": 30
      },
      "Dec": {
        "name": "December",
        "short": "Dec",
        "number": 12,
        "days": 31
      }
    }
    return (
      <div className="year">
        <MonthCol name={months.Jan.short} days={months.Jan.days}/>
        <MonthCol name={months.Feb.short} days={months.Feb.days}/>
        <MonthCol name={months.Mar.short} days={months.Mar.days}/>
        <MonthCol name={months.Apr.short} days={months.Apr.days}/>
        <MonthCol name={months.May.short} days={months.May.days}/>
        <MonthCol name={months.Jun.short} days={months.Jun.days}/>
        <MonthCol name={months.Jul.short} days={months.Jul.days}/>
        <MonthCol name={months.Aug.short} days={months.Aug.days}/>
        <MonthCol name={months.Sep.short} days={months.Sep.days}/>
        <MonthCol name={months.Oct.short} days={months.Oct.days}/>
        <MonthCol name={months.Nov.short} days={months.Nov.days}/>
        <MonthCol name={months.Dec.short} days={months.Dec.days}/>
      </div>  
    );
  }
}

export default Year;