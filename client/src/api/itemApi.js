import { useEffect, useState } from "react"
import requests from "../services/requests.js";
import useAuth from "../hooks/useAuth.js";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/golfitems`

export const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        requests.get(baseUrl)
            .then(setItems)
    }, [])

    return { items };
}

export const useItem = (itemId) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        requests.get(`${baseUrl}/${itemId}`)
            .then(setItem);
    }, [itemId])

    return { item };
}

export const useLatestItems = () => {
    const [latestItems, setLatestItems] = useState([]);

    useState(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 5,
            select: '_id,img,price,name,quantity,brand,model'
        });

        requests.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestItems);
    }, []);

    return { latestItems }
}

export const useCreateItem = () => {
    const { requests } = useAuth();

    const create = (itemData) =>
        requests.post(baseUrl, itemData)

    return { create }
}

export const useEditItem = () => {
    const { requests } = useAuth();

    const edit = (itemId, itemData) => {
        requests.put(`${baseUrl}/${itemId}`, { ...itemData, _id: itemId });
    }
    return { edit }
}

export const usePatchItem = () => {
    const { requests } = useAuth();

    const singleEdit = (itemId, itemData) => {
        requests.patch(`${baseUrl}/${itemId}`, { ...itemData, _id: itemId });
    }
    return {singleEdit}
}

export const useDeleteItem = () => {
    const { requests } = useAuth();

    const deleteItem = (itemId) =>
        requests.delete(`${baseUrl}/${itemId}`);

    return { deleteItem }
}