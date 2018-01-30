
import { Project } from './../../../../model/Project';
import { Component, OnDestroy, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'single-Project',
  styleUrls: ['./singleProject.component.scss','./form-inputs.component.scss'],
  templateUrl: './singleProject.component.html',
})
export class SingleProject implements OnDestroy {
heartRate = 4;
  currentTheme: string;
  themeSubscription: any;

  @Input()
   project: Project;
  @Output() 
  VoteThisProject  = new EventEmitter<number>();
   percentage:number;

  constructor(private themeService: NbThemeService) {
    
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }
  VoteProject(){
    console.log("voting")
    this.VoteThisProject.emit(1);
    
  }
ngOnInit(){
 this.percentage  = Math.trunc((this.project.TotalFuneded / this.project.FundingGoal)*100 );
}
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  
}
