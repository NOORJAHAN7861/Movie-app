let baseUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=aae8d79a"

const api ={
    
   
   getMovieData: (query)=>{

        let queryStr = "&";
        
        if(query.s){
            queryStr += `s=${query.s}&`;
        }
          
        if(query.i){
            queryStr += `i=${query.i}&`;
        }
       
    let url = `${baseUrl}${queryStr}`;
    return fetch(url).then((res)=>res.json());
        },
        };
export default api;