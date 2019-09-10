import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ModelPopupComponent } from './model-popup/model-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public selectOptions = [{ id: 'child', value: 'Male' },
  { id: 'otr', value: 'Prediabetics screening for blood glucose levels annually ' }];
  public selectValue = 'child';
  public secCriteria = 'Diphtheria, Tetanus and acellular Pertussis';
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}], yAxes: [
        {
          id: 'yAxis1',
          position: 'left'
        },
        {
          id: 'yAxis2',
          position: 'right'
        }
      ]
    },
  };
  public barChartLabels: Label[] =
    ['Diphtheria, Tetanus and acellular Pertussis',
      'Polio',
      'Measels, Mumps and Rubella',
      'H Influenza Type B',
      'Hepatitis B',
      'Chicken Pox',
      'Pneumococcal Conjugate',
      'Hepatitis A',
      'Rotavirus',
      'Influenza'];
  public barChartLabels1: Label[] = ['Male', 'Female'];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];
  public barChartData1: ChartDataSets[] = [];

  public unperformed = [];
  public data1 = [
    {
      data: [5600, 14500], label: 'Eligible Members', type: 'bar', yAxisID: 'yAxis1'
    },
    {
      data: [2345, 9876], label: 'Performed', type: 'bar', yAxisID: 'yAxis1'
    },
    {
      data: [41.9, 68.1],
      label: 'Completion', type: 'line', borderColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'yAxis2',
    }

  ];
  public data = [
    {
      data: [5600, 5600, 5600, 5600, 5600, 5600, 5600, 5600, 5600, 5600
      ], label: 'Eligible Members', type: 'bar', yAxisID: 'yAxis1',
    },
    {
      data: [1959, 4509, 345, 878, 1243, 1543, 990, 1034, 2099, 1921
      ], label: 'Performed', type: 'bar', yAxisID: 'yAxis1',
    },
    { data: this.unperformed, label: 'NOt Performed', type: 'bar', yAxisID: 'yAxis1', },
    {
      data: [35.0, 80.5, 6.2, 15.7, 22.2, 27.6, 17.2, 18.2, 37.5, 32.6],
      label: 'Completion', type: 'line', borderColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'yAxis2',
    }

  ];
  title: string;
  title1: string;
  secDropDownVal: string[];
  tableData: { _id: string; email: string; }[];


  ngOnInit() {
    this.getunperformed();
  }
  getunperformed() {
    for (let i = 0; i < this.data[0].data.length; i++) {
      this.unperformed.push(this.data[0].data[i] - this.data[1].data[i]);
    }
    this.title = 'Prediabetics screening for blood glucose levels annually';
    this.barChartData = this.data;

    for (let i = 0; i < this.data1[0].data.length; i++) {
      this.unperformed.push(this.data[0].data[i] - this.data[1].data[i]);
    }
    this.title1 = 'Members with one or more additional risk factors performed diabetic screening in last 3 years'
    this.barChartData1 = this.data;

  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  getSecDropDownVal() {
    if (this.selectValue === 'child') {
      this.secDropDownVal = ['Diphtheria, Tetanus and acellular Pertussis',
        'Polio',
        'Measels, Mumps and Rubella',
        'H Influenza Type B',
        'Hepatitis B',
        'Chicken Pox',
        'Pneumococcal Conjugate',
        'Hepatitis A',
        'Rotavirus',
        'Influenza'];
      this.tableData = [
        {
          _id: '5d4b1ae029bd20dab7d24719',
          email: 'John Doe'
        },
        {
          _id: '5d4b1ae03493266b6e98ae79',
          email: 'Jimmy Carter'
        },
        {
          _id: '5d4b1ae05d2c70f7b9714549',
          email: 'Stuart McGee'
        },
        {
          _id: '5d4b1ae0bc6d933fc4b440c3',
          email: 'Andrea Joel'
        },
        {
          _id: '5d4b1ae084485c7495bd2dcf',
          email: 'Jhon Smith'
        },
        {
          _id: '5d4b1ae0adf6ec946dd4c0da',
          email: 'Clark Stuart'
        },
        {
          _id: '5d4b1ae043defcf37086739d',
          email: 'Kim Hann'
        },
        {
          _id: '5d4b1ae0c370815146dea8e1',
          email: 'Anna John'
        },
        {
          _id: '5d4b1ae0a18c86e610d2e940',
          email: 'John Stuart'
        }
      ];
    } else {
      this.secDropDownVal = ['Male', 'Female'];
      this.tableData = [
        {
          _id: '5d4b1ae0adf6ec946dd4c0da',
          email: 'Smith Doe'
        },
        {
          _id: '5d4b1ae043defcf37086739d',
          email: 'Scott Kim'
        },
        {
          _id: '5d4b1ae0c370815146dea8e1',
          email: 'Joel Spolsky'
        },
        {
          _id: '5d4b1ae0a18c86e610d2e940',
          email: 'Jon Skeety'
        }
      ];
    }

    return this.secDropDownVal;
  }
}
