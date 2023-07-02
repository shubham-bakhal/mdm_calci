import axios from "axios";
import React, { useState } from "react";

const Update = ({ data, setData }) => {
  const [inEditMode, setInEditMode] = useState({
    id: null,
    one: null,
    two: null,
  });


  const handleChange = async (id, one, two) => {
    console.log("id", id);
    console.log("one", one);
    console.log("two", two);
    setInEditMode({
      id: id,
      one: one,
      two: two,
    });
    const res = await axios.post("https://mdm-calci.onrender.com/update", {
      id: id,
      one: one,
      two: two,
    });
    console.log(res.data);
    setData(res.data.data);
  };

  const handleEdit = (id, one, two) => {
    console.log("id", id);
    console.log("one", one);
    console.log("two", two);
    setInEditMode({
      id: id,
      one: one,
      two: two,
    });
  };

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
        {data &&
          data.map((item, index) => {
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
                <td
                  onClick={(e) => handleEdit(item._id, item.one, item.two)}
                  className="px-6 py-4 text-lg"
                >
                  {inEditMode.id === item._id ? (
                    <>
                      <input
                        type="number"
                        value={inEditMode.one}
                        onChange={(e) =>
                          handleChange(item._id, e.target.value, item.two)
                        }
                        className="w-20 text-black"
                      />
                    </>
                  ) : (
                    item.one
                  )}
                </td>
                <td
                  onClick={(e) => handleEdit(item._id, item.one, item.two)}
                  className="px-6 py-4 text-lg"
                >
                  {inEditMode.id === item._id ? (
                    <>
                      <input
                        type="number"
                        value={inEditMode.two}
                        onChange={(e) =>
                          handleChange(item._id, item.one, e.target.value)
                        }
                        className="w-20 text-black"
                      />
                    </>
                  ) : (
                    item.two
                  )}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Update;
