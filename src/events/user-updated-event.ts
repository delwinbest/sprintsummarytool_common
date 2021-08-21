import { Subjects } from './subjects';
import { UserStatus } from './types/user-status';

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    version: number;
    name: string;
    status: UserStatus;
    email: string;
    team?: string;
  };
}
