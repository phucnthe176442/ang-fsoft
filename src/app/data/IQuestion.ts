import { EQuestionType } from "./EQuestionType";
import { IAnswer } from "./IAnswer";

export interface IQuestion {
    id: number;
    content: string;
    questionType: EQuestionType;
    answers: IAnswer[];
}