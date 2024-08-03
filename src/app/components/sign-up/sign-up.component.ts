import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    standalone: true,
})
export class SignUpComponent implements OnInit {
    ngOnInit(): void {}

    constructor(private authService: AuthService) {}

    SignUp(email: string, pass1: string, pass2: string) {
        if (!email || !pass1 || !pass2)
            return alert('Todos los campos son obligatorios')

        if (pass1 !== pass2) 
            return alert('Las contraseñas no coinciden')  

        this.authService.signUpWithEmailAndPassword(email, pass1)
    }
}