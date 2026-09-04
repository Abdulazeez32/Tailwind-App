export default function UX(){
    return(
        <div>
        {/* <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
            <div className=" row-span-2 bg-blue-100">Home</div>
            <div className=" bg-blue-200">Login</div>
            <div className=" bg-blue-300">Register</div>
            <div className=" bg-blue-400">about</div>
            <div className=" bg-blue-100">Home</div>
            <div className=" bg-blue-200">Login</div>
            <div className=" bg-blue-300">Register</div>
            <div className="bg-blue-400">about</div>
            </div> */}

<div className="grid grid-cols-3">
    <div className="bg-blue-200 col-span-1 h-100">Outlet</div>
    <div className="bg-blue-400 col-span-1 ">Content Cards</div>

</div>
        
        </div>
    )
}