export default function ForgotPassword() {
  return (
    <div className="flex justify-center items-center flex-col min-h-[90vh]">
      <h1 className="text-3xl font-bold p-4">Reset Your Password</h1>
      <form action="" className="flex flex-col min-w-[35%] min-h-[40vh] border border-black p-3.5">
        <input className="p-3 w-full border border-gray-400 text-2xl" type="email" placeholder="Enter you email" />
        <div>
        <button>Cancel</button>
        <button>Continue</button>
        </div>
      </form>
    </div>
  );
}
