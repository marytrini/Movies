const Footer = () => {
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="w-full fixed bottom-0 left-0 ">
      <div className="container mx-auto bg-black ">
        <p className="border-t border-solid p-2 text-center text-white text-sm font-bold sm:text-xs lg:text-base 2xl:text-lg truncate whitespace-no-wrap">
          Rammerbot &copy; | Acercándote al futuro que deseas - {currentDate}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
