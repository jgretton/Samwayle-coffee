import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import ArrowRight from "../public/Arrow-right.svg";
import ArrowRightNoTail from "../public/Arrow-right-no-tail.svg";
import ArrowLeftNoTail from "../public/Arrow-left-no-tail.svg";
import Coffee from "../public/Coffee.svg";
import Mug from "../public/Mug.svg";
import Cup from "../public/Cup.svg";
import Map from "../public/Map.png";
import Logo from "../public/Logo.svg";

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="font-Jose">
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="min-w-full p-4">
        <div className="container mx-auto flex flex-row items-center lg:justify-between">
          <div
            class="lg:hidden block space-y-2 cursor-pointer mr-10"
            onClick={() => setActive(!active)}
          >
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
          </div>
          <nav
            className={
              active
                ? "flex flex-col fixed h-screen left-0 right-0 top-14 bg-red-100 justify-between"
                : "hidden"
            }
          >
            <Link href="/">About us</Link>
            <Link href="/">Promotion</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Contacts</Link>
          </nav>
          <div className=" flex flex-row items-center">
            <Image
              src={Logo}
              height={35}
              width={56}
              alt="Logo for Samwayle business"
            />
            <h1 className="font-Cursive text-3xl ml-3">Samwayle</h1>
          </div>

          <nav className="hidden lg:flex flex-row space-x-20 font-Jose items-center">
            <Link href="#About">About us</Link>
            <Link href="#Promotion">Promotion</Link>
            <Link href="#Shop">Shop</Link>
            <Link href="/Contact">Contacts</Link>
            <button className="px-8 py-3 bg-[#2D635E] rounded-md text-white">
              Contact us
            </button>
          </nav>
        </div>
      </header>

      <main className="">
        {/* Hero */}
        <section className="container mx-auto flex flex-row justify-between mb-36 mt-36 px-4">
          <div className="flex flex-col md:space-y-7 items-center md:items-start m-auto md:m-0 justify-center">
            <h2 className="text-xl md:text-2xl font-Cursive">
              Drink coffee, enjoy with Samwayle
            </h2>
            <h1 className="text-[54px] md:text-6xl mt-3 font-Jose">
              Coffee Shop
            </h1>
            <button className="px-5 md:px-20 py-3 bg-[#2D635E] rounded-md text-white flex flex-row mt-7">
              Order here
              <Image
                src={ArrowRight}
                height={10}
                width={30}
                alt="Arrow pointing right"
                className="ml-10 text-white block lg:hidden"
              />
            </button>
          </div>
          <div className="hidden md:flex md:flex-row relative">
            <button className="h-[157px] w-[159px] bg-[#E3EBE7]/40 lg:flex md:hidden justify-center absolute bottom-0 right-full">
              <Image
                src={ArrowRight}
                height={10}
                width={30}
                alt="Arrow pointing right"
              />
            </button>
            <div className="h-[466px] w-[410px] bg-[#E3EBE7] relative">
              <Image
                src={Coffee}
                alt="Image of a coffee grinder"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className=""></div>
          </div>
        </section>

        {/* About us */}
        <section
          className="container mx-auto flex flex-col lg:flex-row scroll-my-8 px-4"
          id="About"
        >
          <div className="h-[287px] bg-[#FAE9E0] w-full lg:min-w-[380px] lg:max-w-[400px] text-black relative mr-24">
            <p className="hidden absolute lg:block font-Cursive text-2xl text-black/75 -rotate-90 origin-top-left left-0 top-20">
              About us
            </p>
            <Image
              src={Mug}
              alt="Image of a coffee mug"
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-6  lg:-bottom-14 "
            />
          </div>

          <div className="flex flex-col px-8">
            <h3 className="text-black text-4xl  mt-8 lg:mt-0">
              Coffee shop Samwayle
            </h3>
            <p className="mt-8 text-lg leading-9 text-[#444A4A]">
              Only one moment - when the barista reaches out over the bar to
              transfer the cup to the outstretched hand of the buyer. But this
              is exactly the moment when a connection arises between us and our
              guests.
            </p>
            <br />
            <p className="mt-8 text-lg leading-9 text-[#444A4A]">
              And we strive to do our best to maintain this connection -
              starting with our commitment to selecting the highest quality
              coffee in the world and ending with how we interact with guests
              and organizations to fulfill our obligations.
            </p>
          </div>
        </section>
        {/* Promotion */}
        <section
          className="container mx-auto mt-24 lg:mt-28 scroll-my-8 px-4"
          id="Promotion"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="h-[287px] lg:min-w-[410px] bg-[#E3EBE7] w-full text-black relative lg:order-2">
              <p className="hidden lg:block absolute font-Cursive right-0 text-2xl text-black/75 -rotate-90 origin-bottom-right -top-14">
                Promotion
              </p>
              <Image
                src={Cup}
                alt="Image of a coffee mug"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="">
              <h3 className="text-black text-4xl mt-8">Coffee of the day</h3>
              <p className="mt-8 text-lg leading-9 text-[#444A4A]">
                Americano coffee (Italian: Caffè Americano) is an espresso
                diluted with hot water. The presence of foam (cream) depends on
                how coffee and water are mixed. Attention! The concepts of
                “American” and “American coffee” should not be confused. n the
                second case, this refers not to diluted espresso, but to a drink
                prepared through a filter system.
              </p>
              <button className="px-5 md:px-20 py-3 bg-[#2D635E] rounded-md text-white flex flex-row mt-7">
                Order now
              </button>
            </div>
          </div>
        </section>

        {/* Shop */}
        <section
          className="mt-24 lg:mt-16  md:bg-[#2D635E]/5 lg:flex-row w-full lg:py-12 md:py-0 scroll-my-8"
          id="Shop"
        >
          <div className="container mx-auto flex flex-row space-x-5 items-center justify-center md:justify-between ">
            <button className="md:block hidden">
              <Image src={ArrowLeftNoTail} alt="Button to move slider left" />
            </button>
            <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row justify-between items-center">
              <div className="flex flex-col justify-between text-center max-w-xs min-h-[458px] p-10 shop-shadow rounded-3xl bg-white min-w-min">
                <p className="mt-8 text-3xl">Espresso</p>
                <p className="mt-8 text-lg leading-9 text-[#444A4A]">
                  Espresso - black coffee made in a coffee machine or a special
                  coffee machine, where hot water is passed through pressed
                  ground beans at a pressure.
                </p>
                <button className="px-8 py-3 bg-[#2D635E] rounded-md text-white mt-8">
                  Order now
                </button>
              </div>

              <div className="flex flex-col justify-between text-center max-w-xs min-h-[458px] p-10 shop-shadow rounded-3xl bg-white min-w-min">
                <p className="mt-8 text-3xl">Latte</p>
                <p className="mt-8 text-lg leading-9 text-[#444A4A]">
                  The name Latte (from Italian “milk”) speaks about the main
                  ingredient of the drink. It is recommended to take fat milk -
                  at least 3.2%. In addition to it, milk foam.
                </p>
                <button className="px-8 py-3 bg-[#2D635E] rounded-md text-white mt-8">
                  Order now
                </button>
              </div>

              <div className="flex flex-col justify-between text-center max-w-xs min-h-[458px] p-10 shop-shadow rounded-3xl bg-white min-w-min lg:visible md:collapse sm:visible">
                <p className="mt-8 text-3xl">Americano</p>
                <p className="mt-8 text-lg leading-9 text-[#444A4A]">
                  The name Latte (from Italian “milk”) speaks about the main
                  ingredient of the drink. It is recommended to take fat milk -
                  at least 3.2%. In addition to it, milk foam.
                </p>
                <button className="px-8 py-3 bg-[#2D635E] rounded-md text-white mt-8">
                  Order now
                </button>
              </div>
            </div>
            <button className="md:block hidden">
              <Image src={ArrowRightNoTail} alt="Button to move slider right" />
            </button>
          </div>
        </section>

        {/* Contact */}
        <section
          className="container mx-auto p-5 mt-24 flex flex-col md:flex-row scroll-my-8"
          id="Contact"
        >
          <div className="h-80 w-full relative md:w-1/2">
            <p className="hidden lg:block absolute font-Cursive right-0 text-2xl text-black/75 -rotate-90 origin-bottom-right -top-14 z-50">
              Contact
            </p>
            <Image
              src={Map}
              alt="Map of location of coffee shop"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="mt-8 leading-[45px] flex flex-row justify-center md:justify-start md:items-start md:w-1/2 ml-8">
            <div className="mr-8 md:block hidden mt-4 ">
              <div className="w-[102px] h-[2px] bg-black"></div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-3xl">Our address</h3>
              <p className="text-lg leading-[45px] mt-2 font-Alegreya">
                110 St-Cathedral Pkwy Station
              </p>
              <p className="text-lg leading-[45px] mt-2 font-Alegreya">
                4310 94th St, Flushing
              </p>
              <p className="text-lg leading-[45px] mt-2 font-Alegreya">
                94-54 Corona Ave., Elmhurst
              </p>
              <p className="text-lg leading-[45px] mt-2 font-Alegreya">
                5627 Van Doren St, Queens
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-12">
        <p className="text-[#444A4A] text-sm">2020(c) - Samwyle banditos</p>
      </footer>
    </div>
  );
}
