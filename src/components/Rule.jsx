import React, { useState, useEffect } from "react";
import { FaBookOpen } from "react-icons/fa";
import RuleModal from "./modal/RuleModal";

const Rule = ({ data }) => {
  const [admin, setAdmin] = useState(false);
  const [keyRule, setKeyRule] = useState("");
  const [valueRule, setValueRule] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (
      window.location.pathname === "/admin-update-basic" ||
      window.location.pathname === "/admin-update-room" ||
      window.location.pathname === "/admin-update-rule"
    ) {
      setAdmin(true);
    }
  }, []);

  const openModalClick = (e, v) => {
    setOpenModal(true);
    setKeyRule(e);
    setValueRule(v);
  };

  const handleOnClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="mx-4 sm:mx-8 px-4 sm:px-8 py-4 overflow-x-auto" id="rule">
      <div className="flex justify-center text-black my-8">
        <FaBookOpen className="mr-3 text-black" size={40} />
        <h1 className="text-4xl">
          {admin ? "EDIT HOUSE RULES" : "HOUSE RULES"}
        </h1>
      </div>
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-[var(--dark-primary)] bg-[var(--light-primary)] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-[var(--dark-primary)] bg-[var(--light-primary)] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Description
              </th>
              {admin && (
                <th className="text-red-500 text-center px-5 py-3 border-b-2 border-[var(--dark-primary)] bg-[var(--light-primary)] text-xs font-semibold uppercase tracking-wider">
                  Edit
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {Object.entries(data?.houseRule).map(([key, value]) => {
              return (
                <tr>
                  <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{key}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{value}</p>
                  </td>
                  {admin && (
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        className="danger"
                        onClick={() => openModalClick(key, value)}
                      >
                        EDIT
                      </button>
                    </td>
                  )}
                  {openModal && (
                    <RuleModal
                      onClose={handleOnClose}
                      data={keyRule}
                      value={valueRule}
                      alldata={data}
                    />
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rule;
