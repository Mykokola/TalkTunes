export const ModalAuth = () => {
  return (
    <div className=" h-52 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2   p-5 w-60  bg-slate-700 flex">
      <form className=" w-full">
        <label className="authLabel" htmlFor="">
          Email
          <input className=" w-full" type="text" />
        </label>
        <label className="authLabel" htmlFor="">
          Password
          <input className=" w-full" type="text" />
        </label>
        <label className="authLabel" htmlFor="">
            Repeat password
        <input className=" w-full" type="text" />
        </label>
      </form>
    </div>
  );
};
