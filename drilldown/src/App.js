import React, { Component } from 'react';
import './App.css';
import DrillDown from './DrillDown.js';

class App extends Component {
  get drillDownDataMock (){
    return {
    id: '00',
    label: '00 item, 00 level',
    onClick: (val) => console.log(val),
    list: [
      {
        id: '0',
        label: '0 item, 0 level >',
        onClick: (val) => console.log(val),
        list: [
          {
            id: '01',
            label: '0 item, 1 level',
            onClick: (val) => console.log(val),
            list: null
          },
          {
            id: '11',
            label: ' 1 item, 1 level',
            onClick: (val) => console.log(val),
            list: null
          },
          {
            id: '21',
            label: '2 item, 1 level',
            onClick: (val) => console.log(val),
            list: null
          },
        ]
      },
      {
        id: '1',
        label: '1 item, 0 level >',
        onClick: (val) => console.log(val),
        list: [
          {
            id: '00',
            label: '0 item, 1 level',
            onClick: (val) => console.log(val),
            list: null
          },
          {
            id: '01',
            label: ' 1 item, 1 level',
            onClick: (val) => console.log(val),
            list: null
          },
          {
            id: '12',
            label: '2 item, 1 level >',
            onClick: (val) => console.log(val),
            list: [
              {
                id: '02',
                label: '0 item, 2 level >',
                onClick: (val) => console.log(val),
                list: [
                  {
                    id: '03',
                    label: '0 item, 3 level',
                    onClick: (val) => console.log(val),
                    list: null
                  },
                  {
                    id: '13',
                    label: '1 item, 3 level',
                    onClick: (val) => console.log(val),
                    list: null
                  },
                  {
                    id: '23',
                    label: '2 item, 3 level >',
                    onClick: (val) => console.log(val),
                    list: [
                      {
                        id: '04',
                        label: '0 item, 4 level',
                        onClick: (val) => console.log(val),
                        list: null
                      },
                      {
                        id: '14',
                        label: '1 item, 4 level',
                        onClick: (val) => console.log(val),
                        list: null
                      },
                      {
                        id: '24',
                        label: '2 item, 4 level',
                        onClick: (val) => console.log(val),
                        list: null
                      },
                    ]
                  },
                ]
              },
              {
                id: '12',
                label: '1 item, 2 level',
                onClick: (val) => console.log(val),
                list: null
              },
              {
                id: '22',
                label: '2 item, 2 level',
                onClick: (val) => console.log(val),
                list: null
              }
            ]
          }
        ]
      }
      ]
    };
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
