const FAQ = () => {
  const CollapseItem = ({ title, content }) => (
    <div className="collapse collapse-plus border-gray-300 border-b rounded-none py-2 w-full">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-xl font-bold peer-checked:text-blue-400 light-text dark-text">
        {title}
      </div>
      <div className="collapse-content">
        <p className="text-lg light-text dark-text">{content}</p>
      </div>
    </div>
  );

  return (
    <section
      id="FAQ"
      className="w-full flex justify-center pt-32 pb-32 max-md:pb-16 max-md:pt-16 light-text dark-text"
    >
      <div className="flex w-full max-md:flex-col">
        <div className="pt-2 flex flex-col w-1/2 max-md:w-full max-md:items-center">
          <h2 className="text-4xl font-bold max-md:text-3xl">
            <span className="text-primary">Frequently </span> Asked Questions
          </h2>
        </div>
        <div className="w-1/2 flex flex-col max-md:w-full max-md:pt-8">
          <CollapseItem title="Question?" content="Answer" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
