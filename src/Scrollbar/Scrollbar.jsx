import userPic from "../assets/user.jpg"
import { FaCalendarDays, FaClipboardList, FaLayerGroup } from "react-icons/fa6";
import { RiWechatLine } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import "./Scrollbar.css";


const Scrollbar = () => {

    return (
        <div className="w-full h-full px-5 fixed py-5 top-0 left-0">
            <div className=" overflow-x-scroll rounded-lg h-full w-full">
                <div className=" w-fit flex justify-between h-full">
                    <div className="w-[400px] h-full bg-slate-200 py-3 mx-3 px-2 rounded-lg">
                        <div className="w-full px-3 flex justify-between items-center">
                            <h3 className=" ml-6 relative after:content-[''] after:absolute after:w-5 after:h-5 after:bg-red-400 after:-left-6 after:rounded-s-full after:top-1/2 after:-translate-y-1/2 font-bold text-black">Incomplete</h3>
                            <p className="text-black py-1 px-2 bg-slate-300 rounded-lg font-bold">0</p>
                        </div>
                        <div className="py-2 mt-5 w-full  px-2 rounded-lg h-[92%] scroll-ml-10 overflow-y-scroll">
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[400px] h-full bg-slate-200 py-3 mx-3 px-2 rounded-lg">
                        <div className="w-full px-3 flex justify-between items-center">
                            <h3 className=" ml-6 relative after:content-[''] after:absolute after:w-5 after:h-5 after:bg-red-400 after:-left-6 after:rounded-s-full after:top-1/2 after:-translate-y-1/2 font-bold text-black">Incomplete</h3>
                            <p className="text-black py-1 px-2 bg-slate-300 rounded-lg font-bold">0</p>
                        </div>
                        <div className="py-2 mt-5 w-full  px-2 rounded-lg h-[92%] scroll-ml-10 overflow-y-scroll">
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[400px] h-full bg-slate-200 py-3 mx-3 px-2 rounded-lg">
                        <div className="w-full px-3 flex justify-between items-center">
                            <h3 className=" ml-6 relative after:content-[''] after:absolute after:w-5 after:h-5 after:bg-red-400 after:-left-6 after:rounded-s-full after:top-1/2 after:-translate-y-1/2 font-bold text-black">Incomplete</h3>
                            <p className="text-black py-1 px-2 bg-slate-300 rounded-lg font-bold">0</p>
                        </div>
                        <div className="py-2 mt-5 w-full  px-2 rounded-lg h-[92%] scroll-ml-10 overflow-y-scroll">
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[400px] h-full bg-slate-200 py-3 mx-3 px-2 rounded-lg">
                        <div className="w-full px-3 flex justify-between items-center">
                            <h3 className=" ml-6 relative after:content-[''] after:absolute after:w-5 after:h-5 after:bg-red-400 after:-left-6 after:rounded-s-full after:top-1/2 after:-translate-y-1/2 font-bold text-black">Incomplete</h3>
                            <p className="text-black py-1 px-2 bg-slate-300 rounded-lg font-bold">0</p>
                        </div>
                        <div className="py-2 mt-5 w-full  px-2 rounded-lg h-[92%] scroll-ml-10 overflow-y-scroll">
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[400px] h-full bg-slate-200 py-3 mx-3 px-2 rounded-lg">
                        <div className="w-full px-3 flex justify-between items-center">
                            <h3 className=" ml-6 relative after:content-[''] after:absolute after:w-5 after:h-5 after:bg-red-400 after:-left-6 after:rounded-s-full after:top-1/2 after:-translate-y-1/2 font-bold text-black">Incomplete</h3>
                            <p className="text-black py-1 px-2 bg-slate-300 rounded-lg font-bold">0</p>
                        </div>
                        <div className="py-2 mt-5 w-full  px-2 rounded-lg h-[92%] scroll-ml-10 overflow-y-scroll">
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-3 px-3 bg-white rounded-lg my-3">
                                <div className=" flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-8 rounded-full h-8 mr-2" src={userPic} alt="" />
                                        <h4 className=" font-bold">Client Name</h4>
                                    </div>
                                </div>
                                <div className="my-3 flex justify-between items-center">
                                    <div className="flex justify-end items-center">
                                        <FaLayerGroup className="text-xl mr-1" />
                                        <p className="">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex py-1 px-1 bg-slate-200 rounded-md justify-end items-center">
                                        <FaClipboardList className="text-xl mr-1" />
                                        <p className="">1/2</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex relative justify-between items-center">
                                        <div className="flex items-center">
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                            <img className="w-8 rounded-full h-8" src={userPic} alt="" />
                                        </div>

                                        <h4 className=" py-2 px-2 rounded-full bg-slate-200">12+</h4>
                                        <div className="flex justify-end items-center">
                                            <RiWechatLine className="text-3xl mr-1" />
                                            <p className="">15</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <div className="btn-hover">
                                                <button className="">
                                                    <GrAttachment className="text-xl mr-1" />
                                                </button>
                                                <div className="hover-div absolute -left-0 z-10 bg--500">
                                                    <div className=" flex flex-col py-3 px-3 bg-slate-400 rounded-xl justify-center items-start">
                                                        <input className=" inline-block" type="file" name="file" />
                                                        <button className="py-2 my-3 inline-block rounded-xl px-5 bg-slate-200">upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="">25</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <FaCalendarDays className="text-xl mr-1" />
                                            <p className="">25-8-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scrollbar;