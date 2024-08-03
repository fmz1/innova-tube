import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit(): void {}

    logIn(email: string, password: string) {
        if (!email || !password) {
            return alert('Los campos son requeridos')
        }
        
        this.authService.logInWithEmailAndPassword(email, password)
    }
}