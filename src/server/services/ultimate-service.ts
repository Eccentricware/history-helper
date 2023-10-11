import { db } from "../../database/connections";

export class UltimateService {
  async selectFighters(fighterCount: number): Promise<any> {
    const fighters = await db.ultimateRepo.getFighters(fighterCount);

    const selectedFighters: any[] = [];

    let totalTickets = fighters.reduce((acc: number, fighter: any) => acc + fighter.tickets, 0);

    while (selectedFighters.length < fighterCount) {
      const winningTicket = Math.ceil(Math.random() * totalTickets);

      let ticketsChecked = 0;
      let winningIndex: number = -1;

      fighters.forEach((fighter: any, index: number) => {
        if (winningTicket - ticketsChecked <= fighter.tickets && winningIndex === -1) {
          winningIndex = index;
        } else {
          ticketsChecked += fighter.tickets; 
        }
      });

      const winningFighter = fighters[winningIndex];

      selectedFighters.push(winningFighter);
      totalTickets -= winningFighter.tickets;
      fighters.splice(winningIndex, 1);
    }

    this.saveSelectedFighters(selectedFighters);
  }

  saveSelectedFighters(fighters: any[]): Promise<any> {
    const fighterIds = fighters.map((fighter: any) => fighter.fighter_id);
    return db.ultimateRepo.saveSelectedFighters(fighterIds, fighters.length);
  }
}