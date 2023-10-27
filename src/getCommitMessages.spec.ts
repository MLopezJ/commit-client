import { describe, it } from 'node:test'
import assert from 'node:assert'
import { getCommitMessages } from './getCommitMessages.js'

void describe('getCommitMessages', () => {
	void it(`should return a list with commit messages`, () => {
		const repo =
			'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2'
		const since = '2023-10-17'
		const until = '2023-10-18'
		const expected = [
			{
				sha: '3760d5abbb16a0df70d45462c5323a7373370889',
				node_id:
					'C_kwDOKH0whNoAKDM3NjBkNWFiYmIxNmEwZGY3MGQ0NTQ2MmM1MzIzYTczNzMzNzA4ODk',
				commit: {
					author: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-18T10:29:17Z',
					},
					committer: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-18T10:29:17Z',
					},
					message:
						"test: trigger warning\n\nfollowing the 'check one behavior per test' principle, a test was splitted in 2.\n\nOne test check if the result is the expected, the other test check if warning is been triggered",
					tree: {
						sha: '70708c071d31af683c2700650f76fc0ecaa59135',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/trees/70708c071d31af683c2700650f76fc0ecaa59135',
					},
					url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/commits/3760d5abbb16a0df70d45462c5323a7373370889',
					comment_count: 0,
					verification: {
						verified: false,
						reason: 'unsigned',
						signature: null,
						payload: null,
					},
				},
				url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/3760d5abbb16a0df70d45462c5323a7373370889',
				html_url:
					'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/3760d5abbb16a0df70d45462c5323a7373370889',
				comments_url:
					'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/3760d5abbb16a0df70d45462c5323a7373370889/comments',
				author: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				committer: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				parents: [
					{
						sha: '71d530560c133bf339a818d35974489b6e3baacd',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/71d530560c133bf339a818d35974489b6e3baacd',
						html_url:
							'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/71d530560c133bf339a818d35974489b6e3baacd',
					},
				],
			},
			{
				sha: '71d530560c133bf339a818d35974489b6e3baacd',
				node_id:
					'C_kwDOKH0whNoAKDcxZDUzMDU2MGMxMzNiZjMzOWE4MThkMzU5NzQ0ODliNmUzYmFhY2Q',
				commit: {
					author: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:47:21Z',
					},
					committer: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:47:21Z',
					},
					message:
						'fix: create type to report conversion result type\n\nfollowing DRY principle, a generic type was created instead of having single type definition for each object',
					tree: {
						sha: 'b488d776626b7c0a4beee3f1698a2a774651b07a',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/trees/b488d776626b7c0a4beee3f1698a2a774651b07a',
					},
					url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/commits/71d530560c133bf339a818d35974489b6e3baacd',
					comment_count: 0,
					verification: {
						verified: false,
						reason: 'unsigned',
						signature: null,
						payload: null,
					},
				},
				url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/71d530560c133bf339a818d35974489b6e3baacd',
				html_url:
					'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/71d530560c133bf339a818d35974489b6e3baacd',
				comments_url:
					'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/71d530560c133bf339a818d35974489b6e3baacd/comments',
				author: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				committer: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				parents: [
					{
						sha: '45c3c5b7b023ddf1e4ae043a1c3f180647b35f3a',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/45c3c5b7b023ddf1e4ae043a1c3f180647b35f3a',
						html_url:
							'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/45c3c5b7b023ddf1e4ae043a1c3f180647b35f3a',
					},
				],
			},
			{
				sha: '45c3c5b7b023ddf1e4ae043a1c3f180647b35f3a',
				node_id:
					'C_kwDOKH0whNoAKDQ1YzNjNWI3YjAyM2RkZjFlNGFlMDQzYTFjM2YxODA2NDdiMzVmM2E',
				commit: {
					author: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:44:53Z',
					},
					committer: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:44:53Z',
					},
					message: 'docs: add TODO',
					tree: {
						sha: 'f91732d04ff4d6e331f06ec4345ceee95d1dcb20',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/trees/f91732d04ff4d6e331f06ec4345ceee95d1dcb20',
					},
					url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/commits/45c3c5b7b023ddf1e4ae043a1c3f180647b35f3a',
					comment_count: 0,
					verification: {
						verified: false,
						reason: 'unsigned',
						signature: null,
						payload: null,
					},
				},
				url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/45c3c5b7b023ddf1e4ae043a1c3f180647b35f3a',
				html_url:
					'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/45c3c5b7b023ddf1e4ae043a1c3f180647b35f3a',
				comments_url:
					'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/45c3c5b7b023ddf1e4ae043a1c3f180647b35f3a/comments',
				author: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				committer: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				parents: [
					{
						sha: '6b6836ce4e5c988b7ac23dc960b08d334ebbdff9',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/6b6836ce4e5c988b7ac23dc960b08d334ebbdff9',
						html_url:
							'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/6b6836ce4e5c988b7ac23dc960b08d334ebbdff9',
					},
				],
			},
			{
				sha: '6b6836ce4e5c988b7ac23dc960b08d334ebbdff9',
				node_id:
					'C_kwDOKH0whNoAKDZiNjgzNmNlNGU1Yzk4OGI3YWMyM2RjOTYwYjA4ZDMzNGViYmRmZjk',
				commit: {
					author: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:44:05Z',
					},
					committer: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:44:05Z',
					},
					message:
						'fix: Update converter API\n\nwarnings and errors are notify by the same interface now\n\nThe reason why this change is that warning is an error by defintion. It extends the Error class.\n\nBy removing the warning callback, the code becomes more readable because of the noise-removing',
					tree: {
						sha: '93398e957a27982f2e410c3a6369605356eb7a34',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/trees/93398e957a27982f2e410c3a6369605356eb7a34',
					},
					url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/commits/6b6836ce4e5c988b7ac23dc960b08d334ebbdff9',
					comment_count: 0,
					verification: {
						verified: false,
						reason: 'unsigned',
						signature: null,
						payload: null,
					},
				},
				url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/6b6836ce4e5c988b7ac23dc960b08d334ebbdff9',
				html_url:
					'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/6b6836ce4e5c988b7ac23dc960b08d334ebbdff9',
				comments_url:
					'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/6b6836ce4e5c988b7ac23dc960b08d334ebbdff9/comments',
				author: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				committer: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				parents: [
					{
						sha: '911f50a35b997c7ae5a05b975801dfe2164c8dd5',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/911f50a35b997c7ae5a05b975801dfe2164c8dd5',
						html_url:
							'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/911f50a35b997c7ae5a05b975801dfe2164c8dd5',
					},
				],
			},
			{
				sha: '911f50a35b997c7ae5a05b975801dfe2164c8dd5',
				node_id:
					'C_kwDOKH0whNoAKDkxMWY1MGEzNWI5OTdjN2FlNWEwNWI5NzU4MDFkZmUyMTY0YzhkZDU',
				commit: {
					author: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:33:44Z',
					},
					committer: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:33:44Z',
					},
					message:
						"fix: remove schema from process of remove Coiote format\n\nUpdate the API of removeCoioteFormatFromSingleInstanceObj by removing one parameter of the method: schema.\n\nthe schema was used in the method to check if result follow its definiton. In case the result does not, the value of that resource change to 'undefined'.\n\nHowever, that decision is not correct because it make not possible to validateLwM2MFormat method check wrong values when resource is not not required.",
					tree: {
						sha: '65f2fb0039acaebfabf642695015b576fc20d98a',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/trees/65f2fb0039acaebfabf642695015b576fc20d98a',
					},
					url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/commits/911f50a35b997c7ae5a05b975801dfe2164c8dd5',
					comment_count: 0,
					verification: {
						verified: false,
						reason: 'unsigned',
						signature: null,
						payload: null,
					},
				},
				url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/911f50a35b997c7ae5a05b975801dfe2164c8dd5',
				html_url:
					'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/911f50a35b997c7ae5a05b975801dfe2164c8dd5',
				comments_url:
					'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/911f50a35b997c7ae5a05b975801dfe2164c8dd5/comments',
				author: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				committer: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				parents: [
					{
						sha: '1860b6d5b026b8d27b178d991993c2e39675ddac',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/1860b6d5b026b8d27b178d991993c2e39675ddac',
						html_url:
							'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/1860b6d5b026b8d27b178d991993c2e39675ddac',
					},
				],
			},
			{
				sha: '1860b6d5b026b8d27b178d991993c2e39675ddac',
				node_id:
					'C_kwDOKH0whNoAKDE4NjBiNmQ1YjAyNmI4ZDI3YjE3OGQ5OTE5OTNjMmUzOTY3NWRkYWM',
				commit: {
					author: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:16:56Z',
					},
					committer: {
						name: 'Mauro López Jiménez',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T14:16:56Z',
					},
					message:
						'docs: add TODO\n\nexplain why schema should be removed as parameter from method removeCoioteFormatFromSingleInstanceObj',
					tree: {
						sha: 'e800d9b0c1b978e97e8b54d265926cd1471aebd8',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/trees/e800d9b0c1b978e97e8b54d265926cd1471aebd8',
					},
					url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/commits/1860b6d5b026b8d27b178d991993c2e39675ddac',
					comment_count: 0,
					verification: {
						verified: false,
						reason: 'unsigned',
						signature: null,
						payload: null,
					},
				},
				url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/1860b6d5b026b8d27b178d991993c2e39675ddac',
				html_url:
					'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/1860b6d5b026b8d27b178d991993c2e39675ddac',
				comments_url:
					'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/1860b6d5b026b8d27b178d991993c2e39675ddac/comments',
				author: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				committer: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				parents: [
					{
						sha: '3aa13e95e750a4a6b273e8f2cbcf27861e19e082',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/3aa13e95e750a4a6b273e8f2cbcf27861e19e082',
						html_url:
							'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/3aa13e95e750a4a6b273e8f2cbcf27861e19e082',
					},
				],
			},
			{
				sha: '3aa13e95e750a4a6b273e8f2cbcf27861e19e082',
				node_id:
					'C_kwDOKH0whNoAKDNhYTEzZTk1ZTc1MGE0YTZiMjczZThmMmNiY2YyNzg2MWUxOWUwODI',
				commit: {
					author: {
						name: 'Mauro López',
						email: 'mauro.lopez@nordicsemi.no',
						date: '2023-10-17T12:51:30Z',
					},
					committer: {
						name: 'GitHub',
						email: 'noreply@github.com',
						date: '2023-10-17T12:51:30Z',
					},
					message:
						'fix: refactor LwM2M format validation process\n\nRefactoring the LwM2M format validation process by introducing a new method: `validateLwM2MFormat`, which replaces the old `checkLwM2MFormat` method. \r\n\r\nThe API of the new method is different from the old one. The main difference is that the evaluated object is being returned if validation is successful. \r\n\r\nThis change improves the code quality by following the DRY principle in the implementation of the format validation',
					tree: {
						sha: '1536c7f767f24a6c80b6bc46af3a002f3d4c4afd',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/trees/1536c7f767f24a6c80b6bc46af3a002f3d4c4afd',
					},
					url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/git/commits/3aa13e95e750a4a6b273e8f2cbcf27861e19e082',
					comment_count: 0,
					verification: {
						verified: true,
						reason: 'valid',
						signature:
							'-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJlLoNSCRBK7hj4Ov3rIwAAfy8IAHjY1m4Y7FPAIhwmgmPy6JgZ\n+9MnyDHoh/QGeakHG7NjqY7L1BLRPuJ5MFSNA1GkIT33n8AykCOU07WX1cXGjesU\nb8hwfZRHQWwepzB6lWeUMVzY2lDumIgfQhYY50WH7NewPuZIOWMj0Qy58eie7n5Y\nOaNca6VVzQlracHBmX/GbVyWS20MNqj0/0rJ6Zo3663ly/cSXqnON/1YVKa3iDZu\nkbr93mGOX6BwHugn+tlDOyLI+0H26sWic7XoyAt4oZLU+i922PosqkAw8tbaBIGL\nfIZMPk+zpuzoyed0Yt9zcAVspo5i/EZUGFW6N96Xg2k6jpe9gvx3jss6TNBW6GU=\n=FPy2\n-----END PGP SIGNATURE-----\n',
						payload:
							'tree 1536c7f767f24a6c80b6bc46af3a002f3d4c4afd\nparent 9bb7c5f21218fc4094a7f148850d1edeff17e2ab\nauthor Mauro López <mauro.lopez@nordicsemi.no> 1697547090 +0200\ncommitter GitHub <noreply@github.com> 1697547090 +0200\n\nfix: refactor LwM2M format validation process\n\nRefactoring the LwM2M format validation process by introducing a new method: `validateLwM2MFormat`, which replaces the old `checkLwM2MFormat` method. \r\n\r\nThe API of the new method is different from the old one. The main difference is that the evaluated object is being returned if validation is successful. \r\n\r\nThis change improves the code quality by following the DRY principle in the implementation of the format validation',
					},
				},
				url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/3aa13e95e750a4a6b273e8f2cbcf27861e19e082',
				html_url:
					'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/3aa13e95e750a4a6b273e8f2cbcf27861e19e082',
				comments_url:
					'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/3aa13e95e750a4a6b273e8f2cbcf27861e19e082/comments',
				author: {
					login: 'MLopezJ',
					id: 8351865,
					node_id: 'MDQ6VXNlcjgzNTE4NjU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8351865?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/MLopezJ',
					html_url: 'https://github.com/MLopezJ',
					followers_url: 'https://api.github.com/users/MLopezJ/followers',
					following_url:
						'https://api.github.com/users/MLopezJ/following{/other_user}',
					gists_url: 'https://api.github.com/users/MLopezJ/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/MLopezJ/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/MLopezJ/subscriptions',
					organizations_url: 'https://api.github.com/users/MLopezJ/orgs',
					repos_url: 'https://api.github.com/users/MLopezJ/repos',
					events_url: 'https://api.github.com/users/MLopezJ/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/MLopezJ/received_events',
					type: 'User',
					site_admin: false,
				},
				committer: {
					login: 'web-flow',
					id: 19864447,
					node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
					avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/web-flow',
					html_url: 'https://github.com/web-flow',
					followers_url: 'https://api.github.com/users/web-flow/followers',
					following_url:
						'https://api.github.com/users/web-flow/following{/other_user}',
					gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/web-flow/subscriptions',
					organizations_url: 'https://api.github.com/users/web-flow/orgs',
					repos_url: 'https://api.github.com/users/web-flow/repos',
					events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/web-flow/received_events',
					type: 'User',
					site_admin: false,
				},
				parents: [
					{
						sha: '9bb7c5f21218fc4094a7f148850d1edeff17e2ab',
						url: 'https://api.github.com/repos/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commits/9bb7c5f21218fc4094a7f148850d1edeff17e2ab',
						html_url:
							'https://github.com/MLopezJ/coiote-to-LwM2M-asset-tracker-v2/commit/9bb7c5f21218fc4094a7f148850d1edeff17e2ab',
					},
				],
			},
		]
		assert.deepEqual(getCommitMessages({ repo, since, until }), expected)
	})
})
