export interface Item {
  name: string;
  type: 'helmet' | 'chestplate' | 'boots' | 'amulet' | 'grease' | 'potion' | 'blood disease' | 'aura/focus' | 'fightingStyle';
  image: string;
  stats?: Stats;  // Sailor는 stats 없을 수 있음
  effects?: string[];  // 동적 효과 설명 배열 (선택)
  rarity?: string;
}
