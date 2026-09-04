import React from "react";
import { FaPlay } from "react-icons/fa";
import { LucideBrainCircuit } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { FileText } from "lucide-react";
function UI() {
    return (
        <div className="min-h-screen bg-gray-200 text-[#17191c]">


            <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-md mb-underline">
                <nav className="mx-auto flex h-[88px] max-w-[1700px] items-center justify-between px-8">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[black] text-xl font-bold text-blue-300">
                            IP
                        </div>

                        <span className="text-[28px] font-bold tracking-tight text-black">
                            InterviewPro
                        </span>
                    </div>


                    <div className="flex justify-center items-center gap-6 ">
                        <a
                            className="text-[19px] font-medium text-gray-700 transition hover:text-black hover:underline "
                        >
                            Home
                        </a>

                        <a

                            className="text-[19px] font-medium text-gray-700 transition hover:text-black hover:underline"
                        >
                            Roles
                        </a>

                        <a

                            className="text-[19px] font-medium text-gray-700 transition hover:text-black hover:underline"
                        >
                            Resume Checker
                        </a>

                        <a

                            className="text-[19px] font-medium text-gray-700 transition hover:text-black hover:underline"
                        >
                            Interview Prep
                        </a>

                        <a

                            className="text-[19px] font-medium text-gray-700 transition hover:text-black hover:underline"
                        >
                            Feedback
                        </a>

                        <a

                            className="text-[19px] font-medium text-gray-700 transition hover:text-black hover:underline"
                        >
                            Dashboard
                        </a>
                    </div>


                    <div className="flex items-center gap-5">


                        <div className="hidden items-center gap-3 rounded-full bg-gray-100 px-5 py-3 md:flex">
                            <span className="h-3 w-3 rounded-full bg-cyan-300"></span>

                            <span className="text-sm font-semibold tracking-[2px] text-gray-600">
                                AI COACH ONLINE
                            </span>
                        </div>


                        <button className="rounded-full bg-black px-7 py-4 text-[17px] font-semibold text-white transition hover:bg-gray-800">
                            Sign in
                        </button>
                    </div>
                </nav>
            </header>

            <main
                id="home"
                className="relative flex min-h-screen items-center justify-center overflow-hidden pt-[88px]"
            >


                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-[-180px] top-[100px] h-[600px] w-[600px] rounded-full bg-blue-100/50 blur-[100px]" />

                    <div className="absolute right-[-150px] bottom-[-100px] h-[600px] w-[600px] rounded-full bg-cyan-100/40 blur-[120px]" />

                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[100px]" />
                </div>

                <section className="mx-auto mt-20 flex w-full max-w-[1300px] flex-col items-center px-6 pb-24 text-center">

                    <div className="mb-12 flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm">
                        <span className="h-3 w-3 rounded-full bg-cyan-300"></span>

                        <span className="text-sm font-semibold tracking-[2px] text-gray-600">
                            NEW: INTERACTIVE TECH INTERVIEWS
                        </span>
                    </div>
                    <h1 className="max-w-[1150px] text-5xl font-extrabold leading-[1.08] tracking-[-2px] sm:text-6xl md:text-7xl lg:text-[82px]">

                        <span className="block">
                            Master Your Next Interview
                        </span>
                        with <span
                            className="
               text-teal-500
                bg-clip-text
              "
                        >
                            Artificial Intelligence
                        </span>

                    </h1>

                    <p className="mt-12 max-w-[650px] text-lg font-normal leading-10 text-gray-600 sm:text-xl md:text-[24px]">
                        Experience hyper-realistic mock interviews tailored to your target
                        role. Get real-time feedback, behavioral analysis, and actionable
                        insights to land your dream job.
                    </p>

                    <div className="mt-14 flex flex-row items-center gap-5 ">

                        <button
                            className="
                min-w-[315px]
                rounded-full
                bg-black
                px-10
                py-5
                text-lg
                font-semibold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-gray-800
                hover:shadow-xl
              "
                        >
                            Start Practicing for Free
                        </button>

                        <button
                            className="
                flex
                min-w-[250px]
                items-center
                justify-center
                gap-4
                border-3
                rounded-full
                bg-gray-100
                px-10
                py-5
                text-lg
                font-medium
                text-gray-800
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-black-700
                hover:text-white=800
              "
                        >
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-700">
                                <FaPlay className="ml-[2px] text-[9px]" />
                            </span>

                            Watch Demo
                        </button>

                    </div>

<div className=" flex mt-10 flex-col gap-6"><h6 className=" text-xl fond-semibold">TRUSTED BY 50000+. JOB SEEKERS LANDING ROLES AT</h6>
<h5 className="flex items-center justify-center gap-10 text-2xl font-extrabold tracking-tight text-slate-500 sm:gap-12 md:text-2xl "><span>Northwind </span><span>Vertex</span> <span>Lumen</span><span>Aperture</span><span>Corewave</span></h5></div>

<div className="bg-gray-100 rounded-xl p-8  mt-10 flex flex-col justify-start gap-4">
    <h1 className="mt-5 flex text-2xl font-bold">The Complete Preparation Toolkit</h1>
    <p className="max-w-xl text-left justify-start  text-base text-slate-600 leading-relaxed">Everything you need to transform anxiety into confidense,powered by <br/>state-of-the-art AI</p>


    <div className="grid min-w grid-cols-1 md:grid-cols-3 mt-3 gap-5">
        <div className="flex flex-col p-6 text-left bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600">
          <LucideBrainCircuit className="w-6 h-6" />
        </div>
        <h3 className="mt-6 mb-2 text-xl font-bold text-slate-900">
          Realistic Mock Interviews
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Converse with an AI that dynamically adapts its questions based on your resume, the job description, and your real-time responses.
        </p>
      </div>
        <div className="flex flex-col p-6 text-left bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className=" flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600">
            <TrendingUp className="h-6 w-6" /></div><h1 className="mt-6 mb-2 text-xl font-bold text-slate-900">Real Time Feedback</h1>
        <p className="text-sm leading-relaxed text-slate-600">Get immediate,granular analysis on your tone,pacing,keyword usage,and bdhaviour competences while you practice</p></div>
       <div className="flex flex-col p-6 text-left bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600">
            <FileText className="h-6 w-6" /></div><h1 className="mt-6 mb-3 text-xl font-bold text-slate-900">Resume Optimizations</h1>
        <p className="text-sm leading-relaxed text-slate-600">Our AI scans yours resume against the job descriptions,suggestion impactful edits to bypass ATS systems and impress recruiters </p></div>
    </div>
</div>

<div className="bg-black min-w-[1250px] border-3 rounded-xl p-8 mt-10 flex flex-col justify-center gap-6">
<h5 className="text-teal-600 ">Ready when you are</h5>
<h2 className="text-white">Run your first AI mock interview in under two miutes</h2>
 <div className="mt-14 flex flex-row justify-center items-center gap-5 ">

                        <button className="min-w-[315px] rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:text-white hover:shadow-xl">
                        
                            Choose your Role
                        </button>

        <button className="flex min-w-[250px] items-center justify-center gap-4 border-3 rounded-full bg-black px-10 py-5 text-lg font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black">
                            Analyze my resume
                        </button>

                    </div>
</div>
<div className="bg-gray-100 min-w-[1250px] mt-12  rounded-xl">
   <div className="flex items-center justify-between "> <h3 className="flex text-2xl font-bold p-6">InterviewPro </h3>
    <h4 className="flex justify-end gap-6 p-8 text-slate-500 sm:gap-12 md:text-2xl "><span>Support</span><span>Resources</span><span>Privacy</span><span>Terms</span></h4>
    </div>
    <p className="mb-10 flex pl-6">Empowering Careers through Artifical Intelligence</p>
</div>


<div className="flex mt-10 justify-center">@2026 AI Interview Pro.Build with professional precision</div>
           
                </section>
            </main>

        </div>
    );
};

export default UI;