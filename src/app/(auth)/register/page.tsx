import Image from "next/image";
import React from "react";
import lock from "/public/imgs/lock.png";
const page = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[url(/imgs/bg.jpg)] bg-no-repeat bg-cover ">
            <div className="z-10 shadow-slate-800/55 shadow-2xl border-gray-500/15 border p-9 rounded-md flex flex-col gap-9 backdrop-blur-md bg-white/10">
                <div className="flex justify-center items-end gap-x-5">
                    <Image className="w-14" src={lock} alt={"image"} />
                    <h1 className="text-5xl font-bold text-[#011456]">MedAuth</h1>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-4">
                        <label htmlFor="" className="font-medium capitalize text-[#a8108f]">username<b className="text-red-600">*</b></label>
                        <input type="text" className="rounded-md border border-gray-500 p-2 outline-none" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <label htmlFor="" className="font-medium capitalize text-[#a8108f]">email<b className="text-red-600">*</b></label>
                        <input type="text" className="rounded-md border border-gray-500 p-2 outline-none" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <label htmlFor="" className="font-medium capitalize text-[#a8108f]">password<b className="text-red-600">*</b></label>
                        <input type="text" className="rounded-md border border-gray-500 p-2 outline-none" />
                    </div>
                </div>
                <div className="grid">
                    <button className="bg-[#56075A] hover:bg-[#360151] text-white font-bold duration-300 py-2 px-4 rounded">Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default page;
