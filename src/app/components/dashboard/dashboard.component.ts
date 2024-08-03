import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { NgFor } from "@angular/common";
import { AuthService } from "../../shared/services/auth.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    standalone: true,
    imports: [ NgFor ]
})
export class DashboardComponent implements OnInit {
    private url = 'https://www.googleapis.com/youtube/v3/search'
    private apiKey = 'AIzaSyCaBQkYDek-lsouHuubLyLJJ4Y-yVTOgCc'

    miVideos:any[] = []
    videoId: string = ''

    ngOnInit(): void {}

    constructor(private authService: AuthService, public http: HttpClient, private sanitize: DomSanitizer) {}

    LogOut() {
        this.authService.logOut()
    }

    Buscar(palabra: string, cantidad: string) {
        this.ObtenerVideos(palabra, cantidad).subscribe((resp: any) => {
            this.miVideos = resp.items
        })
    }

    ObtenerVideos(palabra:string, cantidad:string) {
        const parametros = new HttpParams()
        .set('part', 'snippet')
        .set('key', this.apiKey)
        .set('q', palabra)
        .set('maxResults', cantidad)

        return this.http.get(this.url, { params: parametros }).pipe(map(res => res))
    }
}