import React from "react"
import './SearchPage.css'
import { useStateValue } from "./StateProvider"
import useGoogleSearch from "./useGoogleSearch"

import {Link} from 'react-router-dom'
import Search from "./pages/Search"
import SearchIcon from '@material-ui/icons/Search';
import Des from '@material-ui/icons/DescriptionRounded';
import ImageIcon from '@material-ui/icons/ImageSearchRounded';
import ShoppingIcon from '@material-ui/icons/ShoppingCartSharp';
import RoomIcon from '@material-ui/icons/Room';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function SearchPage (){
const [ {term} ,dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)
    
    console.log(data)
    // //
    return(
        <div className = "searchpage">
            <div className='searchpage_header'>
                <Link to ="/">
                    <img className="searchpage_logo"
                    
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
                    alt=""
                    />
               </Link>
                <div className='searchpage_headerBody'>
                    <Search hideButtons/>
                    <div className = "searchpage_options">
                        <div className = "searchpage_optionsLeft">
                            
                        
                        
                            <div className="searchpage_option">
                                <SearchIcon/>
                                <Link to ="/all">All</Link>
                            </div>
                            <div className="searchpage_option">
                                <Des/>
                                <Link to ="/news">News</Link>
                            </div>
                            <div className="searchpage_option">
                                <ImageIcon/>
                                <Link to ="/image">Image</Link>
                            </div>
                            <div className="searchpage_option">
                                <ShoppingIcon/>
                                <Link to ="/shopping">Shopping</Link>
                            </div>
                            <div className="searchpage_option">
                                <RoomIcon/>
                                <Link to ="/maps">Maps</Link>
                            </div>
                            <div className="searchpage_option">
                                <MoreHorizIcon/>
                                <Link to ="/more">More</Link>
                            </div>
                        </div>
                        <div className = "searchpage_optionsRight">
                            <div className="searchpage_option">
                             
                                <Link to ="/setting">Setting</Link>
                            </div>
                            <div className="searchpage_option">
                                
                                <Link to ="/tools">Tools</Link>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
            { term && (
            <div className ="searchpage_results">
                <p className = "searchpage_resultCount"> 
                About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term} 

                </p>
                {data?.items.map(item => (
                    <div className = "searchpage_result">
                       <a className="searchpage_resultLink" href ={item.link}>
                           {item.pagemap?.cse_image?.length>0 &&
                           item.pagemap?.cse_image[0]?.src &&(
                               <img className= "searchpage_resultImage"
                                 src={
                                    item.pagemap?.cse_image?.length>0 &&
                                    item.pagemap?.cse_image[0]?.src
                                    
                                  
                                    
                                 }
                                 alt=""
                                />
                           )}
                        {item.displayLink}
                        </a>
                        <a className ="searchpage_resultTitle" href ={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className ="searchPage_resultSnippet">
                            {item.snippet}
                        </p>

                            
                    </div>
                    ))
                }

            </div> )}

        </div>
    )

    
}
//b9a90c7e7026ffdd3



export default SearchPage

