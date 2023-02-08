import axios from "axios";
import { useEffect, useState } from "react";
import Show from "./show";
import Update from "./update";

function App() {
  const [studentCnt, setStudentCnt] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [data, setData] = useState([]);

  const handleUpdate = e => {
    e.preventDefault();
    setIsUpdate(!isUpdate);
  };

  const getData = async () => {
    try{

      const res = await axios.get("https://mdm-calci.onrender.com/json");
      console.log(res.data);
      setData(res.data.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="flex items-center justify-center mt-3">
        <div>
          <label
            htmlFor="students"
            className="text-lg block font-medium text-gray-900"
          >
            Number of students
          </label>
          <input
            type="number"
            id="students"
            value={studentCnt}
            onChange={e => setStudentCnt(e.target.value)}
            className="text-lg block
        w-full
        px-3
        py-1.5
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="no. of students"
          />
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-5">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          1 to 5
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          6 to 8
        </button>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          onClick={handleUpdate}
        >
          {isUpdate ? "Show" : "Update"}
        </button>
      </div>
      <div className="relative overflow-x-auto mt-5">
        {isUpdate ? (
          <Update data={data} setData={setData} />
        ) : (
          <Show data={data} studentCnt={studentCnt} />
        )}
      </div>
    </div>
  );
}

export default App;
