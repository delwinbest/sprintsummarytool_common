import { Subjects } from './subjects';
import { SprintStatus } from './types/sprint-status';

export interface SprintCreatedEvent {
  subject: Subjects.SprintCreated;
  data: {
    id: string;
    version: number;
    status: SprintStatus;
    name: string;
    startDate: string;
    duration: number;
  };
}
