import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { employee } from "../store/employees.store";

@Injectable({
    providedIn: "root"
})
export class EmpApiService {
    constructor(public http: HttpClient) {}

    public getEmployees(): Observable<employee[]> {
        return this.http.get<employee[]>('assets/jsons/employees.json');
    }
}
