import { useEffect, useState } from "react";
import { getMovies } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { Paginate } from "../Paginate/Paginate";
import Style from "./Cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;
  const allmoviesPage = currentPage * postsPerPage;
  const indexOfFirstPost = allmoviesPage - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, allmoviesPage);
  const totalPages = Math.ceil(movies.length / postsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (!movies.length) {
      dispatch(getMovies());
    }
  }, [dispatch, movies]);

  return movies.length > 0 && movies !== undefined ? (
    <div>
      <Paginate
        currentPage={currentPage}
        paginate={paginate}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      <div className="container-fluid">
        <div className="row">
          {currentPosts?.map((e) => (
            <div className="col-md-3 mb-3" key={e.id + 1}>
              <Card name={e.name} image={e.image} id={e.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={Style.loading}>
      <h1 className="text-center">Loading...</h1>
    </div>
  );
};

export default Cards;
