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

 

  constructor(private themeService: NbThemeService) {
    
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
