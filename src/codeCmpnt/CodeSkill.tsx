import ImgWithLoading from "../all-componets/imgWithLoading";

type daftarSkill = {
  image: string;
  description: string;
  level: number; //tampilakan menjadi persentase
  source: string;
  title: string;
};

interface ProfilSkillProps {
  item: daftarSkill;
  //isLoaded: boolean;
}
// properti isloaded saya matikan karena memakan sumber daya
const ProfilCode: React.FC<ProfilSkillProps> = ({ item }) => {
  return (
    <>
      {/* card url */}
      <div className="flex flex-wrap border rounded-lg overflow-hidden shadow-md w-full max-w-xl transition-all duration-300 ease-in-out">
        <div className="flex-1 p-4">
          <h2 className="font-semibold text-lg">{item.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
          <a
            href={item.source}
            className="text-blue-500 text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.source}
          </a>
        </div>
        <div>
          {/* <img
            src={item.image}
            alt={item.title}
            className="w-32 object-cover"
          /> */}
          <ImgWithLoading
            src={item.image}
            alt={item.title}
            addClass={"w-32 object-cover"}
          />
        </div>
      </div>

      <div
        className=" bg-slate-200 relative mx-auto flex  rounded-lg p-2  group overflow-hidden shadow-lg shadow-slate-400 transition-all duration-300  "
        data-aos="zoom-out-up"
        data-aos-duration="800"
      >
        {/* {isLoaded ? (
        <> */}
        {/* <img
          src={item.image}
          title={item.title}
          className="w-[160px] h-[160px] object-contain"
        /> */}
        <ImgWithLoading
          src={item.image}
          alt={item.title}
          addClass="w-[160px] h-[160px] object-contain"
        />

        {/* elemet hover  */}
        <div className="absolute inset-0 p-3 backdrop-blur-lg bg-slate-500/80 flex items-center justify-center opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in-out duration-300">
          <div className="text-center w-full text-white space-y-4">
            {/* Judul */}
            <div className="bg-white rounded-full p-2 inline-block shadow-md">
              <h4 className="text-sky-800 font-bold text-sm">{item.title}</h4>
            </div>

            {/* Persentase */}
            <div className="relative mx-auto w-24 h-24 rounded-full border-4 border-white flex items-center justify-center bg-sky-600/30 shadow-inner">
              <span className="text-2xl font-bold text-white">
                {item.level}%
              </span>

              {/* Lingkaran Progress (opsional) */}
              <svg className="absolute top-0 left-0 w-full h-full transform rotate-[-90deg]">
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  stroke="white"
                  strokeWidth="8%"
                  fill="transparent"
                  strokeDasharray="251"
                  strokeDashoffset={`${251 - (item.level / 100) * 251}`}
                  className="transition-all duration-300 ease-in-out"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )} */}
      </div>
    </>
  );
};

interface TypeCodeSkill {
  nextItem: number;
  dataSkill: daftarSkill[];
}

const CodeSkill = ({ nextItem, dataSkill }: TypeCodeSkill) => {
  //gunakan nextItems untuk menampikan berdasarkan index yang diinginkan

  // const [loadedIndices, setLoadedIndices] = useState<number[]>([]);
  // useEffect(() => {
  //   const timers = dataSkil.map(
  //     (_, index) =>
  //       setTimeout(() => {
  //         setLoadedIndices((prev) => [...prev, index]);
  //       }, 2000 * (index + 1)) // Percepat animasi loading menjadi 1 detik per card
  //   );
  //   return () => {
  //     timers.forEach((timer) => clearTimeout(timer));
  //   };
  // }, []);

  return (
    <>
      {/* {dataSkil.map((item, index) => (
        <ProfilCode
          key={index}
          item={item}
          // isLoaded={loadedIndices.includes(index)}
        />
      ))} */}
      {/* slice elemet agar muncull 1 per 1  */}
      <ProfilCode item={dataSkill[nextItem]} key={nextItem} />
    </>
  );
};

export default CodeSkill;
