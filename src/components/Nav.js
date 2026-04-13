"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Nav() {
  const { data: session } = useSession();
  
  return (
    <nav className="nav-links">
      <a href="#">Explore</a>
      {session ? (
        <>
          <span style={{marginLeft: "2rem", color: "#cbd5e1"}}>Hi, {session.user.name}</span>
          <button onClick={() => signOut()} className="auth-btn outline">Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn("github")} className="auth-btn">Sign In w/ GitHub</button>
      )}
    </nav>
  );
}
