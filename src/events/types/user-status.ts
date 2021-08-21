export enum UserStatus {
  Active = 'active', // User is Active and can be edited, used
  Archived = 'archived', // User has been arcived and cannot be used, should appear as delete
  Disabled = 'disabled', // User has been disabled and can be used, but cannot log in.
}
