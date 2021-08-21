import { Subjects } from './subjects';
import { TeamStatus } from './types/team-status';

export interface TeamUpdatedEvent {
  subject: Subjects.TeamUpdated;
  data: {
    id: string;
    version: number;
    name: string;
    status: TeamStatus;
  };
}
