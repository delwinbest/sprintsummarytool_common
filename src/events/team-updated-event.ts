import { Subjects } from './subjects';

export interface TeamUpdatedEvent {
  subject: Subjects.TeamUpdated;
  data: {
    id: string;
    version: number;
    name: string;
  };
}
