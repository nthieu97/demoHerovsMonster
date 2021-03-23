import { Skill } from './skilll.model';

export interface Monster {
  id: number;
  name: string;
  image: string;
  describe: string;
  skills: Skill[];
}
