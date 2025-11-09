//Define the Teacher interface
export interface Teacher {
    readonly firstName: string; // readonly - can't change after initialization
    readonly lastName: string; // same here also
    fullTimeEmployee: boolean; //must always exist
    yearsOfExperience?: number; // Optional
    location: string;           //must always exist
    [key: string]: any;         // index signature => allows extra propertities like "contract"
}

//Example object using the interface
export const teacher3: Teacher = {
    firstName: 'Bernard',
    fullTimeEmployee: false,
    lastName: 'Igiri',
    location: 'Ekureku',
    contract: false,            // allowed because of the [key: string]: any
};

console.log(teacher3);

// Directors interface extends Teacher and adds numberOfReports
export interface Directors extends Teacher {
    numberOfReports: number;
}

// Example director object
export const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);