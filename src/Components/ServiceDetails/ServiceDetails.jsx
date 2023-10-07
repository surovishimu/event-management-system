import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServiceInfo from "./SingleServiceInfo";


const ServiceDetails = () => {
    const [serviceInfo, setServiceInfo] = useState({})
    const { id } = useParams();

    const singleService = useLoaderData();


    useEffect(() => {
        const findService = singleService?.find(aService => aService.id == id)
        setServiceInfo(findService);
    }, [id, singleService])

    return (
        <div className="">
            <SingleServiceInfo serviceInfo={serviceInfo}></SingleServiceInfo>
        </div>
    );
};

export default ServiceDetails;