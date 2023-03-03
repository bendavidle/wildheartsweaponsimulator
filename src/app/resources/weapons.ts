export interface Weapon {
  id: number;
  name: string;
  weaponType: WeaponType;
}

export interface WeaponSkill {
  skillId: number;
  value: string;
}

export interface MaterialCost {
  materialId: number;
  cost: number;
}

export interface Recipe {
  materials: MaterialCost[];
}

export enum AttackType {
  Slash,
  Blunt,
  Direct,
}

export enum Element {
  Wood,
  Fire,
  Water,
  Wind,
  Earth,
  None,
}

export enum WeaponType {
  Katana,
  Nodachi,
  Bow,
  Maul,
  Wagasa,
  Claw,
  Staff,
  Cannon,
}

export interface Position {
  x: number;
  y: number;
}

export interface WeaponNode {
  id: number;
  name: string;
  attack: number;
  attackType: AttackType;
  element: Element;
  elementalAttack: number;
  critChance: number;
  inherentSkills: WeaponSkill[];
  inheritedSkills: WeaponSkill[];
  skillSlots: number;
  recipe: Recipe;
  position: Position;
  connectedNodes: number[];
  rank: number;
}

export const weapons: Weapon[] = [
  {
    id: 1,
    name: 'Karakuri Katana',
    weaponType: WeaponType.Katana,
  },
  {
    id: 2,
    name: 'Nodachi',
    weaponType: WeaponType.Nodachi,
  },
  {
    id: 3,
    name: 'Bow',
    weaponType: WeaponType.Bow,
  },
  {
    id: 4,
    name: 'Maul',
    weaponType: WeaponType.Maul,
  },
  {
    id: 5,
    name: 'Bladed Wagasa',
    weaponType: WeaponType.Wagasa,
  },
  {
    id: 6,
    name: 'Claw Blade',
    weaponType: WeaponType.Claw,
  },
  {
    id: 7,
    name: 'Karakuri Staff',
    weaponType: WeaponType.Staff,
  },
  {
    id: 8,
    name: 'Cannon',
    weaponType: WeaponType.Cannon,
  },
];

