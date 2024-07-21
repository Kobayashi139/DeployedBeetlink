"use client";
/* eslint-disable @next/next/no-img-element */
import { UserButton } from "@clerk/nextjs"
import type React from "react"
import { useState } from "react"

const NavBar: React.FC = () => {
	const [IsOpen, SetIsOpen] = useState(false)

	const HandleToggle = () => {
		SetIsOpen(!IsOpen)
	}

	return (
		<>
			<nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-10 top-0 left-0">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a
						href="list"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Beatlink
						</span>
					</a>
					<div className="flex items-center md:hidden space-x-2">
						<button
							onClick={HandleToggle}
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-default"
							aria-expanded={IsOpen ? "true" : "false"}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>

						<UserButton afterSignOutUrl="/" />
					</div>
					<div
						className={`w-full md:block md:w-auto ${IsOpen ? "block" : "hidden"}`}
						id="navbar-default"
					>
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li className="flex items-center">
								<a
									href="/list"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									aria-current="page"
								>
									Posts
								</a>
							</li>
							<li className="flex items-center">
								<a
									href="/create"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Create post
								</a>
							</li>
							<li className="flex items-center">
								<a
									href="/play"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Music
								</a>
							</li>
							<li className="flex items-center">
								<a
									href="/mypage"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									My page
								</a>
							</li>
							<li className="hidden md:block">
								<UserButton afterSignOutUrl="/" />
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<style
				jsx
				global
			>{`
			body {
				margin-top: 70px; /* ナビゲーションバーの高さに合わせて調整 */
			}
		`}</style>
		</>
	)
}

export default NavBar
