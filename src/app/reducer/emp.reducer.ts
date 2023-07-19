import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { _REDUCER_FACTORY } from "@ngrx/store/src/tokens";
import { employeeActions } from "../actions/emp.actions";
import { employee } from "../store/employees.store"

export const empKey = 'empKey';

export interface EmpState extends EntityState<employee> {
    loaded: boolean;
    error?: Error
}


export const empAdapter: EntityAdapter<employee> = createEntityAdapter<employee>({
    selectId: (employee) => employee.empId
});

export interface empPartialState {
    readonly [empKey]: EmpState;
}

export const empInitialState: EmpState = empAdapter.getInitialState({
    loaded: false
});

const _empReducer = createReducer(
    empInitialState,
    on(employeeActions.loadEmployeeSuccess, (state, { data }) => {
      return empAdapter.addMany(data, {
          ...state,
          loaded: true
      })
    }),
    on(employeeActions.loadEmployeeFailure, (state, { error }) => {
        return {
            ...state,
            error
        }
    }),
    on(employeeActions.deleteEmployee, (state, { data }) => {
        return empAdapter.removeOne(data, {
            ...state,
            loaded: true
        })
    }),
    on(employeeActions.addEmployee, (state, { data }) => {
        return empAdapter.addOne(data, {
            ...state,
            loaded: true
        })
    }),
    on(employeeActions.editEmployee, (state, { data }) => {
        return empAdapter.updateOne(data, {
            ...state,
            loaded: true
        })
    })
);

export function empReducer(state: EmpState | undefined, action: Action) {
    return _empReducer(state, action);
}
