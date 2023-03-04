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
          cost: 600,
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
    attackType: AttackType.Slash,
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
    connectedNodes: [24, 25, 37, 43, 44],
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
    connectedNodes: [36, 26, 38, 44, 45],
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
    connectedNodes: [37, 27, 28, 39, 45, 46],
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
    connectedNodes: [29, 30, 38, 40, 47, 48],
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
    connectedNodes: [31, 32, 39, 41, 49, 50],
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
    connectedNodes: [40, 33, 42, 50, 51],
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
    connectedNodes: [41, 34, 35, 51, 52],
    rank: 3,
  },
  {
    id: 43,
    name: 'Nobusuma Bow',
    attack: 171,
    attackType: AttackType.Direct,
    element: Element.Water,
    elementalAttack: 112,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 34,
        value: '15%',
      },
      {
        skillId: 49,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 50,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 68,
          cost: 4,
        },
        {
          materialId: 69,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 15,
        },
        {
          materialId: 70,
          cost: 2,
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
      y: 9,
    },
    connectedNodes: [36, 67],
    rank: 3,
  },
  {
    id: 44,
    name: 'Adamant Bow 2',
    attack: 245,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 34,
        value: '15%',
      },
      {
        skillId: 51,
        value: '50%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 32,
        value: '3%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 23,
          cost: 3,
        },
        {
          materialId: 71,
          cost: 2,
        },
        {
          materialId: 62,
          cost: 3,
        },
        {
          materialId: 70,
          cost: 4,
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
      y: 9,
    },
    connectedNodes: [36, 37, 53],
    rank: 3,
  },
  {
    id: 45,
    name: 'Summer Camellia Bow',
    attack: 179,
    attackType: AttackType.Direct,
    element: Element.Wind,
    elementalAttack: 112,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 52,
        value: '10%',
      },
      {
        skillId: 26,
        value: '15%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 11,
        value: '+3',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 72,
          cost: 3,
        },
        {
          materialId: 73,
          cost: 2,
        },
        {
          materialId: 74,
          cost: 4,
        },
        {
          materialId: 27,
          cost: 9,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 5,
      y: 9,
    },
    connectedNodes: [37, 38, 54],
    rank: 3,
  },
  {
    id: 46,
    name: 'Gleaming Corvid Bow',
    attack: 228,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 24,
        value: '15%',
      },
      {
        skillId: 30,
        value: '13%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 48,
        value: '12%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 75,
          cost: 3,
        },
        {
          materialId: 76,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 15,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 7,
      y: 9,
    },
    connectedNodes: [38, 55],
    rank: 4,
  },
  {
    id: 47,
    name: 'Red Plum Bow',
    attack: 209,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 24,
        value: '15%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 23,
        value: '3%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 77,
          cost: 3,
        },
        {
          materialId: 78,
          cost: 2,
        },
        {
          materialId: 74,
          cost: 3,
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
      x: 8,
      y: 9,
    },
    connectedNodes: [39, 56],
    rank: 3,
  },
  {
    id: 48,
    name: 'Vibrant Ivy Bow',
    attack: 175,
    attackType: AttackType.Direct,
    element: Element.Wood,
    elementalAttack: 112,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 53,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 14,
        value: '8%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 79,
          cost: 2,
        },
        {
          materialId: 80,
          cost: 5,
        },
        {
          materialId: 81,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 7,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 10,
      y: 9,
    },
    connectedNodes: [39, 64, 71],
    rank: 3,
  },
  {
    id: 49,
    name: 'Adamant Bow',
    attack: 238,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: -10,
    inherentSkills: [
      {
        skillId: 13,
        value: '+1',
      },
      {
        skillId: 52,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 10,
        value: '3%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 82,
          cost: 3,
        },
        {
          materialId: 71,
          cost: 2,
        },
        {
          materialId: 83,
          cost: 2,
        },
        {
          materialId: 2,
          cost: 15,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 11,
      y: 9,
    },
    connectedNodes: [40, 57],
    rank: 3,
  },
  {
    id: 50,
    name: 'Scarlet Doom Bow',
    attack: 205,
    attackType: AttackType.Direct,
    element: Element.Fire,
    elementalAttack: 140,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 54,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 6,
        value: '3%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 84,
          cost: 4,
        },
        {
          materialId: 85,
          cost: 1,
        },
        {
          materialId: 86,
          cost: 2,
        },
        {
          materialId: 87,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 13,
      y: 9,
    },
    connectedNodes: [40, 41, 51, 74],
    rank: 4,
  },
  {
    id: 51,
    name: 'Wire Bow',
    attack: 315,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 55,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 4,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 88,
          cost: 4,
        },
        {
          materialId: 89,
          cost: 3,
        },
        {
          materialId: 90,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 15,
      y: 9,
    },
    connectedNodes: [41, 42, 50, 58],
    rank: 4,
  },
  {
    id: 52,
    name: 'Rocky Bow: Himorogi',
    attack: 180,
    attackType: AttackType.Direct,
    element: Element.Earth,
    elementalAttack: 112,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 22,
        value: '25%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 56,
        value: '',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 26,
          cost: 2,
        },
        {
          materialId: 67,
          cost: 4,
        },
        {
          materialId: 2,
          cost: 15,
        },
        {
          materialId: 70,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 17,
      y: 9,
    },
    connectedNodes: [42, 49],
    rank: 3,
  },
  {
    id: 53,
    name: 'Nobusuma Bow 2',
    attack: 277,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 13,
        value: '+1',
      },
      {
        skillId: 42,
        value: '12%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 18,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 91,
          cost: 5,
        },
        {
          materialId: 69,
          cost: 1,
        },
        {
          materialId: 92,
          cost: 4,
        },
        {
          materialId: 87,
          cost: 4,
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
      y: 10,
    },
    connectedNodes: [44, 60, 67],
    rank: 3,
  },
  {
    id: 54,
    name: 'Depluming Bow',
    attack: 176,
    attackType: AttackType.Direct,
    element: Element.Wind,
    elementalAttack: 117,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 56,
        value: '',
      },
      {
        skillId: 26,
        value: '15%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 57,
        value: '10%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 14,
          cost: 2,
        },
        {
          materialId: 93,
          cost: 3,
        },
        {
          materialId: 94,
          cost: 4,
        },
        {
          materialId: 70,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 5,
      y: 10,
    },
    connectedNodes: [45, 61, 70],
    rank: 3,
  },
  {
    id: 55,
    name: 'Parhelion Bow',
    attack: 283,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 57,
        value: '20%',
      },
      {
        skillId: 38,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 7,
        value: '3%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 96,
          cost: 3,
        },
        {
          materialId: 97,
          cost: 2,
        },
        {
          materialId: 98,
          cost: 1,
        },
        {
          materialId: 2,
          cost: 15,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 7,
      y: 10,
    },
    connectedNodes: [46, 56, 62],
    rank: 4,
  },
  {
    id: 56,
    name: 'Amber Bow',
    attack: 250,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 58,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 47,
        value: '18%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 99,
          cost: 2,
        },
        {
          materialId: 100,
          cost: 5,
        },
        {
          materialId: 101,
          cost: 2,
        },
        {
          materialId: 70,
          cost: 2,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 8,
      y: 10,
    },
    connectedNodes: [55, 47, 63],
    rank: 3,
  },
  {
    id: 57,
    name: 'Azuma Bow',
    attack: 281,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: -20,
    inherentSkills: [
      {
        skillId: 55,
        value: '10%',
      },
      {
        skillId: 30,
        value: '13%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 59,
        value: '',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 26,
          cost: 2,
        },
        {
          materialId: 67,
          cost: 4,
        },
        {
          materialId: 2,
          cost: 15,
        },
        {
          materialId: 70,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 11,
      y: 10,
    },
    connectedNodes: [49, 65, 74],
    rank: 3,
  },
  {
    id: 58,
    name: 'Summit Storm Bow',
    attack: 310,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 10,
    inherentSkills: [
      {
        skillId: 60,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 29,
        value: '3%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 59,
          cost: 4,
        },
        {
          materialId: 102,
          cost: 3,
        },
        {
          materialId: 103,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 15,
      y: 10,
    },
    connectedNodes: [51, 66, 76],
    rank: 4,
  },
  {
    id: 59,
    name: 'Spinous Bow',
    attack: 207,
    attackType: AttackType.Direct,
    element: Element.Earth,
    elementalAttack: 112,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 45,
        value: '40%',
      },
      {
        skillId: 8,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 18,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 104,
          cost: 3,
        },
        {
          materialId: 103,
          cost: 2,
        },
        {
          materialId: 26,
          cost: 3,
        },
        {
          materialId: 27,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 17,
      y: 10,
    },
    connectedNodes: [52, 76],
    rank: 4,
  },
  {
    id: 60,
    name: 'Rebirth Bow',
    attack: 370,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 33,
        value: '',
      },
      {
        skillId: 25,
        value: '+12',
      },
    ],
    inheritedSkills: [
      {
        skillId: 8,
        value: '6%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 105,
          cost: 2,
        },
        {
          materialId: 106,
          cost: 3,
        },
        {
          materialId: 107,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 3,
      y: 11,
    },
    connectedNodes: [53, 68],
    rank: 4,
  },
  {
    id: 61,
    name: 'Sasanqua Bow',
    attack: 191,
    attackType: AttackType.Direct,
    element: Element.Wind,
    elementalAttack: 112,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 15,
        value: '20%',
      },
      {
        skillId: 8,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 40,
        value: '40%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 108,
          cost: 3,
        },
        {
          materialId: 109,
          cost: 4,
        },
        {
          materialId: 110,
          cost: 2,
        },
        {
          materialId: 70,
          cost: 2,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 5,
      y: 11,
    },
    connectedNodes: [54, 69],
    rank: 4,
  },
  {
    id: 62,
    name: 'Great Yata Bow',
    attack: 283,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 10,
    inherentSkills: [
      {
        skillId: 14,
        value: '25%',
      },
      {
        skillId: 39,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 61,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 97,
          cost: 2,
        },
        {
          materialId: 76,
          cost: 3,
        },
        {
          materialId: 26,
          cost: 5,
        },
        {
          materialId: 70,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 7,
      y: 11,
    },
    connectedNodes: [55, 70],
    rank: 4,
  },
  {
    id: 63,
    name: 'Winter Camellia Bow',
    attack: 257,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 10,
    inherentSkills: [
      {
        skillId: 48,
        value: '20%',
      },
      {
        skillId: 62,
        value: '+100',
      },
    ],
    inheritedSkills: [
      {
        skillId: 37,
        value: '30%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 108,
          cost: 4,
        },
        {
          materialId: 111,
          cost: 4,
        },
        {
          materialId: 74,
          cost: 5,
        },
        {
          materialId: 70,
          cost: 2,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 8,
      y: 11,
    },
    connectedNodes: [56, 71],
    rank: 4,
  },
  {
    id: 64,
    name: 'Fungal Bow',
    attack: 200,
    attackType: AttackType.Direct,
    element: Element.Wood,
    elementalAttack: 112,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 63,
        value: '20%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 17,
        value: '12%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 113,
          cost: 4,
        },
        {
          materialId: 89,
          cost: 4,
        },
        {
          materialId: 90,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 10,
      y: 11,
    },
    connectedNodes: [48, 72],
    rank: 4,
  },
  {
    id: 65,
    name: 'Azuma Bow 2',
    attack: 266,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 25,
        value: '+12',
      },
      {
        skillId: 22,
        value: '25%',
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
          materialId: 26,
          cost: 2,
        },
        {
          materialId: 67,
          cost: 4,
        },
        {
          materialId: 2,
          cost: 15,
        },
        {
          materialId: 70,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 1000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 11,
      y: 11,
    },
    connectedNodes: [57, 73],
    rank: 3,
  },
  {
    id: 66,
    name: 'Phoenix Bow: A Thousand Bolts',
    attack: 370,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 61,
        value: '20%',
      },
      {
        skillId: 11,
        value: '+20',
      },
    ],
    inheritedSkills: [
      {
        skillId: 4,
        value: '4%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 114,
          cost: 3,
        },
        {
          materialId: 115,
          cost: 2,
        },
        {
          materialId: 116,
          cost: 1,
        },
        {
          materialId: 70,
          cost: 2,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 15,
      y: 11,
    },
    connectedNodes: [58, 75],
    rank: 4,
  },
  {
    id: 67,
    name: 'Narcissus Bow',
    attack: 248,
    attackType: AttackType.Direct,
    element: Element.Water,
    elementalAttack: 140,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 64,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 20,
        value: '45%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 117,
          cost: 3,
        },
        {
          materialId: 106,
          cost: 3,
        },
        {
          materialId: 107,
          cost: 1,
        },
        {
          materialId: 27,
          cost: 9,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 1,
      y: 12,
    },
    connectedNodes: [43, 53, 77, 82],
    rank: 4,
  },
  {
    id: 68,
    name: 'Dog Star Bow: Fine Snow',
    attack: 300,
    attackType: AttackType.Slash,
    element: Element.None,
    elementalAttack: 0,
    critChance: 25,
    inherentSkills: [
      {
        skillId: 37,
        value: '40%',
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
          materialId: 118,
          cost: 4,
        },
        {
          materialId: 119,
          cost: 2,
        },
        {
          materialId: 45,
          cost: 5,
        },
        {
          materialId: 70,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 3,
      y: 12,
    },
    connectedNodes: [60, 69, 77],
    rank: 4,
  },
  {
    id: 69,
    name: 'Night Call Bow',
    attack: 245,
    attackType: AttackType.Direct,
    element: Element.Wind,
    elementalAttack: 140,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 5,
        value: '20%',
      },
      {
        skillId: 65,
        value: '20%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 6,
        value: '3%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 49,
          cost: 3,
        },
        {
          materialId: 120,
          cost: 1,
        },
        {
          materialId: 121,
          cost: 3,
        },
        {
          materialId: 27,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 5,
      y: 12,
    },
    connectedNodes: [68, 61, 78],
    rank: 4,
  },
  {
    id: 70,
    name: 'Moonlit Bow',
    attack: 293,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 10,
    inherentSkills: [
      {
        skillId: 61,
        value: '20%',
      },
      {
        skillId: 38,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 39,
        value: '6%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 48,
          cost: 3,
        },
        {
          materialId: 122,
          cost: 2,
        },
        {
          materialId: 123,
          cost: 1,
        },
        {
          materialId: 27,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 7,
      y: 12,
    },
    connectedNodes: [62, 54, 78],
    rank: 4,
  },
  {
    id: 71,
    name: 'Ice Crystal Arc',
    attack: 387,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 56,
        value: '',
      },
      {
        skillId: 51,
        value: '50%',
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
          materialId: 124,
          cost: 2,
        },
        {
          materialId: 53,
          cost: 3,
        },
        {
          materialId: 125,
          cost: 2,
        },
        {
          materialId: 27,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 8,
      y: 12,
    },
    connectedNodes: [63, 79, 48],
    rank: 4,
  },
  {
    id: 72,
    name: 'Void Bow: Phoenix',
    attack: 250,
    attackType: AttackType.Direct,
    element: Element.Wood,
    elementalAttack: 140,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 11,
        value: '+20',
      },
    ],
    inheritedSkills: [
      {
        skillId: 14,
        value: '8%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 126,
          cost: 4,
        },
        {
          materialId: 127,
          cost: 4,
        },
        {
          materialId: 128,
          cost: 5,
        },
        {
          materialId: 70,
          cost: 2,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 10,
      y: 12,
    },
    connectedNodes: [64, 73, 79],
    rank: 4,
  },
  {
    id: 73,
    name: 'Scarlet Doom Bow 2',
    attack: 420,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 66,
        value: '20%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 15,
        value: '6%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 129,
          cost: 5,
        },
        {
          materialId: 130,
          cost: 3,
        },
        {
          materialId: 131,
          cost: 5,
        },
        {
          materialId: 87,
          cost: 5,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 11,
      y: 12,
    },
    connectedNodes: [65, 72, 80],
    rank: 4,
  },
  {
    id: 74,
    name: 'Sapphire Bow',
    attack: 205,
    attackType: AttackType.Direct,
    element: Element.Fire,
    elementalAttack: 168,
    critChance: 20,
    inherentSkills: [
      {
        skillId: 54,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 9,
        value: '9%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 54,
          cost: 3,
        },
        {
          materialId: 55,
          cost: 5,
        },
        {
          materialId: 132,
          cost: 3,
        },
        {
          materialId: 70,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 13,
      y: 12,
    },
    connectedNodes: [50, 57, 80],
    rank: 4,
  },
  {
    id: 75,
    name: 'Silica Bow',
    attack: 390,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 20,
    inherentSkills: [
      {
        skillId: 42,
        value: '15%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 57,
        value: '10%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 133,
          cost: 2,
        },
        {
          materialId: 134,
          cost: 2,
        },
        {
          materialId: 135,
          cost: 3,
        },
        {
          materialId: 70,
          cost: 8,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 15,
      y: 12,
    },
    connectedNodes: [66, 81],
    rank: 4,
  },
  {
    id: 76,
    name: 'Agate Bow',
    attack: 270,
    attackType: AttackType.Direct,
    element: Element.Earth,
    elementalAttack: 140,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 39,
        value: '10%',
      },
      {
        skillId: 67,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 61,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 136,
          cost: 2,
        },
        {
          materialId: 135,
          cost: 2,
        },
        {
          materialId: 137,
          cost: 1,
        },
        {
          materialId: 27,
          cost: 20,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 17,
      y: 12,
    },
    connectedNodes: [59, 58, 81],
    rank: 4,
  },
  {
    id: 77,
    name: 'Nacreous Icicle Bow',
    attack: 294,
    attackType: AttackType.Direct,
    element: Element.Water,
    elementalAttack: 196,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 46,
        value: '',
      },
      {
        skillId: 56,
        value: '',
      },
    ],
    inheritedSkills: [
      {
        skillId: 52,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 138,
          cost: 5,
        },
        {
          materialId: 139,
          cost: 4,
        },
        {
          materialId: 26,
          cost: 3,
        },
        {
          materialId: 2,
          cost: 20,
        },
        {
          materialId: 1,
          cost: 3000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 2,
      y: 13,
    },
    connectedNodes: [67, 68, 83],
    rank: 5,
  },
  {
    id: 78,
    name: 'Tempest Bow: Skanda',
    attack: 455,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 57,
        value: '20%',
      },
      {
        skillId: 59,
        value: '',
      },
    ],
    inheritedSkills: [
      {
        skillId: 61,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 140,
          cost: 2,
        },
        {
          materialId: 141,
          cost: 4,
        },
        {
          materialId: 142,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 4000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 6,
      y: 13,
    },
    connectedNodes: [69, 70, 84],
    rank: 6,
  },
  {
    id: 79,
    name: 'Phoenix Bow: Wild Squall',
    attack: 391,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 61,
        value: '20%',
      },
      {
        skillId: 39,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 27,
        value: '6%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 115,
          cost: 2,
        },
        {
          materialId: 127,
          cost: 3,
        },
        {
          materialId: 143,
          cost: 2,
        },
        {
          materialId: 70,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 3000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 9,
      y: 13,
    },
    connectedNodes: [71, 72, 85],
    rank: 5,
  },
  {
    id: 80,
    name: 'Blaze Bow: Mythical Bird',
    attack: 462,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 35,
        value: '',
      },
      {
        skillId: 68,
        value: '',
      },
    ],
    inheritedSkills: [
      {
        skillId: 69,
        value: '10%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 144,
          cost: 4,
        },
        {
          materialId: 145,
          cost: 5,
        },
        {
          materialId: 146,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 4000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 12,
      y: 13,
    },
    connectedNodes: [73, 74, 86],
    rank: 6,
  },
  {
    id: 81,
    name: 'Agate Bow 2',
    attack: 293,
    attackType: AttackType.Direct,
    element: Element.Earth,
    elementalAttack: 196,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 15,
        value: '20%',
      },
      {
        skillId: 70,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 71,
        value: '15%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 134,
          cost: 2,
        },
        {
          materialId: 136,
          cost: 2,
        },
        {
          materialId: 137,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 8,
        },
        {
          materialId: 1,
          cost: 3000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 16,
      y: 13,
    },
    connectedNodes: [75, 76, 87],
    rank: 5,
  },
  {
    id: 82,
    name: "Bow of Nature's Splendor 5",
    attack: 403,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 72,
        value: '10%',
      },
      {
        skillId: 73,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 20,
        value: '45%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 147,
          cost: 4,
        },
        {
          materialId: 148,
          cost: 3,
        },
        {
          materialId: 149,
          cost: 6,
        },
        {
          materialId: 70,
          cost: 15,
        },
        {
          materialId: 1,
          cost: 2000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 1,
      y: 14,
    },
    connectedNodes: [67, 83, 88],
    rank: 4,
  },
  {
    id: 83,
    name: "Frost Bow: Blizzard's Flurry",
    attack: 270,
    attackType: AttackType.Direct,
    element: Element.Water,
    elementalAttack: 196,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 64,
        value: '10%',
      },
      {
        skillId: 48,
        value: '20%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 5,
        value: '12%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 150,
          cost: 3,
        },
        {
          materialId: 151,
          cost: 2,
        },
        {
          materialId: 152,
          cost: 2,
        },
        {
          materialId: 70,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 3000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 2,
      y: 14,
    },
    connectedNodes: [82, 77, 88],
    rank: 5,
  },
  {
    id: 84,
    name: 'Tempest Bow: Skanda 2',
    attack: 315,
    attackType: AttackType.Direct,
    element: Element.Wind,
    elementalAttack: 196,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 46,
        value: '',
      },
      {
        skillId: 74,
        value: '',
      },
    ],
    inheritedSkills: [
      {
        skillId: 75,
        value: '5%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 153,
          cost: 3,
        },
        {
          materialId: 154,
          cost: 4,
        },
        {
          materialId: 142,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 4000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 6,
      y: 14,
    },
    connectedNodes: [78, 85, 88],
    rank: 6,
  },
  {
    id: 85,
    name: 'Ice Crystal Arc 2',
    attack: 294,
    attackType: AttackType.Direct,
    element: Element.Wood,
    elementalAttack: 196,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 53,
        value: '10%',
      },
      {
        skillId: 76,
        value: '',
      },
    ],
    inheritedSkills: [
      {
        skillId: 43,
        value: '38%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 138,
          cost: 3,
        },
        {
          materialId: 124,
          cost: 2,
        },
        {
          materialId: 155,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 4,
        },
        {
          materialId: 1,
          cost: 3000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 9,
      y: 14,
    },
    connectedNodes: [84, 79, 89],
    rank: 5,
  },
  {
    id: 86,
    name: 'Firebird Bow: Homusubi',
    attack: 315,
    attackType: AttackType.Direct,
    element: Element.Fire,
    elementalAttack: 196,
    critChance: 5,
    inherentSkills: [
      {
        skillId: 65,
        value: '20%',
      },
      {
        skillId: 11,
        value: '+20',
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
          materialId: 156,
          cost: 4,
        },
        {
          materialId: 157,
          cost: 4,
        },
        {
          materialId: 146,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 6,
        },
        {
          materialId: 1,
          cost: 4000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 12,
      y: 14,
    },
    connectedNodes: [80, 87, 89],
    rank: 6,
  },
  {
    id: 87,
    name: 'Wrack Bow: Rashoumon',
    attack: 298,
    attackType: AttackType.Direct,
    element: Element.Earth,
    elementalAttack: 196,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 35,
        value: '',
      },
      {
        skillId: 27,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 21,
        value: '15%',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 132,
          cost: 2,
        },
        {
          materialId: 158,
          cost: 1,
        },
        {
          materialId: 58,
          cost: 5,
        },
        {
          materialId: 87,
          cost: 2,
        },
        {
          materialId: 1,
          cost: 3000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 16,
      y: 14,
    },
    connectedNodes: [81, 86, 89],
    rank: 5,
  },
  {
    id: 88,
    name: 'Ame-no-aka',
    attack: 455,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 14,
        value: '25%',
      },
      {
        skillId: 77,
        value: '30%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 74,
        value: '',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 159,
          cost: 4,
        },
        {
          materialId: 160,
          cost: 2,
        },
        {
          materialId: 161,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 4000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 5,
      y: 16,
    },
    connectedNodes: [82, 83, 84],
    rank: 6,
  },
  {
    id: 89,
    name: 'Ame-no-haji',
    attack: 455,
    attackType: AttackType.Direct,
    element: Element.None,
    elementalAttack: 0,
    critChance: 0,
    inherentSkills: [
      {
        skillId: 67,
        value: '10%',
      },
      {
        skillId: 50,
        value: '10%',
      },
    ],
    inheritedSkills: [
      {
        skillId: 68,
        value: '',
      },
    ],
    recipe: {
      materials: [
        {
          materialId: 162,
          cost: 4,
        },
        {
          materialId: 163,
          cost: 4,
        },
        {
          materialId: 161,
          cost: 1,
        },
        {
          materialId: 87,
          cost: 10,
        },
        {
          materialId: 1,
          cost: 4000,
        },
      ],
    },
    skillSlots: 4,
    position: {
      x: 13,
      y: 16,
    },
    connectedNodes: [85, 86, 87],
    rank: 6,
  },
];
