import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"


export interface Data {
    email: string,
    password: string,
    rememberMe: boolean
}

@Injectable({
    providedIn: 'root'
})

export class WelcomeService {

    constructor(
        private httpClient: HttpClient
    ) {}

    public autorize(data: Data) {
        return this.httpClient
            .post<any>(
                'api/authenticate', data
            ).toPromise()
    }
}