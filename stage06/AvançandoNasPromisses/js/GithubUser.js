export class GithubUser {
  static search(login) {
    const endpoint = `https://api.github.com/users/${login}`

    return fetch(endpoint)
    .then(data => data.json())
    .then(data => ({
      login: data.login,
      name: data.name,
      public_repos: data.public_repos,
      followers: data.followers
    }))
  }
}