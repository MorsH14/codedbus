'use client';

import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const redirectPath = searchParams.get("redirect") || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // try {
    //   const res = await fetch("/api/auth/signin", {
    //     method: "POST",
    //     body: JSON.stringify({ email, password }),
    //     headers: { "Content-Type": "application/json" },
    //   });

    //   if (res.ok) {
    //     router.push(redirectPath);
    //   } else {
    //     const data = await res.json();
    //     setError(data.message || "Login failed");
    //   }
    // } catch {
    //   setError("Something went wrong");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Sign In</h1>

        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          style={{
            ...styles.button,
            backgroundColor: isLoading ? "#999" : "#0070f3",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f2f2",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    padding: "2rem",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "1.5rem",
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  label: {
    marginBottom: "0.25rem",
    fontWeight: "500",
  },
  input: {
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    borderRadius: "5px",
    border: "none",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: "1rem",
    textAlign: "center",
  },
};
