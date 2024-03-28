import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
        >
            <motion.div
                variants={{
                    offscreen: {
                        y: 150
                    },
                    onscreen: {
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1
                        },
                    },
                }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
            >
                <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
                    <h5 className="hover:underline">
                        WSKF ARGENTINA
                    </h5>
                    <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        SEPTIEMBRE, 2021 - ACTUALIDAD
                    </span>
                    <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        JUNIOR FRONT-END FREELANCE
                    </span>
                </h6>
                <div className="relative mb-4">
                    <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                    >
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
                            Deberes y responsabilidades
                        </span>
                    </div>
                </div>
                <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
                    <li>
                        Desarrollo de una SPA donde se muestra informacion sobre la escuela de karate, asi como tambien, informacion sobre el estilo de karate que se enseña, eventos con galerias de imagenes y dojos afiliados.
                    </li>
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default TwoColumnCard;