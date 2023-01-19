import { useState } from "react";

function App() {
  const [studentCnt, setStudentCnt] = useState();
  const [studentType, setStudentType] = useState(0);
  const arr = [
    ["तांदूड", 0.1, 0.15],
    ["डाळ", 0.02, 0.03],
    ["जिरा", 0.0001, 0.0001],
    ["मोहरी", 0.00015, 0.00015],
    ["हळद", 0.0001, 0.0001],
    ["तिखट", 0.00025, 0.0005],
    ["मीठ", 0.002, 0.0022],
    ["तेल", 0.005, 0.0075],
    ["भाजीपाला", 0.05, 0.075],
    ["खर्च", 2.68, 4.02],
    ["कां+ल मसाला", 0.0003, 0.0005],
  ];

  return (
    <div className="App">
      <div className="flex items-center justify-center mt-3">
        <div>
          <label for="students" class="text-lg block font-medium text-gray-900">
            Number of students
          </label>
          <input
            type="number"
            id="students"
            value={studentCnt}
            onChange={e => setStudentCnt(e.target.value)}
            class="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="no. of students"
          />
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-5">
        <div
          className="bg-blue-500 p-5 rounded-md cursor-pointer"
          onClick={e => setStudentType(0)}
        >
          <h1>1 to 5</h1>
        </div>
        <div
          className="bg-purple-500 p-5 rounded-md cursor-pointer"
          onClick={e => setStudentType(1)}
        >
          <h1>6 to 8</h1>
        </div>
      </div>
      <div class="relative overflow-x-auto mt-5">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-lg">
                पदार्थ
              </th>
              <th scope="col" class="px-6 py-3 text-lg">
                {studentType === 0 ? "1 to 5" : "6 to 8"}
              </th>
            </tr>
          </thead>
          <tbody>
            {arr.map(item => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg"
                  >
                    {item[0]}
                  </th>
                  <td class="px-6 py-4 text-lg">
                    {(item[studentType + 1] * studentCnt).toFixed(8)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      ​
    </div>
  );
}

export default App;
