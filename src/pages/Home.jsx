import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";

import { toast } from "react-toastify";
import { Modal } from "flowbite-react";
export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  // Dataset
  const [cveData, setCveData] = useState([
    {
      id: 1,
      cveId: "CVE-2024-001",
      severity: "High",
      cvss: 9.0,
      packages: "Package_A",
      cwe: "CWE-123",
    },
    {
      id: 2,
      cveId: "CVE-2024-002",
      severity: "Medium",
      cvss: 7.5,
      packages: "Package_B",
      cwe: "CWE-456",
    },
    {
      id: 3,
      cveId: "CVE-2024-003",
      severity: "Low",
      cvss: 3.8,
      packages: "Package_C",
      cwe: "CWE-78",
    },
    {
      id: 4,
      cveId: "CVE-2024-004",
      severity: "Critical",
      cvss: 9.7,
      packages: "Package_D",
      cwe: "CWE-22",
    },
    {
      id: 5,
      cveId: "CVE-2024-005",
      severity: "High",
      cvss: 8.0,
      packages: "Package_E",
      cwe: "CWE-125",
    },
    {
      id: 6,
      cveId: "CVE-2024-006",
      severity: "Medium",
      cvss: 5.5,
      packages: "Package_F",
      cwe: "CWE-256",
    },
    {
      id: 7,
      cveId: "CVE-2024-007",
      severity: "Low",
      cvss: 3.0,
      packages: "Package_G",
      cwe: "CWE-94",
    },
    {
      id: 8,
      cveId: "CVE-2024-008",
      severity: "Critical",
      cvss: 9.5,
      packages: "Package_H",
      cwe: "CWE-98",
    },
    {
      id: 9,
      cveId: "CVE-2024-009",
      severity: "High",
      cvss: 7.2,
      packages: "Package_I",
      cwe: "CWE-330",
    },
    {
      id: 10,
      cveId: "CVE-2024-010",
      severity: "Medium",
      cvss: 6.0,
      packages: "Package_J",
      cwe: "CWE-212",
    },
    // ... more initial data
  ]);

  const [editingCve, setEditingCve] = useState(null);
  const [newCve, setNewCve] = useState({
    cveId: "",
    severity: "",
    cvss: "",
    packages: "",
    cwe: "",
  });

  const handleAddCve = () => {
    // Add new CVE record to the data array
    setCveData([...cveData, { id: Date.now(), ...newCve }]);
    toast.success("CVE record added successfully!");
    // Clear the form
    setNewCve({ cveId: "", severity: "", cvss: "", packages: "", cwe: "" });
  };

  const handleEditCve = (id) => {
    // Find the CVE record to edit
    const cveToEdit = cveData.find((cve) => cve.id === id);
    // Set the editingCve state to trigger modal
    setEditingCve(cveToEdit);
  };
  const handleSaveEdit = () => {
    // Find the index of the editingCve in the data array
    const index = cveData.findIndex((cve) => cve.id === editingCve.id);
    // Update the CVE record in the array
    cveData[index] = { ...editingCve };
    toast.success("CVE record edited successfully!");
    // Clear the editing state
    setEditingCve(null);
  };
  const handleDeleteCve = (id) => {
    if (window.confirm("Are you sure you want to delete this CVE record?")) {
      // Filter out the CVE record to delete
      const updatedCveData = cveData.filter((cve) => cve.id !== id);
      // Update the state
      setCveData(updatedCveData);
      toast.success("CVE record deleted successfully!");
    }
  };
  return (
    <>
      <div>
        <Slider />

        <div className="max-w-6xl mx-auto pt-4 space-y-6 ">
          <h2 className="px-3 text-2xl mt-6 font-semibold">View CVE Records</h2>
          {/* View CVE Records */}
          <div>
            <table className="min-w-full m-2 mb-6 ">
              <thead className="bg-white rounded-md">
                <tr>
                  <th className="px-3 py-2">CVE-ID</th>
                  <th className="px-3 py-2">Severity</th>
                  <th className="px-3 py-2">CVSS</th>
                  <th className="px-3 py-2">Affected Packages</th>
                  <th className="px-3 py-2">CWE-ID</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cveData.map((cve) => (
                  <tr key={cve.id}>
                    <td className="px-3 py-2 ">{cve.cveId}</td>
                    <td className="px-3 py-2">{cve.severity}</td>
                    <td className="px-3 py-2">{cve.cvss}</td>
                    <td className="px-3 py-2">{cve.packages}</td>
                    <td className="px-3 py-2">{cve.cwe}</td>
                    <td className="px-3 py-2">
                      <button
                        onClick={function (e) {
                          handleEditCve(cve.id);
                          setOpenModal(true);
                        }}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCve(cve.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-md ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Step-1 : Add New Data */}
          <div>
            <h3 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Add New CVE Record
            </h3>
            <div>
              <label class="block text-lg font-semibold leading-6 text-gray-900 ">
                CVE-ID:{" "}
                <input
                  type="text"
                  value={newCve.cveId}
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) =>
                    setNewCve({ ...newCve, cveId: e.target.value })
                  }
                />
              </label>
              <label class="block text-lg font-semibold leading-6 text-gray-900 mt-3">
                Severity:{" "}
                <input
                  type="text"
                  value={newCve.severity}
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) =>
                    setNewCve({ ...newCve, severity: e.target.value })
                  }
                />
              </label>
              <label class="block text-lg font-semibold leading-6 text-gray-900 mt-3">
                CVSS:{" "}
                <input
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={newCve.cvss}
                  onChange={(e) =>
                    setNewCve({ ...newCve, cvss: e.target.value })
                  }
                />
              </label>
              <label class="block text-lg font-semibold leading-6 text-gray-900 mt-3">
                Affected Packages:{" "}
                <input
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={newCve.packages}
                  onChange={(e) =>
                    setNewCve({ ...newCve, packages: e.target.value })
                  }
                />
              </label>
              <label class="block text-lg font-semibold leading-6 text-gray-900 mt-3">
                CWE-ID:{" "}
                <input
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={newCve.cwe}
                  onChange={(e) =>
                    setNewCve({ ...newCve, cwe: e.target.value })
                  }
                />
              </label>
              <button
                className="mt-5 w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mb-6"
                onClick={handleAddCve}
              >
                Save
              </button>
            </div>
          </div>

          {/* Step-2 : Edit Modal */}
          <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body className="w-80">
              <div
                class="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                          <div class="mx-auto mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3
                              class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
                              id="modal-title"
                            >
                              Edit CVE Record
                            </h3>
                            <div class="mt-2">
                              <div>
                                {editingCve && (
                                  <div className="mx-auto">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                      CVE-ID:{" "}
                                      <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={editingCve.cveId}
                                        onChange={(e) =>
                                          setEditingCve({
                                            ...editingCve,
                                            cveId: e.target.value,
                                          })
                                        }
                                      />
                                    </label>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                      Severity:{" "}
                                      <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={editingCve.severity}
                                        onChange={(e) =>
                                          setEditingCve({
                                            ...editingCve,
                                            severity: e.target.value,
                                          })
                                        }
                                      />
                                    </label>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                      CVSS:{" "}
                                      <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={editingCve.cvss}
                                        onChange={(e) =>
                                          setEditingCve({
                                            ...editingCve,
                                            cvss: e.target.value,
                                          })
                                        }
                                      />
                                    </label>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                      Affected Packages:{" "}
                                      <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={editingCve.packages}
                                        onChange={(e) =>
                                          setEditingCve({
                                            ...editingCve,
                                            packages: e.target.value,
                                          })
                                        }
                                      />
                                    </label>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                      CWE-ID:{" "}
                                      <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={editingCve.cwe}
                                        onChange={(e) =>
                                          setEditingCve({
                                            ...editingCve,
                                            cwe: e.target.value,
                                          })
                                        }
                                      />
                                    </label>
                                    <div class="flex flex-row-reverse space-x-4 space-x-reverse ">
                                      <button
                                        onClick={function (e) {
                                          handleSaveEdit();
                                          setOpenModal(false);
                                        }}
                                        className="mt-3 bg-blue-500 text-white px-4 py-1 rounded-md"
                                      >
                                        Save
                                      </button>
                                      <button
                                        onClick={function (e) {
                                          setEditingCve(null);
                                          setOpenModal(false);
                                        }}
                                        className="mt-3 bg-red-500 text-white px-4 py-1 rounded-md mr-2"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          onClick={() => setOpenModal(false)}
                          class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                          Deactivate
                        </button>
                        <button
                          type="button"
                          onClick={() => setOpenModal(false)}
                          class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Cancel
                        </button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}
