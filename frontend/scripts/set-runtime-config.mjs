import { writeFile } from 'node:fs/promises';

const apiUrl = process.env.API_URL?.trim() || 'https://subash-portfolio-api.onrender.com';
await writeFile('src/runtime-config.js', `globalThis.__API_URL__ = ${JSON.stringify(apiUrl)};\n`);