"use client"
export const ModalAuth = ({closeBtn}:{closeBtn:() => void }) => {
  return (
    <div className=" bottom-0 left-0 fixed  w-full h-full bg-black bg-opacity-20   ">
    <div className="rounded-md -translate-x-1/2 h-auto -translate-y-1/2  absolute top-1/2 left-1/2   p-5 w-96  bg-slate-700 ">
        <h2 className=" font-medium text-base text-center text-red-300 mt-4">Here you can register</h2>
      <form className="  mt-5 w-full">
        <label className=" mb-2 authLabel">
          Email
          <input required className=" p-1 h-7 bg-inherit border  rounded-md w-full" type="email" />
        </label>
        <label className=" mb-2 authLabel" >
          Password
          <input required type='password' className=" p-1 h-7 bg-inherit border  rounded-md w-full" />
        </label>
        <label className="authLabel">
            Repeat password
        <input required className=" p-1 h-7 bg-inherit border  rounded-md w-full" type="password" />
        </label>
        <button className="font-medium text-base text-center text-white   bg-blue-400  rounded-md px-7 py-1 block ml-auto mr-auto mt-6" type="submit">sign up</button>
      </form>
      <button onClick={closeBtn} className="  hover:bg-red-300 hover:text-red-50 absolute bg-slate-50 px-2  rounded-full top-5 right-7">x</button>
    </div>
    </div>
  );
};
