import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { employee } from "../store/employees.store"

export enum empActionTypes {
    Load = '[Emp] Load',
    LoadSuccess = '[Emp] Load Success',
    LoadFailure = '[Emp] Load Failure',
    DeleteEmployee = '[Emp] Delete',
    AddEmployee = '[Emp] Add',
    EditEmployee = '[Emp] Edit'
}

export const loadEmployee = createAction(empActionTypes.Load);

export const loadEmployeeSuccess = createAction(
    empActionTypes.LoadSuccess,
    props<{data: employee[]}>()
);

export const loadEmployeeFailure = createAction(
    empActionTypes.LoadFailure,
    props<{error: Error}>()
);

export const deleteEmployee = createAction(
    empActionTypes.DeleteEmployee,
    props<{data: number}>()
);

export const addEmployee = createAction(
    empActionTypes.AddEmployee,
    props<{data: employee}>()
);

export const editEmployee = createAction(
    empActionTypes.EditEmployee,
    props<{data: Update<employee>}>()
);

export const employeeActions = {
    loadEmployee,
    loadEmployeeSuccess,
    loadEmployeeFailure,
    deleteEmployee,
    addEmployee,
    editEmployee
}
