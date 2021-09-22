import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import "./header.css";

const navigation = [
  { name: "Inicial", href: "#", current: true },
  { name: "Modelos", href: "#modelos", current: false },
  { name: "Quem somos", href: "#somos", current: false },
  { name: "Nossos contatos", href: "#contatos", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-content-center h-16">
            <div className="hidden md:block">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
