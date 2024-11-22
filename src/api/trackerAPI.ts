const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);

const FetchTrackerAPI = async ()=>{
   await fetch(apiUrl)
}

export default FetchTrackerAPI;