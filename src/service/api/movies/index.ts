const getMovies = async (accessToken: string) => {
  try {
    const res = await fetch("/api/movies", {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    const movies = await res.json();
    return movies;
  } catch (e) {
    throw e;
  }
};

export default getMovies;
