import React, { useState,useEffect } from "react";
const useFindTheData=(resId)=>{
    const[newList,changeList]=useState(null);
     useEffect(()=>{
        fetchApi();
     },[])

     const fetchApi=async()=>{
        const responce=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER#")
        const json=await responce.json();
        changeList(json);
     };
     return newList;
}

export default useFindTheData;