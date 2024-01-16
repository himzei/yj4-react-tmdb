import { useEffect, useState } from "react";
import changeHour from "../lib/changeHour";

export default function Detail() {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const url = "https://api.themoviedb.org/3/movie/906126?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGE2YjA1MDkzYzU3NTZjYjdjZTY5MjE2ZjE2NTI2YyIsInN1YiI6IjVlY2NiODQ2MDIxY2VlMDAyMThhNmNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O8NTSQ3WbjEipLHuOyR1hqkz2NSJCB-IP_4Q5M0hSsE",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setDetail(json))
      .catch((err) => console.error("error:" + err));
    setIsLoading(false);
  }, []);

  console.log(detail);

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <div className="w-full h-[500px] flex justify-center relative">
          <div className="absolute inset-0 w-full h-full filter grayscale blur-sm">
            <img
              className="w-full h-full object-cover "
              src={`https://image.tmdb.org/t/p/original${detail?.backdrop_path}`}
              alt="backimage"
            />
          </div>
          <div className="absolute inset-0 w-full h-full bg-gray-900/90 flex justify-center">
            <div className="w-[1200px] h-full flex py-8">
              <div className="w-1/4 h-full ">
                <div className="w-full h-[80%]">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={`https://image.tmdb.org/t/p/original${detail?.backdrop_path}`}
                    alt="backimage"
                  />
                </div>
                <div className="w-full h-[20%] bg-gray-900"></div>
              </div>
              <div className="w-3/4 flex flex-col justify-center h-full text-white px-8">
                <h1 className="font-bold text-3xl">{detail?.title}</h1>
                <div className="flex space-x-2">
                  <span>{detail?.release_date}</span>
                  <span>•</span>
                  <ul className="space-x-2 flex">
                    {detail?.genres?.map((genre, index) => (
                      <li key={index}>{genre.name}</li>
                    ))}
                  </ul>
                  <span>•</span>
                  <span>{changeHour(detail?.runtime)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
