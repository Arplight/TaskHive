import Logo from "/Logo/logo.svg";

const Brand = () => {
  return (
    <section className="flex items-center gap-1">
      <div className="w-[40px] h-[40px]">
        <img src={Logo} alt="logo" className="w-full h-full object-contain" />
      </div>
      <h1 className="font-secondary">Taskhive</h1>
    </section>
  );
};

export default Brand;
