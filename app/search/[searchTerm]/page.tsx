import axios from "axios"
import { ReactElement } from "react"

const search = async (searchTerm: string): Promise<any> => {
    return await axios.get(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SEARCH_API_KEY}`).then(res => res?.data.organic_results)
}

const SearchResults = async ({ params: { searchTerm } }:
    { params: { searchTerm: string } }):
    Promise<ReactElement> => {
    const searchResults = await search(searchTerm)
    return (
        <>
            <div>
                <p>
                    You searched for: {searchTerm.split('%20').join(" ")}
                </p>
                <ol>
                    {searchResults.map(({position, title, snippet}: any) => (
                        <li key={position} className="list-decimal">
                            <p className="font-bold">{title}</p>
                            <p>{snippet}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default SearchResults