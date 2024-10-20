import { defineConfig } from 'orval';

export default defineConfig({
	tfl: {
		output: {
			client: 'zod',
			mode: 'single',
			target: './src/lib/server/zod'
		},
		input: {
			target: './src/lib/server/api/tfl.yaml'
		},
		hooks: {
			afterAllFilesWrite: 'prettier --write'
		}
	}
});
