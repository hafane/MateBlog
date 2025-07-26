import { useState } from 'react';
import Input from '@/components/ui/input/input'

const Search = () => {
    const [value, setValue] = useState<string>("")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <Input Icon="MdSearch" aria-label='Search' placeholder="Search" value={value} onChange={handleSearch} />
    );
}

export default Search;
