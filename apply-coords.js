/**
 * 将 school-coords.json 中的 GCJ-02 坐标写入 school-data.js（单次安全替换）
 */
const fs = require('fs');
const path = require('path');

const coords = JSON.parse(fs.readFileSync(path.join(__dirname, 'school-coords.json'), 'utf8'));
const file = path.join(__dirname, 'school-data.js');
let lines = fs.readFileSync(file, 'utf8').split('\n');

const coordIds = new Set(Object.keys(coords).filter(k => !k.startsWith('_')));
let updated = 0;

lines = lines.map(line => {
  const idMatch = line.match(/id:'([^']+)'/);
  if (!idMatch) return line;
  const id = idMatch[1];
  let out = line;

  if (coordIds.has(id)) {
    const c = coords[id];
    out = out.replace(
      /lat:[\d.]+,\s*lng:[\d.]+(?:,\s*coordSys:'gcj02')?/,
      `lat:${Number(c.lat).toFixed(6)}, lng:${Number(c.lng).toFixed(6)}, coordSys:'gcj02'`
    );
    updated++;
    return out;
  }

  if (!/coordSys:'gcj02'/.test(out) && /lat:[\d.]+,\s*lng:[\d.]+/.test(out)) {
    out = out.replace(
      /(lat:[\d.]+,\s*lng:[\d.]+)/,
      "$1, coordSys:'gcj02'"
    );
  }
  return out;
});

let content = lines.join('\n');
if (!content.includes("coordNote:")) {
  content = content.replace(
    /(sources: \[[\s\S]*?\])\n\};/,
    `$1,\n  coordSys: 'gcj02',\n  coordNote: 'lat/lng 为高德 GCJ-02，详见 school-coords.json'\n};`
  );
}

fs.writeFileSync(file, content);
console.log('Updated', updated, 'verified coords');
