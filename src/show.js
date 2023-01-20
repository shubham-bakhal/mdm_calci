import React from "react";
const Show = ({ data, studentCnt }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 text-lg">
            पदार्थ
          </th>
          <th scope="col" className="px-6 py-3 text-lg">
            "1 to 5"
          </th>
          <th scope="col" className="px-6 py-3 text-lg">
            "6 to 8"
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index ) => {
          return (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg"
              >
                {item.name}
              </th>
              <td className="px-6 py-4 text-lg">
                {(item.one * studentCnt).toFixed(5)}
              </td>
              <td className="px-6 py-4 text-lg">
                {(item.two * studentCnt).toFixed(5)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Show;
