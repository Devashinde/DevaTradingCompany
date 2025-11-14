import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  usersCount:any;
 constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
    console.log(this.users);
  }

  loadUsers() {
  this.userService.getUsers().subscribe(res => {
    this.usersCount = res.length;
    console.log(this.users); // ✅ now it will show the real data
  });
}



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
    { u_name: 'Devang Shinde', u_Mobile: '8975563606', u_Address: 'Nashik' },
    { u_name: 'Ishwar Somase', u_Mobile: '9970565322', u_Address: 'Mumbai' },
    { u_name: 'Mayur Jadhav', u_Mobile: '9755435443', u_Address: 'Pune' },
  ];

}
