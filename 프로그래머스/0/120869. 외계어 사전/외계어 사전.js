function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    const found = dic.some((word) => [...word].sort().join('') === sortedSpell);
    
    return found ? 1 : 2;
}