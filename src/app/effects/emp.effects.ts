import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { employeeActions } from "../actions/emp.actions";
import { EmpApiService } from "../services/empapi.services";
import { employee } from "../store/employees.store";

@Injectable()
export class empEffects {
    public loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(employeeActions.loadEmployee),
            mergeMap(() =>
                this.empApiService.getEmployees().pipe(
                    tap(console.debug),
                    map((res: employee[]) => employeeActions.loadEmployeeSuccess({ data: res}),
                    catchError(() => of ({type: employeeActions.loadEmployeeFailure}))
                )
            )
        )
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly empApiService: EmpApiService
    ) {}
}
