import { createFeatureSelector, createSelector } from "@ngrx/store";
import { empAdapter, empKey, EmpState } from "../reducer/emp.reducer";

const getEmpState = createFeatureSelector<EmpState>(empKey);

const { selectIds, selectAll, selectTotal } = empAdapter.getSelectors();

export const selectempIds = createSelector(
    getEmpState,
    selectIds
);
export const selectDepartment = createSelector(
    getEmpState,
    selectIds
);

export const selectAllEmp = createSelector(
    getEmpState,
    selectAll
);

export const selectEmpCount = createSelector(
    getEmpState,
    selectTotal
);

export const selectEmpLoaded = createSelector(
    getEmpState,
    (state) => state.loaded
);

export const selectEmpError = createSelector(
    getEmpState,
    (state) => state.error
);