export const BowNodes: WeaponNode[] = [
  {
    id: 1,
    name: 'Hunting Bow',
    attack: 35,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [],
    inheritedSkills: [],
    recipe: {
      materials: [
        {
          materialId: 2,
          cost: 1,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 0,
    position: {
      x: 9,
      y: 1,
    },
    connectedNodes: [2, 3, 4, 5],
    rank: 1,
  },
  {
    id: 2,
    name: 'Edgestone Bow',
    attack: 56,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [],
    inheritedSkills: [],
    recipe: {
      materials: [
        {
          materialId: 2,
          cost: 3,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 4,
      y: 1,
    },
    connectedNodes: [1, 7, 8, 9, 10, 26],
    rank: 1,
  },
  {
    id: 3,
    name: 'Edgestone Bow 2',
    attack: 56,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [],
    inheritedSkills: [],
    recipe: {
      materials: [
        {
          materialId: 2,
          cost: 3,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 14,
      y: 1,
    },
    connectedNodes: [1, 13, 14, 15, 16, 33],
    rank: 1,
  },
  {
    id: 4,
    name: 'First Bloom Bow',
    attack: 60,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [],
    inheritedSkills: [
      {
        skillId: 1,
        value: '+1',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 2,
          cost: 1,
        },
        {
          materialId: 3,
          cost: 1,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 1,
    position: {
      x: 9,
      y: 3,
    },
    connectedNodes: [1, 5, 6],
    rank: 1,
  },
  {
    id: 5,
    name: 'Aromatic Plum Bow',
    attack: 61,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [],
    inheritedSkills: [
      {
        skillId: 2,
        value: '3%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 4,
          cost: 1,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 1,
    position: {
      x: 10,
      y: 3,
    },
    connectedNodes: [4, 12],
    rank: 1,
  },
  {
    id: 6,
    name: 'Intoxicating Birch Bow',
    attack: 68,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 3,
        value: '25%',
      },
    ],
    inheritedSkills: [],
    recipe: {
      materials: [
        {
          materialId: 5,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 1,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 8,
      y: 3,
    },
    connectedNodes: [4, 11],
    rank: 1,
  },
  {
    id: 7,
    name: 'Freshet Bow',
    attack: 61,
    attackType: AttackType.Direct,
    element: Element.Water,
    elementalAttack: 56,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 4,
        value: '8%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 5,
        value: '8%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 6,
          cost: 1,
        },
        {
          materialId: 7,
          cost: 5,
        },
        {
          materialId: 2,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 1,
      y: 4,
    },
    connectedNodes: [2, 17],
    rank: 1,
  },
  {
    id: 8,
    name: 'Ripple Bow 2',
    attack: 126,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 6,
        value: '4%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 7,
        value: '2%',
      },
      {
        skillId: 8,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 8,
          cost: 3,
        },
        {
          materialId: 9,
          cost: 2,
        },
        {
          materialId: 10,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 3,
      y: 4,
    },
    connectedNodes: [2, 24, 25],
    rank: 1,
  },
  {
    id: 9,
    name: 'Intoxicating Birch Bow 2',
    attack: 68,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 9,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 10,
        value: '2%',
      },
      {
        skillId: 11,
        value: '+2',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 11,
          cost: 3,
        },
        {
          materialId: 12,
          cost: 3,
        },
        {
          materialId: 13,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 1,
    position: {
      x: 5,
      y: 4,
    },
    connectedNodes: [2, 27, 28],
    rank: 1,
  },
  {
    id: 10,
    name: 'Sal Tree Bow',
    attack: 64,
    attackType: AttackType.Direct,
    element: Element.Wind,
    elementalAttack: 56,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 12,
        value: '60%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 13,
        value: '+1',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 14,
          cost: 1,
        },
        {
          materialId: 15,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 7,
      y: 4,
    },
    connectedNodes: [2, 11, 18],
    rank: 1,
  },
  {
    id: 11,
    name: 'Creeping Vine Bow',
    attack: 72,
    attackType: AttackType.Direct,
    element: Element.Wood,
    elementalAttack: 16,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 14,
        value: '13%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 15,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 16,
          cost: 1,
        },
        {
          materialId: 17,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 1,
    position: {
      x: 8,
      y: 4,
    },
    connectedNodes: [6, 10, 12, 19],
    rank: 1,
  },
  {
    id: 12,
    name: 'Aromatic Plum Bow 2',
    attack: 67,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 16,
        value: '25%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 2,
        value: '3%',
      },
      {
        skillId: 17,
        value: '8%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 18,
          cost: 3,
        },
        {
          materialId: 19,
          cost: 3,
        },
        {
          materialId: 20,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 3,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 1,
    position: {
      x: 10,
      y: 4,
    },
    connectedNodes: [5, 11, 20],
    rank: 1,
  },
  {
    id: 13,
    name: 'Wrack Bow: Rhododendron',
    attack: 74,
    attackType: AttackType.Direct,
    element: Element.Fire,
    elementalAttack: 56,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 18,
        value: '5%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 19,
        value: '17%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 21,
          cost: 1,
        },
        {
          materialId: 22,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 11,
      y: 4,
    },
    connectedNodes: [3, 21, 22],
    rank: 1,
  },
  {
    id: 14,
    name: 'Ripple Bow',
    attack: 111,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: -10,
    inherentSkills: [
      {
        skillId: 3,
        value: '25%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 20,
        value: '30%',
      },
      {
        skillId: 21,
        value: '10%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 23,
          cost: 1,
        },
        {
          materialId: 9,
          cost: 1,
        },
        {
          materialId: 24,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 1,
    position: {
      x: 13,
      y: 4,
    },
    connectedNodes: [3, 22],
    rank: 1,
  },
  {
    id: 15,
    name: 'Rocky Bow: Earth Shaker',
    attack: 78,
    attackType: AttackType.Direct,
    element: Element.Earth,
    elementalAttack: 56,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 22,
        value: '13%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 23,
        value: '2%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 25,
          cost: 7,
        },
        {
          materialId: 26,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 8,
        },
        {
          materialId: 27,
          cost: 8,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 15,
      y: 4,
    },
    connectedNodes: [3, 23],
    rank: 1,
  },
  {
    id: 16,
    name: 'Clove Bow',
    attack: 164,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 24,
        value: '8%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 4,
        value: '6%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 28,
          cost: 2,
        },
        {
          materialId: 29,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 17,
      y: 4,
    },
    connectedNodes: [3, 34, 35],
    rank: 2,
  },
  {
    id: 17,
    name: 'Silver Thaw Bow',
    attack: 118,
    attackType: AttackType.Direct,
    element: Element.Water,
    elementalAttack: 84,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 25,
        value: '+6',
      },
    ],
    inheritedSkills: [
      {
        skillId: 22,
        value: '13%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 30,
          cost: 3,
        },
        {
          materialId: 31,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 1,
      y: 5,
    },
    connectedNodes: [7, 24],
    rank: 2,
  },
  {
    id: 18,
    name: 'Sal Tree Bow 2',
    attack: 95,
    attackType: AttackType.Direct,
    element: Element.Wind,
    elementalAttack: 84,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 26,
        value: '8%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 27,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 15,
          cost: 5,
        },
        {
          materialId: 25,
          cost: 4,
        },
        {
          materialId: 2,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 7,
      y: 5,
    },
    connectedNodes: [10, 28],
    rank: 1,
  },
  {
    id: 19,
    name: 'Herbal Bow',
    attack: 93,
    attackType: AttackType.Direct,
    element: Element.Wood,
    elementalAttack: 84,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 28,
        value: '25%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 12,
        value: '40%',
      },
      {
        skillId: 27,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 28,
          cost: 3,
        },
        {
          materialId: 33,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 8,
      y: 5,
    },
    connectedNodes: [11, 29],
    rank: 2,
  },
  {
    id: 20,
    name: 'Intoxicating Birch Bow 3',
    attack: 105,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 28,
        value: '25%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 29,
        value: '2%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 11,
          cost: 5,
        },
        {
          materialId: 12,
          cost: 5,
        },
        {
          materialId: 34,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 100,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 10,
      y: 5,
    },
    connectedNodes: [12, 30],
    rank: 1,
  },
  {
    id: 21,
    name: 'Wrack Bow: Rhododendron 2',
    attack: 105,
    attackType: AttackType.Direct,
    element: Element.Fire,
    elementalAttack: 84,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 30,
        value: '7%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 31,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 22,
          cost: 1,
        },
        {
          materialId: 35,
          cost: 1,
        },
        {
          materialId: 36,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 20,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 11,
      y: 5,
    },
    connectedNodes: [13, 31],
    rank: 1,
  },
  {
    id: 22,
    name: 'Ripple Bow 3',
    attack: 130,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: -10,
    inherentSkills: [
      {
        skillId: 16,
        value: '25%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 32,
        value: '2%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 8,
          cost: 2,
        },
        {
          materialId: 37,
          cost: 2,
        },
        {
          materialId: 25,
          cost: 3,
        },
        {
          materialId: 27,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 13,
      y: 5,
    },
    connectedNodes: [13, 14, 32],
    rank: 1,
  },
  {
    id: 23,
    name: 'Demon Grass Bow',
    attack: 96,
    attackType: AttackType.Direct,
    element: Element.Earth,
    elementalAttack: 84,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 33,
        value: '',
      },
    ],
    inheritedSkills: [
      {
        skillId: 34,
        value: '10%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 38,
          cost: 2,
        },
        {
          materialId: 39,
          cost: 3,
        },
        {
          materialId: 40,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 15,
      y: 5,
    },
    connectedNodes: [15, 34],
    rank: 2,
  },
  {
    id: 24,
    name: 'Dog Star Bow',
    attack: 161,
    attackType: AttackType.Direct,
    element: Element.Water,
    elementalAttack: 112,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 35,
        value: '',
      },
    ],
    inheritedSkills: [
      {
        skillId: 36,
        value: '+2',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 41,
          cost: 2,
        },
        {
          materialId: 42,
          cost: 4,
        },
        {
          materialId: 43,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 12,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 1,
      y: 6,
    },
    connectedNodes: [17, 8, 36],
    rank: 2,
  },
  {
    id: 25,
    name: 'Ice Bow: Celestial Shot',
    attack: 165,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 25,
    inherentSkills: [
      {
        skillId: 37,
        value: '20%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 4,
        value: '2%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 44,
          cost: 2,
        },
        {
          materialId: 42,
          cost: 4,
        },
        {
          materialId: 45,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 12,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 3,
      y: 6,
    },
    connectedNodes: [8, 36, 26],
    rank: 2,
  },
  {
    id: 26,
    name: 'Edgestone Bow 3',
    attack: 123,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 25,
        value: '+6',
      },
    ],
    inheritedSkills: [],
    recipe: {
      materials: [
        {
          materialId: 25,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 4,
      y: 6,
    },
    connectedNodes: [2, 37, 25, 27],
    rank: 1,
  },
  {
    id: 27,
    name: 'Twilight Bow',
    attack: 134,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 10,
    inherentSkills: [
      {
        skillId: 38,
        value: '5%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 39,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 46,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 8,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 5,
      y: 6,
    },
    connectedNodes: [9, 26, 38],
    rank: 2,
  },
  {
    id: 28,
    name: 'Waxing Crescent Bow',
    attack: 97,
    attackType: AttackType.Direct,
    element: Element.Wind,
    elementalAttack: 84,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 40,
        value: '60%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 41,
        value: '10%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 48,
          cost: 1,
        },
        {
          materialId: 49,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 2,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 7,
      y: 6,
    },
    connectedNodes: [9, 18, 38],
    rank: 2,
  },
  {
    id: 29,
    name: 'Creeping Vine Bow 2',
    attack: 97,
    attackType: AttackType.Direct,
    element: Element.Wood,
    elementalAttack: 84,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 15,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 42,
        value: '10%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 50,
          cost: 3,
        },
        {
          materialId: 51,
          cost: 5,
        },
        {
          materialId: 52,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 8,
      y: 6,
    },
    connectedNodes: [19, 39],
    rank: 2,
  },
  {
    id: 30,
    name: 'Piercing Iceshard',
    attack: 175,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 43,
        value: '25%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 44,
        value: '',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 30,
          cost: 3,
        },
        {
          materialId: 53,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 10,
      y: 6,
    },
    connectedNodes: [20, 31, 39],
    rank: 2,
  },
  {
    id: 31,
    name: 'Ember Bow',
    attack: 119,
    attackType: AttackType.Direct,
    element: Element.Fire,
    elementalAttack: 84,
    critChance: -10,
    inherentSkills: [
      {
        skillId: 6,
        value: '4%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 35,
        value: '',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 54,
          cost: 2,
        },
        {
          materialId: 55,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 11,
      y: 6,
    },
    connectedNodes: [21, 30, 40],
    rank: 2,
  },
  {
    id: 32,
    name: 'Yashima Bow',
    attack: 117,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: -20,
    inherentSkills: [
      {
        skillId: 46,
        value: '',
      },
    ],
    inheritedSkills: [
      {
        skillId: 45,
        value: '15%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 25,
          cost: 7,
        },
        {
          materialId: 26,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 8,
        },
        {
          materialId: 27,
          cost: 8,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 13,
      y: 6,
    },
    connectedNodes: [22, 33, 40],
    rank: 1,
  },
  {
    id: 33,
    name: 'Edgestone Bow 4',
    attack: 126,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 25,
        value: '+6',
      },
    ],
    inheritedSkills: [],
    recipe: {
      materials: [
        {
          materialId: 34,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 300,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 14,
      y: 6,
    },
    connectedNodes: [32, 3, 34, 41],
    rank: 1,
  },
  {
    id: 34,
    name: 'Wrack Bow: Balsam',
    attack: 117,
    attackType: AttackType.Direct,
    element: Element.Earth,
    elementalAttack: 84,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 9,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 46,
        value: '',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 56,
          cost: 3,
        },
        {
          materialId: 57,
          cost: 2,
        },
        {
          materialId: 58,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 20,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 3,
    position: {
      x: 15,
      y: 6,
    },
    connectedNodes: [23, 33, 16, 42],
    rank: 2,
  },
  {
    id: 35,
    name: 'Crystal Bow',
    attack: 166,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 10,
    inherentSkills: [
      {
        skillId: 47,
        value: '15%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 48,
        value: '8%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 59,
          cost: 2,
        },
        {
          materialId: 38,
          cost: 3,
        },
        {
          materialId: 40,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 600,
        },
      ],
    },
    skillSlots: 2,
    position: {
      x: 17,
      y: 6,
    },
    connectedNodes: [16, 42],
    rank: 2,
  },
  {
    id: 36,
    name: "Bow of Nature's Splendor",
    attack: 194,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [],
    inheritedSkills: [
      {
        skillId: 2,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 61,
          cost: 5,
        },
        {
          materialId: 60,
          cost: 4,
        },
        {
          materialId: 27,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 2,
      y: 8,
    },
    connectedNodes: [24, 25, 37],
    rank: 3,
  },
  {
    id: 37,
    name: "Bow of Nature's Splendor 2",
    attack: 189,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [],
    inheritedSkills: [],
    recipe: {
      materials: [
        {
          materialId: 62,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 27,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 5,
    position: {
      x: 4,
      y: 8,
    },
    connectedNodes: [36, 26, 38],
    rank: 3,
  },
  {
    id: 38,
    name: 'Balmy Breeze Bow',
    attack: 193,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [],
    inheritedSkills: [
      {
        skillId: 4,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 63,
          cost: 2,
        },
        {
          materialId: 7,
          cost: 5,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 6,
      y: 8,
    },
    connectedNodes: [37, 27, 28, 39],
    rank: 3,
  },
  {
    id: 39,
    name: 'Icy Crescent Bow',
    attack: 193,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [],
    inheritedSkills: [
      {
        skillId: 1,
        value: '+2',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 64,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 27,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 9,
      y: 8,
    },
    connectedNodes: [29, 30, 38, 40],
    rank: 3,
  },
  {
    id: 40,
    name: 'Withering Bough Bow',
    attack: 193,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [],
    inheritedSkills: [
      {
        skillId: 4,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 65,
          cost: 3,
        },
        {
          materialId: 66,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 12,
      y: 8,
    },
    connectedNodes: [31, 32, 39, 41],
    rank: 3,
  },
  {
    id: 41,
    name: "Bow of Nature's Splendor 3",
    attack: 190,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [],
    inheritedSkills: [],
    recipe: {
      materials: [
        {
          materialId: 67,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 10,
        },
        {
          materialId: 27,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 5,
    position: {
      x: 14,
      y: 8,
    },
    connectedNodes: [40, 33, 42],
    rank: 3,
  },
  {
    id: 42,
    name: "Bow of Nature's Splendor 4",
    attack: 192,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [],
    inheritedSkills: [
      {
        skillId: 2,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 66,
          cost: 3,
        },
        {
          materialId: 64,
          cost: 3,
        },
        {
          materialId: 27,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 16,
      y: 8,
    },
    connectedNodes: [41, 34, 35],
    rank: 3,
  },
];
