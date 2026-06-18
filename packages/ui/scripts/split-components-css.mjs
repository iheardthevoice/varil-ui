/**
 * Splits themes/components.css into utilities + layer + overrides.
 * Keeps themes/components.css as re-export for @ui/lib/components.css consumers.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'themes/components.css')
const outDir = join(root, 'themes/components')

const source = readFileSync(sourcePath, 'utf8')
const layerStart = source.indexOf('@layer components {')
const layerEnd = source.lastIndexOf('\n}')

if (layerStart === -1 || layerEnd === -1) {
  console.error('Could not locate @layer components block')
  process.exit(1)
}

const header = source.slice(0, layerStart).trimEnd()
const layerBlock = source.slice(layerStart, layerEnd + 2).trim()
const unlayered = source.slice(layerEnd + 2).trim()

rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

writeFileSync(join(outDir, 'utilities.css'), `${header}\n`, 'utf8')
writeFileSync(join(outDir, 'layer.css'), `${layerBlock}\n`, 'utf8')

if (unlayered) {
  writeFileSync(join(outDir, 'overrides.css'), `${unlayered}\n`, 'utf8')
}

const imports = ['./utilities.css', './layer.css', ...(unlayered ? ['./overrides.css'] : [])]

writeFileSync(
  join(outDir, 'index.css'),
  `${imports.map((p) => `@import "${p}";`).join('\n')}\n`,
  'utf8',
)

writeFileSync(
  join(root, 'themes/components.css'),
  `${header}\n\n${layerBlock}\n${unlayered ? `\n${unlayered}\n` : ''}`,
  'utf8',
)

console.log('Split components.css →', outDir)
