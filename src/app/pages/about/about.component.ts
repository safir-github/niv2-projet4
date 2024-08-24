import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../about.service';  

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  history: string = '';

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAboutInfo().subscribe(
      data => {
        this.history = data.history;
      },
      error => {
        console.error('Erreur lors du chargement des informations :', error);
      }
    );
  }
}
