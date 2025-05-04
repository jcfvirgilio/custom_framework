// scripts/pack.js
const tar = require('tar');
const path = require('path');
const fs = require('fs');

// Obtener raíz del proyecto
const rootDir = path.resolve(__dirname, '..');

// Leer package.json
const pkgPath = path.join(rootDir, 'package.json');
if (!fs.existsSync(pkgPath)) {
  console.error('❌ No se encontró package.json');
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

// Construir nombre del archivo .tgz
const outputFileName = `${pkg.name.replace('@', '').replace('/', '-')}-${pkg.version}.tgz`;
const outputFile = path.join(rootDir, outputFileName);

// Archivos a incluir
const files = ['package.json', 'README.md', 'dist'].filter((f) =>
  fs.existsSync(path.join(rootDir, f)),
);

tar
  .create(
    {
      gzip: true,
      file: outputFile,
      cwd: rootDir,
    },
    files,
  )
  .then(() => {
    console.log(`✅ Paquete generado: ${outputFileName}`);
  })
  .catch((err) => {
    console.error('❌ Error al empaquetar:', err);
  });
