import React from 'react';

export const Dashboard = () => {
  return (
    <>

{/* <nav classNameName="fixed top-0 z-50 w-full bg-gradient-to-r from-cyan-700 to-blue-900 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div classNameName="px-3 py-3 lg:px-5 lg:pl-3">
          <div classNameName="flex items-center justify-between">
            <div classNameName="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                classNameName="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span classNameName="sr-only">Open sidebar</span>
                <svg
                  classNameName="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" classNameName="flex ml-2 md:mr-24">
                <i classNameName="fas fa-yin-yang text-2xl text-yellow-400 mx-2 "></i>
                <span classNameName="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">
                  Dash <span classNameName="text-yellow-400">Board</span>
                </span>
              </a>
            </div>
            <div classNameName="flex items-center">
              <div classNameName="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    classNameName="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span classNameName="sr-only">Open user menu</span>
                    <img
                      classNameName="w-8 h-8 rounded-full"
                      src=""
                      alt="user photo"
                    />
                  </button>
                </div>
                <div classNameName="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <ul classNameName="py-1" role="none">
                    <li>
                      <a href="#" classNameName="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
  <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
    <ul className="space-y-2 font-medium">
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
        </a>
      </li>
    </ul>
  </div>
</aside>

  
<div className="p-4 sm:ml-64">
  <div className="grid grid-cols-4 gap-x-3 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">


    <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
      <div className="flex items-center">
        <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>
        <div className="flex-shrink-0 ml-3">
          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">test</span>
          <h3 className="text-base font-normal text-gray-500">
            Companies
          </h3>
        </div>
        <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
          +
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>   */}







<header>
    <nav aria-label="menu nav" className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

        <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                <a href="#" aria-label="Home">
                    <span className="text-xl pl-2"><i className="em em-grinning"></i></span>
                </a>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                <span className="relative w-full">
                    <input aria-label="search" type="search" id="search" placeholder="Search" className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"/>
                    <div className="absolute search-icon" style={{ top: '1rem', left: '.8rem' }}>
                        <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                </span>
            </div>

            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li className="flex-1 md:flex-none md:mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                    </li>
                    <li className="flex-1 md:flex-none md:mr-3">
                        <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                    </li>
                    <li className="flex-1 md:flex-none md:mr-3">
                        <div className="relative inline-block">
                            <button  className="drop-button text-white py-2 px-2"> <span className="pr-2"><i className="em em-robot_face"></i></span> Hi Admin <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
                            <div id="myDropdown" className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                                <input type="text" className="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" />
                                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw"></i> Profile</a>
                                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw"></i> Settings</a>
                                <div className="border border-gray-800"></div>
                                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</header>


<main>

    <div className="flex flex-col md:flex-row">
        <nav aria-label="alternative nav">
            <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">

                <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                    <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Tasks</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Messages</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                                <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Analytics</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Payments</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <section>
            <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-12 pb-24 md:pb-5">

                <div className="bg-gray-800 pt-3">
                    <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                        <h1 className="font-bold pl-2">Analytics</h1>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">Total Revenue</h2>
                                   <p className="font-bold text-3xl">$3249 <span className="text-green-500"><i className="fas fa-caret-up"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">Total Users</h2>
                                    <p className="font-bold text-3xl">249 <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">New Users</h2>
                                    <p className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-blue-600"><i className="fas fa-server fa-2x fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">Server Uptime</h2>
                                    <p className="font-bold text-3xl">152 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-indigo-600"><i className="fas fa-tasks fa-2x fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">To Do List</h2>
                                    <p className="font-bold text-3xl">7 tasks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-red-600"><i className="fas fa-inbox fa-2x fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">Issues</h2>
                                    <p className="font-bold text-3xl">3 <span className="text-red-500"><i className="fas fa-caret-up"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</main>














    </>
  );
};

