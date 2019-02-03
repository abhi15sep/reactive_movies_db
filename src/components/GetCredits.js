export default function getCredits (dataType, id )  {
    let params = "";           
    
    const end_url =  "https://api.themoviedb.org/3/" ;
    const api_key = 'cfe422613b250f702980a3bbf9e90716' 

    params += dataType +"/" + id + "/credits?api_key=" + api_key + "&language=en-US&page=1"    

    return fetch(end_url + params )
        .then(res =>  res.json());
}
