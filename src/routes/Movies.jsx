import { useEffect, useState } from "react";

export default function Movies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  const fetchData = async (pageNumber = 1) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGE2YjA1MDkzYzU3NTZjYjdjZTY5MjE2ZjE2NTI2YyIsInN1YiI6IjVlY2NiODQ2MDIxY2VlMDAyMThhNmNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O8NTSQ3WbjEipLHuOyR1hqkz2NSJCB-IP_4Q5M0hSsE",
        },
      };
      const response = await fetch(url, options);
      const newData = await response.json();

      setData((prev) => [...prev, ...newData.results]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1000px] min-h-[500px] ">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="flex gap-4 flex-wrap">
              {data.map((list) => (
                <div className="w-[180px] h-[300px] bg-blue-100">
                  {list.title}
                </div>
              ))}
            </div>
            <div
              onClick={handleLoadMore}
              className="w-full h-20 bg-red-700 text-white text-center py-8 my-8"
            >
              Load more.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
