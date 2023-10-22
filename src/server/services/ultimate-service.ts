import { db } from "../../database/connections";

export class UltimateService {
  async selectFighters(playerId: number, poolSize: number): Promise<any> {
    const fighters = await db.ultimateRepo.getFighters(playerId, poolSize);

    const selectedFighters: any[] = [];

    let totalTickets = fighters.reduce((acc: number, fighter: any) => acc + fighter.tickets, 0);

    while (selectedFighters.length < poolSize) {
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

    this.saveSelectedFighters(playerId, selectedFighters);
  }

  saveSelectedFighters(playerId: number, selectedFighters: any[]): Promise<any> {
    const fighterIds = selectedFighters.map((fighter: any) => fighter.fighter_id);

    return db.ultimateRepo.saveSelectedFighters(playerId, fighterIds);
  }
}