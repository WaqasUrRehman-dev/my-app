'use client'
import { useRouter } from "next/navigation";

export default function UserProfile({ params }: any) {
  const router = useRouter();
  const onBack = () => {
    router.push("/profile");
  };
  console.log(params.id)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">Profile page</p>
      <span className=" p-4 ml-2 mt-2 rounded text-white bg-orange-500">
        {params.id}
      </span>
      <button onClick={onBack} className="bg-blue-600 text-white rounded-md p-4 mt-4">Back</button>
    </div>
  );
}
