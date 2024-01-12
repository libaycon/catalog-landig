import SearchIcon from "../../app/ui/icons/search"

interface SearchBarProps {
    setInput: (value: string)=>void
    input: string
    placeholder?: string
}

const SearchBar = ({input, setInput, placeholder="Buscar"}:SearchBarProps): JSX.Element => {
    return (
        <div className="relative w-full h-10">
            <input 
                type="search" 
                placeholder={placeholder} 
                spellCheck="false"
                autoComplete="off"
                className="w-full h-full bg-transparent border-1 border-solid border-default-200 rounded-full pl-12 pr-4"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <div className="absolute left-0 top-0 bottom-0 w-12 flex justify-center items-center">
                <SearchIcon className="w-6 h-6 text-default-200" />
            </div>
        </div>
    )
}

export default SearchBar