import CodeSkill from "../codeCmpnt/CodeSkill";

export default function Code() {
  return (
    <div id="code" className="section py-10 mb-12 mt-16">
      <div className="container mx-auto max-w-[800px] p-4">
        <div className="text-center">
          <h4 className="mb-5 text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg">
            Code
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <CodeSkill />
          </div>
        </div>
      </div>
    </div>
  );
}
