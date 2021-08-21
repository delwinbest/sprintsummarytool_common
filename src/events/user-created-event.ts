import { Subjects } from './subjects';
import { UserStatus } from './types/user-status';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    name: string;
    status: UserStatus.Active;
    email: string;
    team?: string;
  };
}
