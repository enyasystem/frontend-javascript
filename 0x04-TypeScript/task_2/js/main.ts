
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export type Employee = Teacher | Directors;

/* TODO: implement this type predicate */
export function isDirector(employee: Employee): employee is Directors {
  // implement: return true when employee is a Directors
  // e.g. return 'numberOfReports' in employee;
  return false;
}

/* TODO: implement this to return and log "Getting to director tasks" */
export function workDirectorTasks(): string {
  const msg = 'Getting to director tasks';
  console.log(msg);
  return msg;
}

/* TODO: implement this to return and log "Getting to work" */
export function workTeacherTasks(): string {
  const msg = 'Getting to work';
  console.log(msg);
  return msg;
}

/* TODO: implement createEmployee to return Directors when salary >= 1000, otherwise Teacher */
export function createEmployee(salary: number): Employee {
  if (salary >= 1000) {
    const director: Directors = {
      firstName: 'Director',
      lastName: 'Person',
      location: 'Head Office',
      fullTimeEmployee: true,
      numberOfReports: 1,
    };
    return director;
  }

  const teacher: Teacher = {
    firstName: 'Teacher',
    lastName: 'Person',
    location: 'Local Office',
    fullTimeEmployee: true,
  };
  return teacher;
}

/* TODO: implement executeWork to call the correct task function */
export function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    workDirectorTasks();
  } else {
    workTeacherTasks();
  }
}

/* Example calls - you can remove or replace these when testing */
executeWork(createEmployee(200));   // expected: Getting to work
executeWork(createEmployee(1000));  // expected: Getting to director tasks
