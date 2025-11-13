export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

  // teacher-specific method
  workTeacherTasks(): string;
}

export interface Directors extends Teacher {
  numberOfReports: number;

  // director-specific method
  workDirectorTasks(): string;
}

export type Employee = Teacher | Directors;

export function isDirector(employee: Employee): employee is Directors {
  return 'numberOfReports' in employee;
}

export function createEmployee(salary: number): Employee {
  if (salary >= 1000) {
    const director: Directors = {
      firstName: 'Director',
      lastName: 'Person',
      location: 'Head Office',
      fullTimeEmployee: true,
      numberOfReports: 1,
      workDirectorTasks(): string {
        const msg = 'Getting to director tasks';
        console.log(msg);
        return msg;
      },
      // Directors inherit Teacher shape, but teacher method can be optional or a no-op
      workTeacherTasks(): string {
        const msg = 'Getting to work';
        console.log(msg);
        return msg;
      },
    };
    return director;
  }

  const teacher: Teacher = {
    firstName: 'Teacher',
    lastName: 'Person',
    location: 'Local Office',
    fullTimeEmployee: true,
    workTeacherTasks(): string {
      const msg = 'Getting to work';
      console.log(msg);
      return msg;
    },
  };
  return teacher;
}

export function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

/* Example calls */
executeWork(createEmployee(200));   // expected: Getting to work
executeWork(createEmployee(1000));  // expected: Getting to director tasks
