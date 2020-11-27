import { CompetitionTable } from './model';

export interface CompetitionTableItemResponse {
    competition: string;
    table: CompetitionTable[];
}
