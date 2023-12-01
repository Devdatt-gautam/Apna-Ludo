import NavHeader from "./../components/NavHeader";

const Contact = () => {
  return (
    <main>
      <NavHeader />
      <section className="section flex w-full  ">
        <div className="flex-1 pt-24 max-md:pt-18 px-4 pb-4">
          <form className="flex items-center flex-col gap-4 w-[80%] mx-auto">
            <h2 className="text-3xl text-[#1DC30F]">Contact Us</h2>
            <label htmlFor="name" />
            <input
              type="text"
              name="name"
              id="name"
              className="bg-[#E5EDB2F0] text-[#00000080] placeholder:text-[#00000080] w-full p-3 rounded-lg"
              placeholder="Name"
            />
            <label htmlFor="email" />
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#E5EDB2F0] text-[#00000080] placeholder:text-[#00000080] w-full p-3 rounded-lg"
              placeholder="Email"
            />
            <label htmlFor="detail" />
            <textarea
              name="detail"
              id="detail"
              maxLength={500}
              placeholder="Write something ..."
              className="bg-[#E5EDB2F0] text-[#00000080] placeholder:text-[#00000080] w-full p-3 rounded-lg max-h-[200px] min-h-[200px]"
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-[#F73207] to-[#C90327] px-10  py-3 rounded-2xl text-white hover:from-[#C90327] hover:to-[#C90327] "
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="max-lg:hidden flex-1 main-bg h-auto  min-h-screen">
          {/* <img
            src={side}
            alt="contact bg"
            className=" w-full object-cover object-center  h-full"
          /> */}
        </div>
      </section>
    </main>
  );
};

export default Contact;
