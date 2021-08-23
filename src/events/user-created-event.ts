import { Subjects } from './subjects';
import { UserRole } from './types/user-role';
import { UserStatus } from './types/user-status';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    given_name: string;
    family_name: string;
    status: UserStatus.Active;
    role: UserRole;
    email: string;
    team?: string;
  };
}
