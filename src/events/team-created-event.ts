import { Subjects } from './subjects';
import { TeamStatus } from './types/team-status';

export interface TeamCreatedEvent {
  subject: Subjects.TeamCreated;
  data: {
    id: string;
    name: string;
    status: TeamStatus.Active;
  };
}
