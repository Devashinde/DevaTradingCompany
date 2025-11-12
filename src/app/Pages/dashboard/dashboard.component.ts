import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Line chart for monthly sales
  lineChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      { data: [50, 75, 150, 100, 200, 175], label: 'Sales', fill: true, borderColor: '#007bff', backgroundColor: 'rgba(0,123,255,0.2)' }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };

  // Pie chart for vegetable distribution
  pieChartData: ChartData<'pie'> = {
    labels: ['Onion', 'Maize', 'Soyabean', 'Tomato'],
    datasets: [
      { data: [120, 90, 60, 30], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'] }
    ]
  };
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true
  };

  users = [
    { u_name: 'John Doe', u_Mobile: '9999999999', u_Address: 'Mumbai' },
    { u_name: 'Jane Smith', u_Mobile: '8888888888', u_Address: 'Pune' }
  ];

}
