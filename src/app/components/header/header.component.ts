import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService, private router: Router) {}
  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard'])
  }
}
