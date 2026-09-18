import FreshFood from "@/assets/Fresh.svg"
import Bread from "@/assets/Bread.svg"
import Meats from "@/assets/Meat.svg"
import Drinks from "@/assets/Drinks.svg"
import Packed from "@/assets/packed.svg"
import HomeEssen from "@/assets/HomeEssen.svg"
import social from "@/assets/social.svg"
import type { ICategory } from "../types/types";
export const categories :ICategory[] =[ 
    {
        id:1 , 
        name:"Fresh Foods" ,
        Image:FreshFood
    } , 
    {
        id:2 , 
        name:"Bread& Dairy" ,
        Image:Bread 
    } , 
    {
        id:3, 
        name:"Meats & Seafood" ,
        Image:Meats 
    } , 
    {
        id:4, 
        name:"Drinks" ,
        Image:Drinks 
    } , 
    {
        id:5, 
        name:"Packed & Canned foods" ,
        Image:Packed 
    } , 
    {
        id:20, 
        name:"Home Essentials" ,
        Image:HomeEssen 
    } , 
    {
        id:6, 
        name:"Home Essentials" ,
        Image:social 
    } , 
]