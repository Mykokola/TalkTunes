"use client";
import Link from "next/link";
import { ModalAuth } from "@/components/modal";
import { useEffect, useState } from "react";
import { currnetUser, logOut } from "@/utils/auth";
export const Header = () => {
  const [signup, setSignup] = useState(false);
  const [auth, setAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [useEmail, setUserEmail] = useState("");
  const signUpBtn: () => void = () => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
    setSignup(true);
  };
  const loginBtn: () => void = () => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
    setSignup(false);
  };
  const closeBtn: (event: React.MouseEvent) => void = (
    event: React.MouseEvent
  ) => {
    if (event.currentTarget === event.target) {
      document.body.style.overflow = "auto";
      setShowModal(false);
      setSignup(false);
    }
  };
  const authUser = async () => {
    setAuth(true);
    setShowModal(false);
    setSignup(false);
    document.body.style.overflow = "auto";
    const { client } = await currnetUser();
    const { name } = client;
    setUserEmail(name);
  };
  const logoutUser = async () => {
    await logOut();
    setAuth(false);
  };
  useEffect(() => {}, []);
  return (
    <header className="mr-14 container  pt-7  flex items-center justify-between   font-medium  ">
      <nav className="text-xl gap-x-3 flex">
        <Link href="#Achievements">Achievements</Link>
        <Link href="#Game">Game</Link>
        <Link href="#Contact">Projects</Link>
      </nav>
      <div className=" gap-5 flex">
        {auth ? (
          <>
            <p>{useEmail}</p>
            <button
              onClick={logoutUser}
              className="authButton     bg-slate-400 text-cyan-50 "
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={signUpBtn}
              className="authButton     bg-slate-400 text-cyan-50 "
            >
              Register
            </button>
            <button
              onClick={loginBtn}
              className="authButton  bg-slate-400 text-red-400 "
            >
              Login
            </button>
          </>
        )}
      </div>
      {showModal && (
        <ModalAuth
          authUser={authUser}
          closeBtn={closeBtn}
          signup={signup}
        ></ModalAuth>
      )}
    </header>
  );
};
