import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Table from "./Components/Table.jsx";
import { Pagination } from "./Components/Pagination.jsx";
import Search from "./Components/Search.jsx";
import { Toaster } from "react-hot-toast";
import Tabs from "./Components/Tabs.jsx";
import {
  useGetDecryptedMachines,
  useGetEncryptedMachines,
} from "./Hooks/machineHooks.js";

const App = () => {
  const [active, setActive] = useState("encrypted");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounce(search);
    }, 500);

    return ()=>clearTimeout(timer)
  }, [search]);

  const {
    data: encryptedMachines = [],
    isLoading: encryptedLoading,
    error: encryptedError,
  } = useGetEncryptedMachines(active === "encrypted", page, debounce);

  const {
    data: decryptedMachines = [],
    isLoading: decryptedLoading,
    error: decryptedError,
  } = useGetDecryptedMachines(active === "decrypted", page, debounce);

  const response =
    active == "encrypted" ? encryptedMachines : decryptedMachines;

  const machines = response?.data || [];
  const totalPages = response?.totalPages || 1;

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#fff",
            border: "1px solid #374151",
          },
        }}
      />
      <div className="min-h-screen bg-slate-200">
        <Navbar />
        <div className="flex justify-end ">
          <Search search={search} setSearch={setSearch} />
        </div>
        <Tabs active={active} setActive={setActive} />
        <Table active={active} machines={machines} page={page}/>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default App;
