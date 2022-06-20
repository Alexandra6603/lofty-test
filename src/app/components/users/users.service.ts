import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"


@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(
        private httpClient: HttpClient
    ) {}

    public getAllUser(): any {
        return this.httpClient.get(
            `api/user/list`
        ).toPromise()
    }

    public getUserById(id: number) {
        return this.httpClient.get(
            `api/user/${id}`
        ).toPromise()
    }
}