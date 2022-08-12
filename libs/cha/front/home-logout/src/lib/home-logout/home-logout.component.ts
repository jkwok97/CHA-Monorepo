import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '@cha/domain/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'cha-front-home-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-logout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLogoutComponent implements OnInit {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.authFacade.logout();
      this.router.navigate(['']);
    }, 2000);
  }
}
