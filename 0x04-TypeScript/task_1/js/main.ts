//Define the Teacher interface
interface Teacher {
    readonly firstName : string; // readonly - can't change after initialiazation
    readonly lastName: string; // same here also
    fullTimeEmployee: boolean; //must always exist
    yearsOfExperience?: number; // Optional
    location: string;           //must always exist
    [key: string]: any;         // index signature => allows extra propertities like "contract"
}

//Example object using the interface
const teacher3: Teacher = {
    firstName: 'Bernard',
    fullTimeEmployee: false,
    lastName: 'Igiri',
    location: 'Ekureku',
    contract: false,            // allowed because of the [key: string]: any
};

console.log(teacher3);