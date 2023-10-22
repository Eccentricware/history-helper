export const getSaveSelectedFightersQuery = (fighterCount: number) => {
  switch (fighterCount) {
    case 1:
      return `
        UPDATE fighters
        SET selected = true
        WHERE fighter_id = ANY($1);
      `;
    case 3:
      return `
        UPDATE fighters
        SET selected_ss3 = true
        WHERE fighter_id = ANY($1);
      `;
    case 5:
      return `
        UPDATE fighters
        SET selected_ss5 = true
        WHERE fighter_id = ANY($1);
      `;
    default:
      return `
        UPDATE fighters
        SET selected_x = true
        WHERE fighter_id = ANY($1);
      `
  }
}