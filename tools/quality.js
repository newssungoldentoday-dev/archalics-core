// Code Quality Pillar
const projects = require('../projects.json');
function score() {
  console.log('Archa License Developer Projects - Quality Engine');
  let total = 0;
  projects.showcase.forEach(p => {
    total += p.quality;
    const bar = '█'.repeat(Math.floor(p.quality/10));
    console.log(`[${p.id}] ${p.name.padEnd(25)} ${bar} ${p.quality}/100`);
  });
  console.log(`Average Quality: ${(total/6).toFixed(1)}/100`);
}
module.exports = { score };
if (require.main === module) score();
