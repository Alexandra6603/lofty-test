import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"


// export const Data = {
//     password: string,
//     email: string,
//     rememberMe: boolean
// }

@Injectable({
    providedIn: 'root'
})

export class PostService {

    public config = {
        header: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJuYW1lIjoiYWRtaW4iLCJleHAiOjE2NTgxNDU5ODR9.9MP_Nlwean4PZv3kRAXKXD9MVTTaWlChbIcwY16mYxprPfn450fzGtKlgAJCbUN72PxZDtDrGQeYEmrZkvkg9g'
        } 
    }

    constructor(
        private httpClient: HttpClient
    ) {}

    public getAllPosts(page?: number, size?: number, sortData?: any): any {
        return this.httpClient.get(
            `api/posts/list`
        ).toPromise()
    }
    //page=${page}&size=${size}&sort=${sortData}

    public getPostById(id: number) {
        return this.httpClient.get(
            `api/posts/${id}`
        ).toPromise()
    }

    public createPost(data: any) {
        return this.httpClient.post(
            `api/posts/create`, data
        ).toPromise()
    }

    public updatePost(data: any) {
        return this.httpClient.post(
            `api/posts/edit`, data
        ).toPromise()
    }

    public deletePost(id: number) {
        return this.httpClient.delete(
            `api/posts/${id}`
        ).toPromise()
    }
}