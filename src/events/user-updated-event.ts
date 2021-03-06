import { Subjects } from './subjects';
import { UserRole } from './types/user-role';
import { UserStatus } from './types/user-status';

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    version: number;
    name: string;
    status: UserStatus;
    role: UserRole;
    email: string;
    team?: string;
  };
}
