const api = "https://v2.jokeapi.dev/joke/Programming?type=single";
const jokeBtn = document.getElementById("joke-btn");
const jokeTitle = document.getElementById("quote-title");

jokeBtn.addEventListener('click',()=>{
      const fetchAPI = async () => {
        try {
            const fetchAPI = await fetch(api);
            const resAPI = await fetchAPI.json();
            jokeTitle.textContent = resAPI?.joke
        }
        catch {
            return null;
        }
    }
    fetchAPI();
})

