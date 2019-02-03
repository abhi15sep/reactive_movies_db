
export default function    getPopular (dataType, searchTerm, keyword, offset )  {
        let params = "";           
        
        const end_url =  "https://api.themoviedb.org/3" ;
        const api_key = 'cfe422613b250f702980a3bbf9e90716' 

        if(searchTerm === "search" && keyword !== '' ){
            
            params += "/search/"+ dataType +"?api_key=" + api_key + "&query=" + keyword + "&include_adult=false"
        }else{
            params += "/"+ dataType +"/popular?api_key=" + api_key 
        }

        params += "&language=en-US&page="+offset

        return fetch(end_url + params )
        .then(res =>  res.json())
    }
