
/**
 * Get commit messages
 * 
 * @see https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#list-commits
 */
export const getCommitMessages = ({
	repo,
	since,
	until,
}: {
	repo: string
	since: string
	until: string
}) => {
	console.log(repo, since, until)
    return false
}
