// "use client";
import React from "react";

const getUsers = async () => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/users/6fc07a84-8b4c-4b4d-97f4-b71303a7af04`
    );
    if (!res.ok) {
      return { message: `Error` };
    }
    // console.log(res.json());
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Example() {
  const data = await getUsers();
  return (
    <div className="w-full h-screen bg-red-400 flex justify-center items-center">
      {data.data.map((i) => {
        return (
          <div key={i.id} className="h-32 w-60 bg-white rounded-xl">
            <p>
              {i.first_name} {i.last_name}
            </p>
            <p>{i.balance}</p>
          </div>
        );
      })}
    </div>
  );
}
