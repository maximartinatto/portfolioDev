import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { motion } from "framer-motion";

const logos = [
    {
        image: images.html,
        title: "HTML5"
    },
    {
        image: images.css,
        title: "CSS3"
    },
    {
        image: images.javascript,
        title: "JavaScript"
    },
    {
        image: images.reactjs,
        title: "REACTJS"
    },
    {
        image: images.nodejs,
        title: "NODEJS"
    },
    {
        image: images.express,
        title: "EXPRESS"
    },
    {
        image: images.mysql,
        title: "MYSQL"
    },
    {
        image: images.postgresql,
        title: "POSTGRESQL"
    },
    {
        image: images.postman,
        title: "POSTMAN"
    },
    {
        image: images.angular,
        title: "ANGULAR"
    },
    {
        image: images.nest,
        title: "NESTJS"
    },
    {
        image: images.tailwindcss,
        title: "TAILWINDCSS"
    }
]

const certifications = [
    {
        title: "Tecnico Superior en Desarrollo de Software - IES Nº7 - VENADO TUERTO"
    },
    {
        title: "Desarrollador FullStack - Soy Henry"
    },
    {
        title: "Tecnico Programador en Sistemas Administrativos - IES Nº7 - VENADO TUERTO"
    }
];

const TabSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <Tabs defaultIndex={0}>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "linear", duration: 0.5 }}
                >
                    <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
                        <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                            Conóceme más
                        </Tab>
                        <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
                            Habilidades técnicas
                        </Tab>
                    </TabList>
                </motion.div>
                <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "linear", duration: 0.5 }}
                        className="w-full text-primary md:w-1/2 dark:text-white"
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            FullStack Developer
                        </h2>
                        <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
                            Me considero una persona activa, dispuesta al aprendizaje constante, al trabajo en equipo, a generar confianza.
                        </p>
                        <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
                            Actualmente cuento con conocimientos en: HTML, CSS, JAVASCRIPT, REACT y REDUX en lo que se refiere al front, y en lo que se refiere al back tengo conocimientos en: NODE JS, EXPRESS, POSTGRESQL, SEQUELIZE. También me estoy capacitando en nuevas tecnologías como ANGULAR, REACT-NATIVE Y REDUX-TOOLKIT. Me interesaría, al ir pasando el tiempo, capacitarme en tecnologías como NEST JS, NEXT JS y JAVA.
                        </p>
                        <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
                            Apuesto mucho a afrontar nuevos desafíos dentro del ámbito laboral y a poder desempeñarme profesionalmente en empresas de otras provincias de Argentina, en otros países de América y del exterior.
                        </p>
                        <br />
                        <h3 className="font-semibold text-xl mb-2">Estudios 📝:</h3>
                        <ul className="list-inside list-disc text-neutral-700 dark:text-neutral-300">
                            {certifications.map((certification, index) => (
                                <li key={index}>
                                    <h2>{certification.title}</h2>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "linear", duration: 0.5 }}
                        className="w-full relative md:w-1/2 md:h-[450px]"
                    >
                        {!isLoaded && (
                            <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
                        )}
                        <img
                            src={images.maxiPerfil}
                            className="h-full w-full z-10 object-cover object-top rounded-lg filter shadow-lg"
                            alt="Image Maxi"
                            loading="lazy"
                            width={664}
                            height={450}
                            onLoad={() => setIsLoaded(true)}
                        />
                    </motion.div>
                </TabPanel>
                <TabPanel className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "linear", duration: 0.5 }}
                        className="mt-6 overflow-auto grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
                    >
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                            >
                                <img
                                    className="h-14 object-contain dark:filter dark:invert"
                                    src={logo.image}
                                    alt={logo.title}
                                    loading="eager"
                                    width={56}
                                    height={56}
                                />
                                <h6 className="text-xl font-semibold text-primary dark:text-white">
                                    {logo.title}
                                </h6>
                            </div>
                        ))}
                    </motion.div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default TabSection;
