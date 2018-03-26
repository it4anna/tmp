import React, { Component } from 'react';
import './App.css';
import DrillDown from './DrillDown.js';

class App extends Component {
  get drillDownDataMock (){
    return [
    {
      id: 0,
      label: '0 item, 0 level',
      onClick: (val) => console.log(val),
      children: [
        {
          id: '01',
          label: '0 item, 1 level',
          onClick: (val) => console.log(val),
        },
        {
          id: '11',
          label: ' 1 item, 1 level',
          onClick: (val) => console.log(val),
        },
        {
          id: '21',
          label: '2 item, 1 level',
          onClick: (val) => console.log(val),
        },
      ]
    },
    {
      id: 1,
      label: '1 item, 0 level',
      onClick: (val) => console.log(val),
      children: [
        {
          id: '00',
          label: '0 item, 1 level',
          onClick: (val) => console.log(val),
        },
        {
          id: '01',
          label: ' 1 item, 1 level',
          onClick: (val) => console.log(val),
        },
        {
          id: '12',
          label: '2 item, 1 level',
          onClick: (val) => console.log(val),
          children: [
            {
              id: '02',
              label: '0 item, 2 level',
              onClick: (val) => console.log(val),
              children: [
                {
                  id: '03',
                  label: '0 item, 3 level',
                  onClick: (val) => console.log(val),
                },
                {
                  id: '13',
                  label: '1 item, 3 level',
                  onClick: (val) => console.log(val),
                },
                {
                  id: '23',
                  label: '2 item, 3 level',
                  onClick: (val) => console.log(val),
                  children: [
                    {
                      id: '04',
                      label: '0 item, 4 level',
                      onClick: (val) => console.log(val),
                    },
                    {
                      id: '14',
                      label: '1 item, 4 level',
                      onClick: (val) => console.log(val),
                    },
                    {
                      id: '24',
                      label: '2 item, 4 level',
                      onClick: (val) => console.log(val)
                    },
                  ]
                },
              ]
            },
            {
              id: '12',
              label: '1 item, 2 level',
              onClick: (val) => console.log(val),
            },
            {
              id: '22',
              label: '2 item, 2 level',
              onClick: (val) => console.log(val)
            },
          ]
        },
      ]
    }];
  }

  render() {
    return (
      <div className="App">
        <DrillDown>{this.drillDownDataMock}</DrillDown>
      </div>
    );
  }
}

export default App;
