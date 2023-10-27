import { describe, it } from 'node:test'
import assert from 'node:assert'
import { getCommitMessages } from './getCommitMessages.js'

void describe('getCommitMessages', () => {
	void it(`should return a list with commit messages`, async () => {
		const repo =
			'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2'
		const since = '2023-10-17'
		const until = '2023-10-18'
		const expected = [
			{
				type: 'docs',
				title: ' remove commented code',
				body: undefined,
				sha: '7a5982f9bbaa711120755e8b4e8adc6ebb25d190',
			},
			{
				type: 'fix',
				title: ' rename variables',
				body: 'improve readability',
				sha: '75b88cb2180877b2e55e12c72242e3fe39ad3b25',
			},
		]
		const result = await getCommitMessages({ repo, since, until })
		assert.equal(result[0]?.sha, expected[0]?.sha)
		assert.equal(result[0]?.body, expected[0]?.body)
		assert.equal(result[1]?.sha, expected[1]?.sha)
		assert.equal(result[1]?.body, expected[1]?.body)
	})
})
