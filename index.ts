export default function(count: number, unitSingular: string, unitPlural: string) {
  return `${count} ${count === 1 ? unitSingular : unitPlural}`;
}
