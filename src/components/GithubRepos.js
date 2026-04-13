export async function GithubRepos({ username }) {
  if (!username) return null;
  
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=2`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) return null;
    const repos = await res.json();
    
    if (!repos || !Array.isArray(repos) || repos.length === 0) return null;
    
    return (
      <div className="repos-container">
        <div className="repos-title">Recent Repositories</div>
        {repos.map(repo => (
          <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id} className="repo-card">
            <strong>{repo.name}</strong>
            <p>{repo.description ? repo.description.substring(0, 60) + "..." : "No description provided."}</p>
          </a>
        ))}
      </div>
    );
  } catch (e) {
    return null;
  }
}
