export class MyHero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}
const myHero = new MyHero(
  42,
  'SkyDog',
  'Fetch any object at any distance',
  'Leslie Rollover'
);

console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
