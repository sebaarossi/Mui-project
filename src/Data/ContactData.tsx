export interface FormValues {
    id: number;
    name?: string;
    role?: string;
    skills: string[];
    startDate?: string;
    preference?: string;
}

const today = new Date();

export const contactData : Array<FormValues> = [
    {id: 1, name: 'Shaun Spener', role: 'dev', skills: ['React', 'Angular'], startDate: `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`, preference: 'Work from home'},
    {id: 2, name: 'John Lennon', role: 'guitarist', skills: ['Mic', 'Guitar'], startDate: `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`, preference: 'Work from studio'},
    {id: 3, name: 'Goerge Harrison', role: 'guitarist', skills: ['Guitar'], startDate: `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`, preference: 'Work from street'},
    {id: 4, name: 'Paul McCartney', role: 'bass', skills: ['Mic', 'Bass'], startDate: `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`, preference: 'Work from Abbey Road'},
    {id: 5, name: 'Ringo Star', role: 'drummer', skills: ['Drums'], startDate: `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`, preference: 'Work from octopuses garden'}
]