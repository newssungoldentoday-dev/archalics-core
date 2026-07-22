// Open Source Management
const projects = require('../projects.json');
function audit() {
  console.log('Archa License Developer Projects - OSS Audit');
  console.log(`Manager: ${projects.manager} - ${projects.location}`);
  projects.showcase.forEach(p => {
    console.log(`[${p.id}] ${p.name} - ${p.management} - ${p.security} - Q:${p.quality}`);
  });
  console.log(`Total: ${projects.stats.totalProjects} | Avg Quality: ${projects.stats.avgQuality}`);
}
module.exports = { audit };
if (require.main === module) audit();
