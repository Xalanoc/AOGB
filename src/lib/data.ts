export interface Item {
  name: string;
  type: 'helmet' | 'chestplate' | 'boots' | 'amulet' | 'grease' | 'potion' | 'blood disease' | 'aura/focus' | 'fightingStyle';
  image: string;
  stats?: Stats;  
  effects?: string[];  
  rarity?: string;
}
