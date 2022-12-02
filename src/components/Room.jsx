import React, { useState, useEffect } from "react";
import { MdFreeBreakfast, MdHouse } from "react-icons/md";
import { GoX, GoThumbsup, GoPrimitiveDot } from "react-icons/go";
import RoomModal from "./admin/RoomModal";
import ReserveModal from "./ReserveModal";

const Room = ({ data }) => {
  const [admin, setAdmin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openReserveModal, setOpenReserveModal] = useState(false);

  const [object, setObject] = useState({});
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (
      window.location.pathname === "/admin-update-basic" ||
      window.location.pathname === "/admin-update-room" ||
      window.location.pathname === "/admin-update-rule"
    ) {
      setAdmin(true);
    }
  }, []);

  const openModalClick = (e, i) => {
    setOpenModal(true);
    setObject(e);
    setIndex(i);
    console.log(e);
    console.log(i);
  };

  const startReserveModal = (e, i) => {
    setOpenReserveModal(true);
    setObject(e);
    setIndex(i);
    console.log(e);
    console.log(i);
  };

  const handleOnClose = () => {
    setOpenModal(false);
    setOpenReserveModal(false);
  };

  return (
    <div className="mx-4 sm:mx-8 px-4 sm:px-8 py-4 overflow-x-auto" id="room">
      <div className="flex justify-center text-black my-8">
        <MdHouse className="mr-3" size={40} />
        <h1 className="text-4xl">ROOM</h1>
      </div>
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-[var(--light-primary)] bg-[var(--dark-primary)] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Room type
              </th>
              <th className="px-5 py-3 border-b-2 border-[var(--light-primary)] bg-[var(--dark-primary)] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Sleeps
              </th>
              <th className="px-5 py-3 border-b-2 border-[var(--light-primary)] bg-[var(--dark-primary)] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Prices
              </th>
              <th className="px-5 py-3 border-b-2 border-[var(--light-primary)] bg-[var(--dark-primary)] text-left text-xs font-semibold text-white uppercase tracking-wider">
                Your choices
              </th>
              <th className="px-5 py-3 border-b-2 border-[var(--light-primary)] bg-[var(--dark-primary)] text-left text-xs font-semibold text-white uppercase tracking-wider"></th>
              {admin && (
                <th className="px-5 py-3 border-b-2 border-[var(--light-primary)] bg-[var(--dark-primary)] text-center text-xs font-semibold text-red-400 uppercase tracking-wider">
                  Edit
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.listOfRooms.map((item) => {
              return (
                <tr>
                  <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-40 h-40">
                        <img
                          className="w-full h-full rounded-full"
                          src={item.photo}
                          alt=""
                        />
                      </div>
                      <div className="ml-5">
                        <h2 className="text-gray-900 whitespace-no-wrap">
                          {item.name}
                        </h2>
                        <p className="text-gray-900 whitespace-no-wrap ">
                          {item.size} m²
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item.beds}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      ${item.rate}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-col">
                      <div className="flex">
                        <MdFreeBreakfast className="mr-2" size={20} />
                        <p className="text-gray-900 whitespace-no-wrap">
                          Breakfast VND $5 (optional)
                        </p>
                      </div>
                      <div className="flex">
                        <GoX className="mr-2" size={20} />
                        <p className="text-gray-900 whitespace-no-wrap">
                          Free cancelation cost
                        </p>
                      </div>
                      <div className="flex">
                        <GoThumbsup className="mr-2" size={20} />
                        <p className="text-gray-900 whitespace-no-wrap font-bold">
                          NO PREPAYMENT NEEDED{" "}
                          <span className="font-normal">
                            - pay at the property
                          </span>
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div>
                      <div className="flex justify-center my-3">
                        <button
                          onClick={() => startReserveModal(item, item.id)}
                          className="primary flex justify-center"
                        >
                          I'll reserve
                        </button>
                      </div>
                      <div className="flex justify-left items-center">
                        <GoPrimitiveDot
                          className="mr-2 content-center "
                          size={15}
                        />
                        <p className="text-gray-900 whitespace-no-wrap">
                          Confirmation is immediate
                        </p>
                      </div>
                      <div className="flex justify-left items-center">
                        <GoPrimitiveDot
                          className="mr-2 content-center "
                          size={15}
                        />
                        <p className="text-gray-900 whitespace-no-wrap">
                          No booking or credit card fees!
                        </p>
                      </div>
                    </div>
                  </td>
                  {admin && (
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() => openModalClick(item, item.id)}
                        className="danger"
                      >
                        EDIT
                      </button>
                    </td>
                  )}
                  {openModal && (
                    <RoomModal
                      onClose={handleOnClose}
                      data={object}
                      value={object.id}
                      alldata={data}
                    />
                  )}

                  {openReserveModal && !admin && (
                    <ReserveModal
                      onClose={handleOnClose}
                      data={object}
                      value={object.id}
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

export default Room;
