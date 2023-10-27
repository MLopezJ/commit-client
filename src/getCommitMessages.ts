type CommitInfo = {
	sha: string
	node_id: string
	commit: {
		author: Record<string, unknown>
		committer: Record<string, unknown>
		message: string // this
		tree: Record<string, unknown>
		url: string
		comment_count: number
		verification: Record<string, unknown>
	}
	url: string
	html_url: string
	comments_url: string
	author: {}
	committer: {}
	parents: []
}

type CommitMessages = {
	title: string
	body: string
	sha: string
}[]

/**
 * Get commit messages
 *
 * @see https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#list-commits
 */
export const getCommitMessages = async ({
	repo,
	since,
	until,
}: {
	repo: string
	since: string
	until: string
}): Promise<CommitMessages> => {
	const request = await fetch(
		`${repo}/commits?since=${since}&until=${until}`,
	).then((response) => response.json())

	const messages = request.map((git: CommitInfo) => {
		const message = git.commit.message.split('\n\n')
		if (message.length > 1) {
			return { title: message[0], body: message[1], sha: git.sha }
		}
		return { title: message[0], body: undefined, sha: git.sha }
	})
	return messages
}
