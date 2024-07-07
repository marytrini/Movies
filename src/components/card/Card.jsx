import PropTypes from "prop-types";

const Card = ({ movie }) => {
  return (
    <div className="w-60 h-60 rounded-md bg-slate-500 items-center text-black font-pop font-semibold mt-8 mb-8 p-6">
      <h2 className="text-gray-100 font-bold">{movie.titulo}</h2>
      <p>Release Date: {movie.fecha_lanzamiento}</p>
      <p>Return: {movie.retorno_individual}</p>
      <p>Cost: {movie.costo}</p>
      <p>Profit: {movie.ganancia}</p>
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
