import { useEffect, useState } from "react"
import { getAllHelps } from "../services/helps"

export function useHaveHelps() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchHelp = async () => {
            try {
                const friends = await getAllHelps()
                setData(friends)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchHelp()
    }, [])

    return {
        data, loading, error
    }

}