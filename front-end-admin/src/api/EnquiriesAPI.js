import {useState, useEffect} from 'react'
import axios from 'axios'


function EnquiryAPI() {
    const [enquiry, setEnquiry] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getEnquiry = async () => {
            const res = await axios.get(`/api/enquiry?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            setEnquiry(res.data.enquiry)
            setResult(res.data.result)
        }
        getEnquiry()
    },[callback, category, sort, search, page])
    
    return {
        enquiry: [enquiry, setEnquiry],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default EnquiryAPI
