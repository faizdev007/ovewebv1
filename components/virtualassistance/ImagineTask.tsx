'use client';
import React from "react";

const cards = [
    {
        icon: '',
        title: "Innovate",
        description: "Bring your ideas to life with creative solutions.",
    },
    {
        icon: '',
        title: "Support",
        description: "Get friendly assistance whenever you need it.",
    },
    {
        icon: '',
        title: "Communicate",
        description: "Connect and collaborate seamlessly.",
    },
];

const ImagineTask: React.FC = () => (
    <section className="text-white bg-oveblue/80 py-12 dark:py-12 flex flex-col items-center gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">
                Imagine Your Remote Assistant Doing All These Tasks for You...
            </h2>
            <p>In today's fast-paced business environment, efficiency and cost-effectiveness are paramount. Many businesses, from startups to established enterprises, are turning to virtual assistants (VAs) to streamline operations, reduce overhead, and free up valuable time for core business activities. However, the quality and reliability of VA services can vary significantly.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cards.map((card, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md p-6 border border-black flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                >
                    <div className="mb-4">{card.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-black">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default ImagineTask;