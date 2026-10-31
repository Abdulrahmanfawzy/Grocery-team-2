import AxiosInstance from "@/services/global.api"

const HotDealsService = async (limit:number , category_id?:number)=> {
    const res = await AxiosInstance.get(`/products/hot-deals?category_id=${category_id}&limit=${limit}`)
    console.log("HotDeal",res.data.data);
    
    return res.data.data
}

export default HotDealsService