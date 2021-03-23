import { Skill } from './skilll.model';

export interface Hero {
  id: number;
  name: string;
  image: string;
  describe: string;
  skills: Skill[];
}
