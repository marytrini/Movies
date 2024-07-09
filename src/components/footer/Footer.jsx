const Footer = () => {
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="p-4 mt-5">
      <div className="container mx-auto">
        <p className="border-t border-solid p-5 text-center text-white text-sm sm:text-xs lg:text-base 2xl:text-lg truncate whitespace-no-wrap">
          Rammerbot &copy; | Acercándote al futuro que deseas - {currentDate}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
