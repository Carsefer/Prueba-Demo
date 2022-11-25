import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { clearMovies, getMovieDetail } from "../../redux/actions";
import Style from "./CardDetail.module.css";
const CardDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
    dispatch(getMovieDetail(id));
    setLoading(true);
    return () => {
      dispatch(clearMovies());
    };
  }, [dispatch, id]);
  const detail = useSelector((state) => state?.moviesDetail);
  if (!loading) {
    return (
      <div className={Style.container}>
        <button
          className={`${Style.back} btn btn-outline-danger btn-lg`}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <div className={`container d-flex flex-column justify-content-center`}>
          <h1 className="text-center">
            {detail.title} <h1>({detail.original_title})</h1>
          </h1>
          <div>
            <span className={Style.badge}>
              {detail.vote_average}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill "
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
          </div>
          <div className="container d-flex justify-content-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
              alt={detail.title}
              className={Style.img}
            />

            <div className="container d-flex flex-column justify-content-center">
              {" "}
              <h5 className={`${Style.overview} text-center`}>
                Overview:<p className="text-center">{detail.overview}</p>
              </h5>
              <p className="text-center">
                <span className="badge bg-secondary text-center">
                  {detail?.genres?.map((e) => e.name + ". ")}
                </span>
              </p>
            </div>
          </div>
          <h6>Release date: {detail.release_date}</h6>
          <h6>
            {" "}
            Produced by:{" "}
            {detail?.production_companies?.map(
              (e) => `${e.name} (${e.origin_country}) `
            )}
          </h6>
        </div>
      </div>
    );
  } else {
    return (
      <div className={Style.loading}>
        <h1>Loading...</h1>
      </div>
    );
  }
};
export default CardDetail;
