import NavbarThree from "../components/navbars/NavbarThree";
import { MdOutlinePrivacyTip } from "react-icons/md";

const PrivacyPolicyPage = () => {
  return (
    <div className="relative flex w-full min-h-screen bg-[#EEF8FB] pb-10 md:pb-20 text-justify">
      <NavbarThree />
      <div className="font-manrope w-full flex flex-col justify-start items-start px-4 sm:px-10 md:px-20">
        <h1
          className="text-left flex items-center font-playfair gap-2 text-[#000000] 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-semibold leading-snug 
          mt-6 sm:mt-8 md:mt-12 
          pt-10 sm:pt-15 md:pt-20"
        >
          <MdOutlinePrivacyTip className="mr-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
          Privacy Policy
        </h1>

        <div className="w-full max-w-4xl mt-6 sm:mt-8 md:mt-8 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-gray-600">
              Last Updated: November 8, 2024
            </p>
          </div>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000]">
              Overview
            </h2>
            <p className="text-sm sm:text-base text-[#000000]">
              Reboost is a Chrome extension designed to help users improve their
              health and productivity through hydration tracking and wellness
              reminders. As the developer of Reboost, I, Sean Dustin Verano, am
              committed to protecting your privacy and ensuring transparency in
              all data practices.
            </p>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000]">
              Information Collection and Use
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#000000]">
                Local Storage Only
              </h3>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-[#000000] text-sm sm:text-base">
                <li>
                  All user data is stored locally on your device using Chrome's
                  local storage
                </li>
                <li>
                  This includes:
                  <ul className="list-disc pl-4 sm:pl-5 mt-1 sm:mt-2 space-y-1 text-sm sm:text-base">
                    <li>Custom beverage preferences and volumes</li>
                    <li>
                      Daily drink logs (automatically reset at midnight local
                      time)
                    </li>
                    <li>Timer settings for wellness reminders</li>
                    <li>Notification preferences</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#000000]">
                No Data Collection
              </h3>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-[#000000] text-sm sm:text-base">
                <li>
                  I do not collect, transmit, or store any personal information
                  on external servers
                </li>
                <li>All data remains on your local device</li>
                <li>I do not use cookies or tracking technologies</li>
                <li>I do not have access to any user data</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000]">
              Required Permissions
            </h2>
            <p className="text-sm sm:text-base text-[#000000]">
              This extension requires the following Chrome permissions:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-[#000000] text-sm sm:text-base">
              <li>
                <span className="font-semibold">storage:</span> To save your
                preferences locally
              </li>
              <li>
                <span className="font-semibold">notifications:</span> To send
                reminder notifications when a timer ends
              </li>
              <li>
                <span className="font-semibold">activeTab:</span> To interact
                with the extension popup
              </li>
              <li>
                <span className="font-semibold">alarms:</span> To manage
                reminder timers
              </li>
            </ul>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000]">
              Data Retention
            </h2>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-[#000000] text-sm sm:text-base">
              <li>
                Drink logs are automatically cleared every day at midnight (your
                local time)
              </li>
              <li>
                Other preferences remain stored locally until you:
                <ul className="list-disc pl-4 sm:pl-5 mt-1 sm:mt-2 space-y-1 text-sm sm:text-base">
                  <li>Remove them manually</li>
                  <li>Uninstall the extension</li>
                  <li>Clear your browser data</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000]">
              Updates to This Policy
            </h2>
            <p className="text-sm sm:text-base text-[#000000]">
              I may update this privacy policy from time to time. I will notify
              you of any changes by updating the "Last Updated" date at the top
              of this policy.
            </p>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000]">
              Contact
            </h2>
            <div className="flex flex-row">
              <p className="text-sm sm:text-base text-[#000000]">
                If you have any questions about this Privacy Policy, you can
                navigate to the Contact section on the home site via the navbar
                for access to my email, Google Forms, or social links.
                Alternatively, feel free to email me directly at{" "}
                <a
                  href="mailto:verano.seandustin@gmail.com"
                  className="text-[#1CABE3] font-bold hover:text-[#000000]"
                >
                  verano.seandustin@gmail.com.
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
