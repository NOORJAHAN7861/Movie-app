const API = "https://api.example.com/movies";
export async function fetchMovies() {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}
