import AxiosInstance from "@/services/global.api"

const BestSelles = async ({limit}:{limit:number} )=> {
    const res = await AxiosInstance.get(`products/best-sellers?${limit}`)
    console.log("BestSelles",res.data.data);
    return res.data.data
}

export default BestSelles