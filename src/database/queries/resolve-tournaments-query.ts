export const resolveTournamentsQuery = `
  UPDATE tournaments
  SET status = 'Resolved'
  WHERE status = 'Playing';
`;