import { Subject } from "@/types";


export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'Computer Science',
    description: 'Fundamental concepts of computation, problem solving, algorithms, and basic programming using Python.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Calculus II',
    department: 'Mathematics',
    description: 'Techniques of integration, sequences and series, parametric equations, and polar coordinates.',
    createdAt: new Date().toISOString(),

  },
  {
    id: 3,
    code: 'ENG301',
    name: 'Shakespearean Literature',
    department: 'English',
    description: 'Close study of selected plays and sonnets by William Shakespeare, emphasizing historical context and critical analysis.',
    createdAt: new Date().toISOString(),
  },
];

export default mockSubjects;
