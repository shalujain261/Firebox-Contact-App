function Navbar() {
  return (
    <div className="bg-white h-[60px] w-[360px] rounded-lg my-5 flex justify-center
    items-center">
      <div className="flex gap-2">
        <img className="h-[30px]" src="/logos_firebase.svg" />
        <h1 className="text-lg font-bold">Firebase contact App</h1>
      </div>
    </div>
  );
}

export default Navbar;
