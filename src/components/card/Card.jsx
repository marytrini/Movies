import PropTypes from "prop-types";

const Card = ({ movie }) => {
  return (
    <div className="sm:w-40 sm:h-40 2xl:w-60 2xl:h-60 rounded-md bg-slate-500 items-center text-black font-pop font-semibold mt-8 mb-8 p-6">
      <h2 className="text-gray-100 font-bold sm:text-sm sm:text-center 2xl:text-xl mb-2 hover:text-blue-950">
        {movie.titulo}
      </h2>
      <p className="sm:text-xs 2xl:text-base">
        Release Date: {movie.fecha_lanzamiento}
      </p>
      <p className="sm:text-xs 2xl:text-base">
        Return: {movie.retorno_individual}
      </p>
      <p className="sm:text-xs 2xl:text-base">Cost: {movie.costo}</p>
      <p className="sm:text-xs 2xl:text-base">Profit: {movie.ganancia}</p>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    fecha_lanzamiento: PropTypes.number.isRequired,
    retorno_individual: PropTypes.number.isRequired,
    costo: PropTypes.number.isRequired,
    ganancia: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
