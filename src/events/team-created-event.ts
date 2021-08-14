import { Subjects } from './subjects';

export interface TeamCreatedEvent {
  subject: Subjects.TeamCreated;
  data: {
    id: string;
    name: string;
  };
}
