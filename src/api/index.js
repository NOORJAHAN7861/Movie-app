const api ={
    baseurl: "https://www.omdbapi.com/?i=tt3896198&apikey=aae8d79a",
   
   getMovieData: (query)=>{

        let queryStr = "&";
        
        if(query.s){
            queryStr += `s=${query.s}&`;
        }
          
        if(query.i){
            queryStr += `i=${query.i}&`;
        }
       
    let url = `${api.baseUrl}${queryStr}`;
    return fetch(url).then((res)=>Response.json);
        },
        };
export default api;