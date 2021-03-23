import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Skill } from '../model/skilll.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  HeroSkills: Skill[] = [{ id: 1, name: 'throw shield' }];
  constructor() { }
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Captain America',
      describe: 'America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.',
      image: 'https://i.ebayimg.com/images/g/p9UAAOSw9idaHIHq/s-l300.jpg',
      skills: [{ id: 1, name: 'throw shield' }]
    }
  ];
  getAllHeroes(): Hero[] {
    return this.heroes;
  }
  getHeroById(id: number): Hero {
    const heroSelected = this.heroes.find(hero => hero.id === id);
    if (heroSelected) {
      return heroSelected;
    }
    return;
  }
}
