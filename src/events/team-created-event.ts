import { Subjects } from './subjects';

export interface TeamCreatedEvent {
  subject: Subjects.TeamCreated;
  data: {
    id: string;
    version: number;
    name: string;
  };
}
