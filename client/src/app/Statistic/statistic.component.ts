import { chart } from 'chart.js';
import { StatiticService } from './statistic.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  
  students : any ;
  chart : [] ;
  isDisplay : boolean = false; 
 

   
  constructor(private statisticomponent : StatiticService) {
    
   }

  ngOnInit() {
   
     
    this.students= this.statisticomponent.students;
    this.chart = this.statisticomponent.displayLineChart('linec');
    this.statisticomponent.displayBarChart('goodCanvas1');
    this.statisticomponent.displayPieChart('lolo');
    
    
  }
}