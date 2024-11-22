const apiUrl = import.meta.env.VITE_API_URL;

const FetchTrackerAPI = async ()=>{
   await fetch(apiUrl)
}

export default FetchTrackerAPI;