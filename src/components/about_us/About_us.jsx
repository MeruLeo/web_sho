const AboutUs = () => {
  const Header = () => {
    const teamParts = [
      {
        title: "مدیریت",
        count: "۵",
        icon: <i className="fi fi-tr-user-crown"></i>,
      },
      {
        title: "بخش فنی",
        count: "۳۹",
        icon: <i className="fi fi-tr-it"></i>,
      },
      {
        title: "ویزیتور ها",
        count: "۱۲",
        icon: <i className="fi fi-tr-chatbot-speech-bubble"></i>,
      },
    ];

    const TeamPart = ({ title, count, icon }) => (
      <li className="flex justify-between bg-org-dark items-center m-2 p-3 rounded-full">
        <div className="flex justify-center text-xl items-center">
          <span className="ml-2 text-org-yellow">{icon}</span>
          <span>{title}</span>
        </div>
        <span className="text-xl text-org-yellow">{count}</span>
      </li>
    );

    return (
      <header className="mt-32 flex sm:flex-row flex-col sm:justify-between justify-center items-center sm:items-start">
        <div>
          <h2 className="font-Graphik text-center sm:text-start text-3xl text-bg-dark">
            درباره ما
          </h2>
          <p className="max-w-[20rem] sm:max-w-[30rem] text-xl mt-5 text-center sm:text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div className="sm:mr-32 mt-10 sm:mt-0">
          <div className="bg-org-yellow p-2 border-3 border-org-dark rounded-full">
            <img
              src="src/assets/img/people.png"
              className="w-56 h-56 rounded-b-full"
              alt="team"
            />
          </div>
          <ul className="bg-bg-dark border-3 border-org-yellow text-bg-light relative rounded-[2rem] py-0.5 -top-16 sm:left-32">
            {teamParts.map((part, index) => (
              <TeamPart
                key={index}
                title={part.title}
                icon={part.icon}
                count={part.count}
              />
            ))}
          </ul>
        </div>
      </header>
    );
  };

  const ourInfo = [
    {
      title: "تعداد کاربران",
      count: "۱,۰۰۰+",
    },
    {
      title: "پروژه",
      count: "۵۰۵+",
    },
    {
      title: "مشتری",
      count: "۱۰۰,۰۰۰+",
    },
    {
      title: "ساعات پشتیبانی",
      count: "۷,۸۵۵+",
    },
  ];

  const OurInfo = ({ title, count }) => (
    <li className="flex flex-col sm:my-0 my-4 bg-bg-dark p-2 rounded-t-2xl rounded-b-[2.7rem] justify-center items-center">
      <span className="text-bg-light">{title}</span>
      <span className="text-4xl mt-3 border-2 border-org-yellow bg-org-dark w-44 text-center p-3 rounded-full text-org-yellow">
        {count}
      </span>
    </li>
  );

  const History = ({ date, caption, bg, color, dir, capBg, capColor }) => (
    <>
      <li className={`my-4 hidden sm:flex items-center ${dir}`}>
        <div
          className={`w-28 h-28 text-3xl rounded-full flex justify-center items-center ${bg} ${color} border-3 border-bg-dark`}
        >
          {date}
        </div>
        <span className="w-72 hidden sm:inline-block h-1 border-t-3 border-dotted border-org-dark"></span>
        <p
          className={`${capBg} ${capColor} text-justify sm:mt-0 sm:mb-0 mt-1 mb-10 max-w-[20rem] p-4 rounded-3xl border-2 border-org-yellow`}
        >
          {caption}
        </p>
      </li>

      {/* Mobile mode */}
      <li className={`my-4 flex items-center flex-col sm:hidden`}>
        <div
          className={`w-28 h-28 text-3xl rounded-full flex justify-center items-center ${bg} ${color} border-3 border-bg-dark`}
        >
          {date}
        </div>
        <span className="w-72 hidden sm:inline-block h-1 border-t-3 border-dotted border-org-dark"></span>
        <p
          className={`${capBg} ${capColor} text-justify sm:mt-0 sm:mb-0 mt-1 mb-10 max-w-[20rem] p-4 rounded-3xl border-2 border-org-yellow`}
        >
          {caption}
        </p>
      </li>
    </>
  );

  const text = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز`;

  const history = [
    {
      date: "۱۳۹۹",
      caption: "",
      bg: "bg-org-yellow",
      color: "text-bg-dark",
      dir: "flex-row-reverse",
      capBg: "bg-bg-dark",
      capColor: "text-org-yellow",
    },
    {
      date: "۱۴۰۰",
      caption: "",
      bg: "bg-org-yellow",
      color: "text-bg-dark",
      dir: "flex-row",
      capBg: "bg-bg-dark",
      capColor: "text-org-yellow",
    },
    {
      date: "۱۴۰۱",
      caption: "",
      bg: "bg-org-yellow",
      color: "text-bg-dark",
      dir: "flex-row-reverse",
      capBg: "bg-bg-dark",
      capColor: "text-org-yellow",
    },
    {
      date: "۱۴۰۲",
      caption: "",
      bg: "bg-org-yellow",
      color: "text-org-dark",
      dir: "flex-row",
      capBg: "bg-bg-dark",
      capColor: "text-org-yellow",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <ul className="flex sm:flex-row flex-col w-full justify-between items-center">
          {ourInfo.map((info, index) => (
            <OurInfo key={index} title={info.title} count={info.count} />
          ))}
        </ul>
      </div>

      <div className="w-full">
        <ul className="w-full">
          <h2 className="font-Graphik text-3xl text-center mt-12 text-bg-dark">
            مسیری که طی کردیم
          </h2>
          {history.map((his, index) => (
            <History
              key={index}
              date={his.date}
              bg={his.bg}
              color={his.color}
              dir={his.dir}
              caption={text}
              capBg={his.capBg}
              capColor={his.capColor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
