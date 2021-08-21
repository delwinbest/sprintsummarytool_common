import { Subjects } from './subjects';
import { SprintStatus } from './types/sprint-status';
import { TeamStatus } from './types/team-status';

export interface SprintCreatedEvent {
  subject: Subjects.SprintCreated;
  data: {
    id: string;
    version: number;
    status: SprintStatus;
    name: string;
    startDate: Date;
    duration: number;
    team: {
      id: string;
      name: string;
      status: TeamStatus;
    };
  };
}
