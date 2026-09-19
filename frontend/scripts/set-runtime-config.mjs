import { writeFile } from 'node:fs/promises';

const apiUrl = process.env.API_URL || 'http://localhost:8080';
await writeFile('src/runtime-config.js', `globalThis.__API_URL__ = ${JSON.stringify(apiUrl)};\n`);