import { Component, OnInit } from '@angular/core';
import { Service } from './models/service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    public services: Service[] = [
        new Service('Google', 'https://google.de'),
        new Service('Nextcloud', 'https://nextcloud.rroettger.de'),
    ];


    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {
        for(let service of this.services) {
            this._httpClient.get(service.url, {observe : 'response'}).subscribe(result => {
                console.log(result);
            })
        }
    }



}
