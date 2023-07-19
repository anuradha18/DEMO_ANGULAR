import { CanActivateFn } from '@angular/router';

export const routPrivGuard: CanActivateFn = (route, state) => {
  console.log(route);
  /* var empId = service.getEmpId();
  if(empId == '1212'){
    return true;
  }else{
    false;
  } */
  return true;
};
