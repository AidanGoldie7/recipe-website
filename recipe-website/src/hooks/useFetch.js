import { useState, useEffect } from "react"

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(null)


  const postData = (postData) => {
    //set options function
    setOptions({
      //method calling the POST data function 
      method: "POST",
      //request headers, type of info being sent, in this case its JSON data
      headers: {
        "Content-Type": "application/json"
      },
      //POST data, a recipe in this case, stringify turns the JSON data into a string ready to post
      body: JSON.stringify(postData)
    })
  }


  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (fetchOptions) => {
      setIsPending(true)
      
      try {
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    //if value of method is GET
    if (method === "GET") {
      //fetch data as normal
      fetchData()
    }

    //if value of method is POST and there are options present
    if (method === "POST" && options) {
      //fetch the data with the fetch options
      fetchData(options)
    }

    

    return () => {
      controller.abort()
    }

  }, [url, options, method])

  return { data, isPending, error, postData}
}