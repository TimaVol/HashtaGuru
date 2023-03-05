const items = [
  {
    title: "2260",
    text: "Satisfied Brands",
  },
  {
    title: "1324",
    text: "Satisfied Clients",
  },
  {
    title: "3453",
    text: "Sponsored",
  },
  {
    title: "9786",
    text: "Completed",
  },
];

export default function Statistics() {
  return (
    <div className="bg-purpleDark py-[30px] md:py-[120px]">
      <div className="container text-center md:text-left">
        <h2 className="family-poppins mb-[18px] text-center text-white">
          Search through more than 11 million social media profiles
        </h2>
        <p className="mb-[60px] text-center text-lightGray md:mb-[110px]">
          Heepsy&#8217;s search filters help you find exactly what you&#8217;re
          looking for, and our influencer reports provide you with the metrics
        </p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:justify-items-center">
          {items.map((item, idx) => (
            <div key={idx} className="">
              <h2 className="family-poppins mb-[10px] text-white">
                {item.title}
              </h2>
              <p className="text-lightGreen">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
