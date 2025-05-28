"use client";
import { ChevronDown, Phone, Mail, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Logo from "@/public/Germancard.png";
import React, { useState } from "react";
import cardpressoLogo from "@/public/CARDPRESSO.png";
import dascomLogo from "@/public/DASCOM.png";
import maticaLogo from "@/public/MATICA.png";
import evolisLogo from "@/public/EVOLIS.png";
import zebraLogo from "@/public/ZEBRA.png";
import LinkedIn from "@/public/LinkedIn.png";
import Facebook from "@/public/Facebook.png";
import Instagram from "@/public/Instagram.png";
import TikTok from "@/public/TikTok.png";
import Xing from "@/public/Xing.png";
import cer_1 from "@/public/cer-1.png";
import cer_2 from "@/public/cer-2.png";
import cer_3 from "@/public/cer-3.png";
import cer_4 from "@/public/cer-4.png";
import cer_5 from "@/public/cer-5.png";
import cer_6 from "@/public/cer-6.png";
import cer_7 from "@/public/cer-7.png";

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-[#dadfe7]">
        {/* Top bar */}
        <div className="bg-[#f4f5f7] px-4 py-2">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-sm text-[#6d727b]">
            {/* Left side */}
            <div className="flex flex-row md:flex-row md:justify-start space-x-2 md:space-x-4">
              <a
                href="#"
                className="inline-flex items-center whitespace-nowrap hover:text-[#343434] mb-2 md:mb-0"
              >
                Company <ChevronDown className="w-4 h-4 ml-1" />
              </a>

              <a href="#" className="hover:text-[#343434] mb-2 md:mb-0">
                Downloads
              </a>
              <a href="#" className="hover:text-[#343434] mb-2 md:mb-0">
                Contact us
              </a>
            </div>

            {/* Right side */}
            <div className="flex flex-col md:flex-row md:justify-end md:items-center space-y-2 md:space-y-0 md:space-x-4 text-center md:text-right">
              <span>Monday - Friday 8:30 AM - 5:30 PM</span>
              <span className="flex items-center justify-center md:justify-end space-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.66667 3.91667H10.3333M5.66667 6.83333H10.3333M2.75 5.66667V1.58333C2.75 1.26117 3.01117 1 3.33333 1H12.6667C12.9888 1 13.25 1.26117 13.25 1.58333V5.66667M1 13.8333V6.83333L8 11.5L15 6.83333V13.8333C15 14.4777 14.4777 15 13.8333 15H2.16667C1.52234 15 1 14.4777 1 13.8333Z"
                    stroke="black"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>office@germancard.de</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="px-10 py-10">
          {/* Top Bar */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={Logo}
                alt="GermanCard Logo"
                width={260}
                height={40}
                className="mr-2"
              />
            </div>

            {/* Call Button */}
            <div className="flex justify-start md:justify-end">
              <Button className="bg-[#FFEFB1] hover:bg-[#fde62f] text-black font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Call now +49 (0) 2273 60749 0
              </Button>
            </div>
          </div>

          {/* Dropdown Section */}
          <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
            {/* Combined Dropdowns container for small screens */}
            <div
              className={`flex flex-col gap-y-4 p-2
      ${menuOpen ? "block" : "hidden"} md:hidden`}
            >
              {/* All dropdowns stacked vertically on small screens */}

              {/* Left side dropdowns */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Plastic cards <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Standard cards</DropdownMenuItem>
                  <DropdownMenuItem>Premium cards</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Organic cards <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Eco-friendly options</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  RFID/Chip cards <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>RFID cards</DropdownMenuItem>
                  <DropdownMenuItem>Chip cards</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Right side dropdowns */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Special formats <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Custom shapes</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Personalization <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Custom printing</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Printer & Accessories <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Card printers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Service <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Left Side dropdowns for md and up */}
            <div className="hidden md:flex flex-wrap gap-x-6 gap-y-4 p-1.5">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Plastic cards <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Standard cards</DropdownMenuItem>
                  <DropdownMenuItem>Premium cards</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Organic cards <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Eco-friendly options</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  RFID/Chip cards <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>RFID cards</DropdownMenuItem>
                  <DropdownMenuItem>Chip cards</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Right Side dropdowns for md and up */}
            <div className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-4 justify-end relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Special formats <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Custom shapes</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Personalization <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Custom printing</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Printer & Accessories <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Card printers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#343434] hover:text-black font-semibold whitespace-nowrap">
                  Service <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Divider (only on md and up) */}
              <div className="hidden md:block h-6 border-l border-gray-400 self-center"></div>
              {/* Hamburger toggle - always visible */}
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="cursor-pointer p-2"
                  aria-label="Toggle menu"
                  type="button"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-auto text-black"
                  >
                    <path
                      d="M1 10.4H15M1 5.7H15M1 1H15"
                      stroke="black"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="md:hidden fixed top-70 right-4 z-50">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer p-2 bg-white rounded shadow"
                aria-label="Toggle menu"
                type="button"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-auto text-black"
                >
                  <path
                    d="M1 10.4H15M1 5.7H15M1 1H15"
                    stroke="black"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full max-w-8xl bg-[#e3edf9] rounded-xl px-4 sm:px-6 md:px-10 lg:px-16 py-16">
          <h1 className="text-5xl font-bold text-[#000000] mb-10">
            Privacy Policy
          </h1>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5 text-left">
              <p className="text-[#343434] text-lg leading-relaxed">
                Details the methods we use to collect, handle, and safeguard
                your personal information, ensuring your privacy and data
                security while using our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-[44px] font-normal text-[#343434] mb-4">
            1. Data protection at a glance
          </h2>

          <div className="mb-8 pl-4">
            <h3 className="text-[32px] font-normal text-[#343434] mb-4">
              General information
            </h3>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4">
              The following notes provide a simple overview of what happens to
              your personal data when you visit this website. Personal data is
              all data with which you can be personally identified. Detailed
              information on the subject of data protection can be found in our
              privacy policy listed under this text.
            </p>
          </div>

          <div className="mb-8 pl-4">
            <h3 className="text-[32px] font-normal text-[#343434] mb-4">
              Data collection on this website
            </h3>

            <h4 className="font-normal text-[#343434] text-[24px] mb-2 pl-4">
              Who is responsible for the data collection on this website?
            </h4>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              The data processing on this website is carried out by the website
              operator. His contact details can be found in the section "Note on
              the responsible body" in this privacy policy.
            </p>

            <h4 className="font-normal text-[#343434] text-[24px] mb-2 pl-4">
              How do we gather your data?
            </h4>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              On the one hand, your data is collected by the fact that you
              provide it to us. Here it can be e.g. B. data that you enter in a
              contact form. Other data is collected automatically or after your
              consent when you visit the website by our IT systems. These are
              mainly technical data (e.g. Internet browser, operating system or
              time of page view). This data is collected automatically as soon
              as you enter this website.
            </p>

            <h4 className="font-normal text-[#343434] text-[24px] mb-2 pl-4">
              For what purposes do we use your data?
            </h4>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              Part of the data is collected to ensure the error-free provision
              of the website. Other data can be used to analyze your user
              behavior.
            </p>

            <h4 className="font-normal text-[#343434] text-[24px] mb-2 pl-4">
              What rights do you have with regard to your data?
            </h4>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              You have the right at any time to receive information free of
              charge about the origin, recipient and purpose of your stored
              personal data. You also have the right to request the correction
              or deletion of this data. If you have given your consent to data
              processing, you can revoke this consent at any time for the
              future. You also have the right to request the restriction of the
              processing of your personal data under certain circumstances.
              Furthermore, you have a right of appeal to the competent
              supervisory authority.
            </p>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              For this and for further questions about data protection, you can
              contact us at any time.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-[44px] font-normal text-[#343434] mb-4">2. Hosting</h2>
          <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
            We host the contents of our website with the following provider:
          </p>

          <div className="mb-8 pl-4">
            <h3 className="font-normal text-[#343434] text-[24px] mb-2 pl-4">
              External hosting
            </h3>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              This website is hosted externally. The personal data collected on
              this website is stored on the servers of the hoster / hoster.
              These can include IP addresses, contact requests, meta and
              communication data, contract data, contact data, names, website
              access and other data generated via a website.
            </p>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              The external hosting is carried out for the purpose of fulfilling
              the contract with our potential and existing customers (Art. 6
              para. 1 lit. b DSGVO) and in the interest of a secure, fast and
              efficient provision of our online offer by a professional provider
              (Art. 6 para. 1 lit. f DSGVO). If a corresponding consent has been
              requested, the processing is carried out exclusively on the basis
              of Art. 6 para. 1 lit. a DSGVO and § 25 para. 1 TTDSG, insofar as
              the consent includes the storage of cookies or access to
              information in the user's terminal device (e.g. device
              fingerprinting) within the meaning of the TTDSG. The consent can
              be revoked at any time.
            </p>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              Our hoster will only process your data to the extent necessary to
              fulfill its performance obligations and follow our instructions
              regarding this data.
            </p>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              We use the following hoster(s):
            </p>
            <div className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              <p>Veit Frankfurt</p>
              <p>318 Elmhurst Street - Suite 800</p>
              <p>West Palm Beach, FL 33401</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#343434] mb-6">
            3. General information and mandatory information
          </h2>
          <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
            We host the contents of our website with the following provider:
          </p>

          <div className="mb-8 pl-4">
            <h3 className="font-normal text-[#343434] text-[24px] mb-2 pl-4">
              Data privacy
            </h3>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              The operators of these pages take the protection of your personal
              data very seriously. We treat your personal data confidentially
              and in accordance with the statutory data protection regulations
              and this data protection declaration.
            </p>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              When you use this website, various personal data are collected.
              Personal data is data with which you can be personally identified.
              This privacy policy explains what data we collect and what we use
              it for. She also explains how and for what purpose this is done.
            </p>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              We would like to point out that the data transmission on the
              Internet (e.g. when communicating by e-mail) may have security
              gaps. A complete protection of the data against access by third
              parties is not possible.
            </p>
          </div>

          <div className="mb-8 pl-4">
            <h3 className="font-normal text-[#343434] text-[24px] mb-2 pl-4">
              Note on the responsible authority
            </h3>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              The authority responsible for data processing on this website is:
              GERMANCARD Technologies GmbH
            </p>
            <div className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              <p>Managing Director & Managing Director Henryk Timme</p>
              <p>Ohmstr. 5</p>
              <p>50170 Kerpen</p>
              <p>Germany</p>
              <p>Phone: 022736074490</p>
              <p>E-Mail: office@germancard.de</p>
            </div>
            <p className="text-[#6d727b] text-[16px] font-medium leading-[140%] mb-4 pl-4">
              The responsible body is the natural or legal person who alone or
              jointly with others is responsible for the purposes and means of
              processing personal data (e.g. B. Names, e-mail addresses o. Ä.)
              decides.
            </p>
          </div>
        </section>
        {/* Partners Section */}
      </main>
      <section className="mb-12">
        <div className="px-4 lg:px-[4rem]">
          <hr className="border-t border-gray-300 mb-8" />
        </div>

        <div className="text-center mb-8">
          <h6 className="text-[12px] font-semibold text-[#343434] mb-6 font-bold">
            WE ARE OFFICIAL PARTNERS FOR
          </h6>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center items-center pt-4 px-6 lg:px-[10rem]">
            <Image
              src={cardpressoLogo}
              alt="Cardpresso Logo"
              height={15}
              className="opacity-40 grayscale"
            />
            <Image
              src={dascomLogo}
              alt="Dascom Logo"
              height={15}
              className="opacity-40 grayscale"
            />
            <Image
              src={maticaLogo}
              alt="Matica Logo"
              height={25}
              className="opacity-40 grayscale"
            />
            <Image
              src={evolisLogo}
              alt="Evolis Logo"
              height={20}
              className="opacity-40 grayscale"
            />
            <Image
              src={zebraLogo}
              alt="Zebra Logo"
              height={30}
              className="opacity-40 grayscale"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-sm text-[#6d727b]">
        <div className="max-w-8xl mx-auto px-4 lg:px-[7rem] py-12 space-y-12 container bg-[#f4f5f7] border-[#dadfe7]">
          {/* Top Logo + Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <Image src={Logo} alt="Logo" height={40} width={260} />

            {/* Social Icons with Text (icon in circle, full link clickable) */}
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: LinkedIn, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: TikTok, label: "TikTok" },
                { icon: Xing, label: "Xing" },
              ].map(({ icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-2 text-black text-sm cursor-pointer no-underline hover:no-underline"
                >
                  <div className="bg-white p-2 rounded-full shadow">
                    <Image src={icon} alt={label} height={10} width={10} />
                  </div>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Grid with more horizontal gap */}
          <div className="grid md:grid-cols-5 gap-x-16 gap-y-10">
            {/* About Us - 2 out of 5 columns (40%) */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-semibold text-[#343434]">ABOUT US</h4>
              <p>
                We,{" "}
                <strong className="text-black">
                  GERMANCARD Technologies GmbH
                </strong>
                , are a special printing company based in Kerpen near Cologne
                and have specialized in the production of plastic cards, RFID
                cards and customer cards in the form of a check card up to
                special formats.
              </p>
            </div>

            {/* Products & Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#343434]">
                PRODUCTS & SERVICES
              </h4>
              <div className="space-y-2">
                <p>Plastic cards</p>
                <p>Organic cards</p>
                <p>RFID/Chip cards</p>
                <p>Special formats</p>
              </div>
            </div>

            {/* Placeholder */}
            <div className="space-y-4 mt-6">
              <h4 className="font-semibold text-[#343434]"></h4>
              <div className="space-y-2">
                <p>Personalization</p>
                <p>Printers & Accessories</p>
                <p>Services</p>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#343434]">COMPANY</h4>
              <p>About us</p>
              <p>Jobs & Career</p>
              <p>Downloads</p>
            </div>
          </div>

          {/* Certificates + Contact */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Certificates */}
            <div>
              <h4 className="font-semibold text-[12px] font-bold text-[#343434] mb-3">
                OUR CERTIFICATES
              </h4>
              <div className="flex items-center gap-6 opacity-70 flex-wrap">
                <Image src={cer_1} alt="Germany" height={20} />
                <Image src={cer_2} alt="Planned" height={15} />
                <Image src={cer_3} alt="ClimatePartner" height={18} />
                <Image src={cer_4} alt="ISO" height={25} />
                <Image src={cer_5} alt="DSSV" height={12} />
                <Image src={cer_6} alt="TÜV Rheinland" height={20} />
                <Image src={cer_7} alt="Gantner" height={12} />
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <Button className="w-auto bg-black hover:bg-[#343434] text-white text-sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact us
              </Button>
              <Button className="w-auto bg-[#facc15] hover:bg-[#fde62f] text-black text-sm">
                <Phone className="w-4 h-4 mr-2" />
                Call now +49 (0) 2273 60149 0
              </Button>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
<div className="border-[#dadfe7] flex flex-col md:flex-row justify-between items-center px-4 xl:px-40 py-4 gap-4 text-sm container mx-auto">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <span>Copyright © 2024 by GERMANCARD Technologies GmbH</span>
            <div className="h-6 w-px bg-[#dadfe7]"></div>
            <a href="#" className="hover:text-[#343434]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#343434]">
              Cookies
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span>
              Designed by{" "}
              <span className="text-black font-medium">Startify</span>
            </span>

            {/* SVG Icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.80583 0.564416C6.53217 -0.188141 5.46785 -0.188136 5.19419 0.564417L3.95958 3.95958L0.564416 5.19419C-0.188141 5.46785 -0.188136 6.53218 0.564417 6.80583L3.95958 8.04043L5.19419 11.4356C5.46785 12.1881 6.53218 12.1881 6.80583 11.4356L8.04043 8.04043L11.4356 6.80583C12.1881 6.53217 12.1881 5.46785 11.4356 5.19419L8.04043 3.95958L6.80583 0.564416Z"
                fill="#343434"
              />
            </svg>

            <span className="text-black font-medium">Mateusz Madura</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
