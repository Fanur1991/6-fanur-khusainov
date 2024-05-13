import { Request, Response } from 'express';
import RankingService from '../services/rankingService';

class RankingController {
  private rankingService: RankingService;

  constructor(rankingService: RankingService) {
    this.rankingService = rankingService;
  }

  async getRanking(_req: Request, res: Response): Promise<Response> {
    try {
      const rankings = await this.rankingService.getRankings();
      return res.json(rankings);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res
          .status(500)
          .json({ message: 'An unexpected error occurred' });
      }
    }
  }

  async getLoser(_req: Request, res: Response): Promise<Response> {
    try {
      const loser = await this.rankingService.getLoser();
      return res.json(loser);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res
          .status(500)
          .json({ message: 'An unexpected error occurred' });
      }
    }
  }

  async getWinner(_req: Request, res: Response): Promise<Response> {
    try {
      const winner = await this.rankingService.getWinner();
      return res.json(winner);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res
          .status(500)
          .json({ message: 'An unexpected error occurred' });
      }
    }
  }
}

export default RankingController;
