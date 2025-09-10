import { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce'
import Input from '@/components/ui/input/input'

const Search = () => {
    const [value, setValue] = useState<string>("")
    const debounce = useDebounce(value, 1000)

    useEffect(() => {
        console.log(debounce);
    }, [debounce])

    return (
        <Input Icon="MdSearch" variant='default' aria-label='Search' placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
    );
}

export default Search;
