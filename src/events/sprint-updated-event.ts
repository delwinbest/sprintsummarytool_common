import { Subjects } from './subjects';
import { SprintStatus } from './types/sprint-status';

export interface SprintUpdatedEvent {
  subject: Subjects.SprintUpdated;
  data: {
    id: string;
    version: number;
    status: SprintStatus;
    name: string;
    startDate: Date;
    duration: number;
  };
}
