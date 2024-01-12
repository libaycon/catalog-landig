'use client';
import { useState, useEffect } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import SearchBar from "@/components/searchBar/sigleSearch";
import categories from "./categories";
import Category from "@/types/categories";
import { XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import styles from './custom.module.css';


const PageSidebar = (): JSX.Element => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 780px)");

        const handleMediaQuery = (e: MediaQueryListEvent) => setIsOpen(e.matches);
        setIsOpen(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleMediaQuery);
        return () => mediaQuery.removeEventListener('change', handleMediaQuery);
    }, []);

    return <>
        <div className={`relative web-md:max-w-[340px] w-full ${styles.mediaQuery} ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}>
            <div className={`sticky top-2 flex flex-col gap-4 w-full h-max border-1 border-solid border-default-200 py-6 rounded-xl ${styles.sidebar}`}
            >
                <div className="flex flex-col gap-8 border-b-1 border-solid border-default-100 pb-4 px-8">
                    <SearchBar
                        input={searchValue}
                        setInput={setSearchValue}
                        placeholder="Buscar Equipos"
                    />
                    <span className="text-2xl font-bold">Categorías</span>
                </div>
                <div className={`flex flex-col gap-7 px-8 ${styles.sidebar__body}`}>
                    {categories.map((category: Category, index) => (
                        <CheckboxGroup key={`${category.title}-${index}`}
                            label={category.title}
                            color="secondary"
                            size="md"
                            className="gap-4"
                            classNames={{ wrapper: "gap-3", label: "text-lg text-white font-bold" }}
                        >
                            {category.list.map((item, index) => (
                                <Checkbox key={`${item.value}-${index}`} value={item.value} >
                                    {item.label}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    ))}
                </div>
                <button className={`absolute top-1 right-1 bg-primary text-primary-foreground rounded-full p-1 web-sm:hidden`}
                    onClick={() => setIsOpen(false)}
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
        <button className={`fixed rounded-r-full bg-primary h-max py-2 ${isOpen ? 'left-[-100%]' : 'left-0'} transition-all ease-in-out duration-300 z-20`}
            onClick={() => setIsOpen(true)}
        >
            <ChevronRightIcon className="w-8 h-8 text-primary-foreground" />
        </button>
    </>
};

export default PageSidebar;