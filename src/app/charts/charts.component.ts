import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  // Pie
  public pieChartLabels:string[] = ['Opertavivos activos', 'Op. Finalizados', 'Op. Suspendidos'];
  public pieChartData:number[] = [70, 25, 5];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}