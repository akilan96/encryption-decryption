import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const Table = ({ active, machines, page }) => {
  const enCodeText = (cipher, maskid, uuid) => {
    let val = cipher + "!" + maskid + "!" + uuid;
    const text = btoa(val);
    const encoded = btoa(text);
    return encoded;
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Key Copied..");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const limit = 9;

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-2 ml-5 mr-5">
      <table className="table">
        {/* head */}

        {active == "encrypted" ? (
          <>
            <thead className="bg-gray-950 text-white tabs-font  text-left font-bold">
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Name</th>
                <th>Extension</th>
                <th>TargetDrive</th>
                <th>Storage</th>
                <th>Key</th>
                <th>Actions</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody className="bg-blue-200 font-medium c-font overflow-hidden">
              {/* row 1 */}

              {machines.length > 0 ? (
                machines.map((machine, index) => (
                  <tr key={machine.uuid}>
                    <th>{(page - 1) * limit + index + 1}</th>
                    {/* <td>{(((machine.createdAt).split("T")[0]).split("-")).reverse().join("-")}</td> */}
                    <td>
                      {new Date(machine.createdAt).toLocaleDateString("en-GB")}
                    </td>
                    <td>{machine.machineName}</td>
                    <td>
                      {machine.TargetExtension == "NA"
                        ? machine.TargetExtension
                        : machine.TargetExtension.substring(
                            1,
                            machine.TargetExtension.length,
                          )}
                    </td>

                    <td>{machine.TargetDrive}</td>
                    <td>{machine.AvailedStorage}</td>
                    <td className="flex gap-1">
                      {machine.TargetExtension == "NA"
                        ? "No Need"
                        : (enCodeText(
                            machine.cipher,
                            machine.maskid,
                            machine.uuid,
                          ).substring(0, 9)}
                      ..
                    </td>

                    <td>
                      {" "}
                      <div className="flex ">
                        <div
                          className="tooltip tooltip-start tooltip-primary md:tooltip-right md:tooltip-center"
                          data-tip="Copy"
                        >
                          <button
                            onClick={() =>
                              copyToClipboard(
                                enCodeText(
                                  machine.cipher,
                                  machine.maskid,
                                  machine.uuid,
                                ),
                              )
                            }
                            className="text-blue-600 text-lg cursor-pointer"
                          >
                            <FaCopy />
                          </button>
                        </div>

                        {/* <div
                          className="tooltip tooltip-start tooltip-secondary md:tooltip-right md:tooltip-center"
                          data-tip="Edit"
                        >
                          <button className="text-green-600 text-lg cursor-pointer">
                            <FaEdit />
                          </button>
                        </div> */}
                      </div>
                    </td>
                    <td>{machine.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="text-center py-5 text-gray-800">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </>
        ) : (
          <>
            <thead className="bg-gray-950 text-white tabs-font  text-left font-bold">
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Machine Name</th>
                <th>Extension</th>
                <th>Mask Number</th>
                <th>TargetDrive</th>
                <th>TotalFound</th>
                <th>SuccessCount</th>
                <th>SkipCount</th>
              </tr>
            </thead>
            <tbody className="bg-blue-200 font-medium c-font">
              {/* row 1 */}

              {machines.length > 0 ? (
                machines.map((machine, index) => (
                  <tr key={machine._id}>
                    <th>{(page - 1) * limit + index + 1}</th>
                    {/* <td>{(((machine.createdAt).split("T")[0]).split("-")).reverse().join("-")}</td> */}
                    <td>
                      {new Date(machine.createdAt).toLocaleDateString("en-GB")}
                    </td>
                    <td>{machine.machineName}</td>
                    <td>
                      {machine.TargetExtension.substring(
                        1,
                        machine.TargetExtension.length,
                      )}
                    </td>
                    <td>{machine.maskid}</td>
                    <td>{machine.TargetDrive}</td>
                    <td>{machine.TotalFound} </td>
                    <td>{machine.SuccessCount}</td>
                    <td>{machine.SkipCount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="text-center py-5 text-gray-800">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

export default Table;
