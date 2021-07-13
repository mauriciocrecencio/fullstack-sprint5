import {useState} from "react";
import useLoading from "../hooks/useLoading";
import FilterContext from "./FilterContext";
import LoadingContext from "./LoadingContext";
import CategoriesContext from "./CategoriesContext";
import MessageContext from "./MessageContext";

const Contexts = ({children}) => {
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState('')
    const [categories, setCategories] = useState({})
    const [addRequest, removeRequest, isLoading] = useLoading()

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            <LoadingContext.Provider value={{addRequest, removeRequest, isLoading}}>
                <MessageContext.Provider value={{message, setMessage}}>
                    <CategoriesContext.Provider value={{categories, setCategories}}>
                        {children}
                    </CategoriesContext.Provider>
                </MessageContext.Provider>
            </LoadingContext.Provider>
        </FilterContext.Provider>
    )
}
export default Contexts