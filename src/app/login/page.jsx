import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <h1 className="p-4 text-3xl">Login Page</h1>
      <form action="" className="bg-white p-5 flex flex-col gap-1.5 min-w-[35%] min-h-[50vh] border border-gray-500 rounded-2xl">
        <label className="" htmlFor="">
          Username
        </label>
        <input className="p-5 border border-black rounded-sm" type="text" />
        <label className="" htmlFor="">
          Password
        </label>
        <input className="p-5 border border-black rounded-sm" type="text" />
        <div className="py-2.5 flex justify-center">
          <button className="p-5 w-full bg-blue-400 rounded text-white">Log In</button>
        </div>
        <div>
          <Link href={"/forgot-password"} className="text-blue-500">Forgot Your Password?</Link>
        </div>
      </form>
    </div>
  );
}
