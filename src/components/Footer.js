const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer flex flex-wrap justify-center align-center m-10 w-auto text-center bg-yellow-50 p-[20px] border-r-5 shadow-[6px]">
      Created By
      <i className="fa-solid fa-heart font-semibold  px-1">❤️</i>
      <a
        href="https://www.linkedin.com/in/prathamesh-dikondawar-0a743a22a/"
        target="_blank"
        title="Prathamesh Dikondawar's Linkedin Profile"
        className="text-blue-800 px-2"
      >
        Prathamesh Dikondawar
      </a>

      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong className="pl-5 pr-5">
          Food <span className="text-red-800">Villa</span>
        </strong>
    </div>
  );
};

export default Footer;