import { Subjects } from './subjects';

export interface UserUpdatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    name: string;
    version: number;
  };
}
