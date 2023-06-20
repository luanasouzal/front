import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    private router: Router,
    private AuthService: AuthService,
    private toast: ToastrService
    ){

  }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  logout(){
    this.router.navigate(['login'])
    this.AuthService.logout();
    this.toast.info('Logout realizado com sucesso', 'Logout', {timeOut: 5000})
  }
}
