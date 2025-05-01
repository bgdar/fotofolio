// di sini akan mengembalikan data yang akan di tampilkan di terminal
//  berdasarkan component di dalam terminal

import DataLs from "./components/dataLs";
import Neofetch from "./components/dataNeofetch";
// type CommandComponentMap = {
//   ls: FC<{ fileName: string[] }>;
//   pwd: FC<{}>; // atau: FC<Record<string, never>>
// };

// const dataComponents: Record<string, FC<DataLsProps>> = {
//   ls: DataLs,
//   pwd: () => <p className="text-gray-500 text-sm">/home/user</p>,
// };

const dataLs: string[] = ["data1", "data2", "data3"];

const dataComponents: Record<string, () => JSX.Element> = {
  clear: () => <p className="text-gray-500 text-sm">Terminal cleared.</p>,
  ls: () => <DataLs fileName={dataLs} />,
  pwd: () => <p className="text-gray-500 text-sm">/home/user</p>,
  neofetch: () => <Neofetch />,
};

interface typePackageCommad {
  command: string[];
}
const PackageCommad = ({ command }: typePackageCommad) => {
  //const [statusClear, setStatusClear] = useState(false);

  return (
    <div className="m-3">
      {command
        .filter((cmd) => cmd.trim() !== "") // filter agar tidak menerima perintah clear alias kosong
        .map((cmd, index) => {
          console.log("cmd nya =", cmd);
          // if (cmd === "clear") {
          //   return (
          //     <div key={index} className="text-gray-400 text-sm italic">
          //       Terminal cleared.
          //     </div>
          //   );
          // }

          const Component = dataComponents[cmd];

          if (!Component) {
            return (
              <p key={index} className="text-red-500 text-sm">
                Command not found: {cmd}
              </p>
            );
          }

          return <div key={index}>{Component()}</div>;
        })}
    </div>
  );
};

export default PackageCommad;
