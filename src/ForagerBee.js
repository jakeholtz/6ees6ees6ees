class ForagerBee extends HoneyMakerBee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
    this.elf = "l";
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
