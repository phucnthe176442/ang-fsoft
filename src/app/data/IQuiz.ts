import { IQuestion } from "./IQuestion";

export interface IQuiz {
    id: number;
    title: string;
    description?: string;
    duration: number;
    questions: IQuestion[];
}