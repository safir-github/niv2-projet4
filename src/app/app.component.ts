import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';  
import { HeaderComponent } from '../app/components/header/header.component';  
import { FooterComponent } from '../app/components/footer/footer.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'niv2-projet4';
}
