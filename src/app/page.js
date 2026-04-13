import { prisma } from "@/lib/prisma";
import { Nav } from "@/components/Nav";
import { GithubRepos } from "@/components/GithubRepos";

export const revalidate = 0; // Disable cache so new signups appear instantly

export default async function Home() {
  const profiles = await prisma.user.findMany({
    orderBy: { id: 'desc' }
  });

  return (
    <>
      <header className="header">
        <div className="logo">DevConnect</div>
        <Nav />
      </header>
      
      <main>
        <section className="hero">
          <h1>Discover Top Developer Talent</h1>
          <p>Connect with passionate engineers, showcase your skills, and build the future of the web together.</p>
        </section>

        <section className="grid">
          {profiles.length === 0 ? (
            <div style={{ textAlign: "center", gridColumn: "1 / -1", color: "#94a3b8" }}>
              <h2>No developers have joined yet!</h2>
              <p>Be the very first to sign in with GitHub above.</p>
            </div>
          ) : (
            profiles.map(profile => {
              let parsedSkills = [];
              try { parsedSkills = JSON.parse(profile.skills || "[]"); } catch(e) {}
              
              return (
                <div className="card" key={profile.id}>
                  {profile.image ? (
                    <img src={profile.image} alt={profile.name} className="avatar" style={{objectFit: "cover", padding: 0}} />
                  ) : (
                    <div className="avatar">{profile.emoji || "💻"}</div>
                  )}
                  <h2 className="name">{profile.name}</h2>
                  <div className="role">{profile.role || "Developer"}</div>
                  <p className="bio">{profile.bio}</p>
                  
                  {parsedSkills.length > 0 && (
                    <div className="skills">
                      {parsedSkills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}

                  {profile.githubUsername && (
                    <GithubRepos username={profile.githubUsername} />
                  )}
                </div>
              );
            })
          )}
        </section>
      </main>
    </>
  );
}
