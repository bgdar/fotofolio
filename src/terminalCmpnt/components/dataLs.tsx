import { FaFileAlt } from "react-icons/fa";

interface typeDataLs {
  fileName: string[];
}
const DataLs = ({ fileName }: typeDataLs) => {
  return (
    <div>
      <div className="flex  gap-2">
        {fileName.map((data, index) => {
          return (
            <section>
              <div key={index}>
                <FaFileAlt className="text-gray-500" />
                <p className="text-gray-500">{data}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default DataLs;
