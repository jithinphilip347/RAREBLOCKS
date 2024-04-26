export default function Header() {
    return (
      <div className="flex justify-between items-center mx-14 relative top-4 h-12 rounded-2xl ">
        <div className="flex items-center gap-5">
          <h2 className="text-base font-bold font-montserrat"><span className="text-red-500">/</span>RAREBLOCKS</h2>
          <p className="text-sm font-semibold font-montserrat hover:cursor-pointer">Solutions</p>
          <p className="text-sm font-semibold font-montserrat hover:cursor-pointer">Industries</p>
          <p className="text-sm font-semibold font-montserrat hover:cursor-pointer">Fees</p>
          <p className="text-sm font-semibold font-montserrat hover:cursor-pointer">About Rareblocks</p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-base font-semibold font-montserrat hover:cursor-pointer">SignIn</p>
          <div className="bg-black rounded-2xl text-white h-12 flex items-center">
            <p className="text-base font-semibold font-montserrat p-3 hover:cursor-pointer">Create free account</p>
          </div>
        </div>
      </div>
    );
  }
  