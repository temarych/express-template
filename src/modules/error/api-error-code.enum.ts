export enum ApiErrorCode {
  NoAccessToken = 'no-access-token',
  InvalidAccessToken = 'invalid-access-token',
  ExpiredAccessToken = 'expired-access-token',
  InvalidBody = 'invalid-body',
  InvalidQueries = 'invalid-queries',
  Internal = 'internal',
  EntityNotFound = 'entity-not-found',
  IncorrectPassword = 'incorrect-password',
  EmailNotUnique = 'email-not-unique',
}
