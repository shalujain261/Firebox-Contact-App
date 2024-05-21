import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import { IoSearchOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi2";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const ContactsSnapshot = await getDocs(contactRef);
        const contactList = ContactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (error) {}
    };
    getContacts();
  }, []);

  return (
    <div className="mx-w-[370px] mx-auto px-6 flex flex-col justify-center items-center">
      <Navbar />

      <div className="flex gap-3">
        <div className="flex relative">
          <IoSearchOutline className="absolute text-white text-2xl font-semibold m-2" />
          <input
            type="text"
            placeholder="Search Contacts"
            className=" bg-transparent border border-white h-12 rounded-md  text-white w-[300px] px-9"
          />
        </div>
        <div>
          <FaCirclePlus className=" h-[52px] w-[52px]  text-white" />
        </div>
      </div>
      <div>
        {contacts.map((contact) => {
          <div key={contact.id}>
            <HiOutlineUserCircle />
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
