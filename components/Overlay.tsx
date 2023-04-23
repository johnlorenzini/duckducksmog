import { AnimatePresence, motion } from "framer-motion";
import React, { SetStateAction, useEffect, useState } from "react";
import { getCurrentDate } from "@/lib/utils/helpers";
import { BsChevronDoubleDown } from "react-icons/bs";
import Newspaper, { newsType } from "./Newspaper";

type Props = {
  overlayStage: string;
  setOverlayStage: React.Dispatch<SetStateAction<string>>;
  newsContent: newsType;
  numClicked: number;
};

const Overlay = ({
  overlayStage,
  setOverlayStage,
  newsContent,
  numClicked,
}: Props) => {
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    if (overlayStage == "intro") {
      setDateString(new Date().toDateString());
    }
  }, [overlayStage]);

  return (
    <>
      <AnimatePresence>
        {overlayStage == "intro" && (
          <motion.div
            className="w-screen h-screen fixed left-0 top-0 flex flex-col justify-start items-center bg-slate-700 bg-opacity-20 overflow-y-scroll py-32 gray-scrollbar"
            initial={false}
            animate={{ y: "0vh" }}
            exit={{ y: "-100vh" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            {/* newspaper div */}
            <motion.div
              initial={{ scale: 0, rotate: 0, y: -300 }}
              animate={{ scale: 1, rotate: 360 * 4, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.46, 0.02, 0.87, 1.11],
                delay: 1.5,
              }}
              className="w-[60rem] bg-slate-100 rounded-xl grid grid-cols-5 auto-rows-min p-10 text-slate-600 font-newsreader relative"
            >
              {/* scroll icon */}
              <motion.div
                className="absolute w-full flex flex-col items-center text-white -top-16"
                initial={{ display: "none" }}
                animate={{ display: "flex" }}
                transition={{ delay: 3 }}
              >
                <BsChevronDoubleDown className="animate-bounce" />
                <span className="font-primary tracking-wider">Scroll Down</span>
              </motion.div>
              {/* newspaper info: 5 col */}
              <div className="col-span-5 flex border-b-4 border-slate-600 justify-between font-semibold text-lg">
                <div className="text-slate-400">
                  California&apos;s sustainability report
                </div>
                <div className="text-slate-600">{dateString} Issue</div>
              </div>
              {/* newspaper title: 5 col */}
              <div className="flex flex-col col-span-5 items-center pt-10 pb-5 border-b-4 border-slate-600">
                <h2 className="uppercase font-semibold text-8xl">
                  L.A. Quacks
                </h2>
                <p className="uppercase text-slate-400 text-3xl font-medium">
                  The Unofficial LA Hacks Newspaper
                </p>
              </div>
              {/* newspaper headline: 5 col */}
              <div className="pt-10 col-span-5 pb-5">
                <h3 className="text-5xl font-medium">
                  Election Results Are Out!
                </h3>
              </div>
              {/* newspaper body: 3 + 2 col */}
              <div className="text-2xl col-span-3 flex flex-col gap-5">
                <p>
                  As the newly elected Chief Sustainability Officer of Los
                  Angeles, you must tackle 3 sustainability projects during your
                  term, balancing effectiveness with cost.
                </p>
                <p className="font-semibold">Your goal:</p>
                <p>
                  Implement the best sustainability policies during your term
                  and get re-elected!
                </p>
              </div>
              <div className="h-full col-span-2 bg-slate-300 ml-5 rounded-lg overflow-hidden">
                <img src="/ducktective.png" alt="" />
              </div>
            </motion.div>
            {/* button to begin */}
            <div className="flex justify-center py-5 col-span-5">
              <button
                className="bg-slate-100 rounded-xl px-10 py-3 text-slate-600 border-4 border-slate-600 text-xl font-medium font-primary"
                onClick={() => {
                  setOverlayStage("");
                }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!overlayStage && (
          // Navbar
          <motion.div
            className="fixed top-3 left-3 pointer-events-none bg-slate-100 px-4 py-1 rounded-lg bg-opacity-60"
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <h1 className="font-primary text-3xl text-slate-600">
              DuckDuckSmog
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {overlayStage == "news" && (
          <Newspaper
            setOverlayStage={setOverlayStage}
            headline={newsContent?.headline}
            bodySections={newsContent?.body.map(
              (paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              )
            )}
            numClicked={numClicked}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {overlayStage == "finish" && (
          <motion.div
            className="w-screen h-screen fixed left-0 top-0 flex flex-col justify-start items-center bg-slate-700 bg-opacity-20 overflow-y-scroll py-32 gray-scrollbar"
            initial={false}
            animate={{ y: "0vh" }}
            exit={{ y: "-100vh" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            {/* newspaper div */}
            <motion.div
              initial={{ scale: 0, rotate: 0, y: -300 }}
              animate={{ scale: 1, rotate: 360 * 4, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.46, 0.02, 0.87, 1.11],
                delay: 1.5,
              }}
              className="w-[60rem] bg-slate-100 rounded-xl grid grid-cols-5 auto-rows-min p-10 text-slate-600 font-newsreader relative"
            >
              {/* scroll icon */}
              <motion.div
                className="absolute w-full flex flex-col items-center text-white -top-16"
                initial={{ display: "none" }}
                animate={{ display: "flex" }}
                transition={{ delay: 3 }}
              >
                <BsChevronDoubleDown className="animate-bounce" />
                <span className="font-primary tracking-wider">Scroll Down</span>
              </motion.div>
              {/* newspaper info: 5 col */}
              <div className="col-span-5 flex border-b-4 border-slate-600 justify-between font-semibold text-lg">
                <div className="text-slate-400">
                  California&apos;s sustainability report
                </div>
                <div className="text-slate-600">{dateString} Issue</div>
              </div>
              {/* newspaper title: 5 col */}
              <div className="flex flex-col col-span-5 items-center pt-10 pb-5 border-b-4 border-slate-600">
                <h2 className="uppercase font-semibold text-8xl">
                  L.A. Quacks
                </h2>
                <p className="uppercase text-slate-400 text-3xl font-medium">
                  The Unofficial LA Hacks Newspaper
                </p>
              </div>
              {/* newspaper headline: 5 col */}
              <div className="pt-10 col-span-5 pb-5">
                <h3 className="text-5xl font-medium">
                  Election Results Are Out!
                </h3>
              </div>
              {/* newspaper body: 3 + 2 col */}
              <div className="text-2xl col-span-3 flex flex-col gap-5">
                <p>
                  As the newly elected Chief Sustainability Officer of Los
                  Angeles, you must tackle 3 sustainability projects during your
                  term, balancing effectiveness with cost.
                </p>
                <p className="font-semibold">Your goal:</p>
                <p>
                  Implement the best sustainability policies during your term
                  and get re-elected!
                </p>
              </div>
              <div className="h-full col-span-2 bg-slate-300 ml-5 rounded-lg overflow-hidden">
                <img src="/ducktective.png" alt="" />
              </div>
            </motion.div>
            {/* button to begin */}
            <div className="flex justify-center py-5 col-span-5">
              <button
                className="bg-slate-100 rounded-xl px-10 py-3 text-slate-600 border-4 border-slate-600 text-xl font-medium font-primary"
                onClick={() => {
                  setOverlayStage("");
                }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Overlay;
