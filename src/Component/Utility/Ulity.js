import { toast } from "react-toastify";


const getStoreListAdd = () => {
    const searchList = localStorage.getItem('read-list')
    if (searchList) {
        const searchStr = JSON.parse(searchList)
        return searchStr
    }
    else {
        return [];
    }

}

const getMarkAsReadAddList = (id) => {
    const storeListStr = getStoreListAdd()
    if (storeListStr.includes(id)) {
        console.log(id, 'already exist');
    }
    else {
        storeListStr.push(id)
        const addListStr = JSON.stringify(storeListStr)
        localStorage.setItem('read-list', addListStr)
        toast('awesome book this book is adding')
    }
}

// wish list add

const getWishListAdd = () => {
    const searchList = localStorage.getItem('wish-list')
    if (searchList) {
        const searchStr = JSON.parse(searchList)
        return searchStr
    }
    else {
        return [];
    }
}

const getMarkAsWishList = (id) => {
    const storeListStr = getStoreListAdd()
    if (storeListStr.includes(id)) {
        console.log(id, 'already exist');
    }
    else {
        storeListStr.push(id)
        const addListStr = JSON.stringify(storeListStr)
        localStorage.setItem('read-list', addListStr)
    }
}

export { getMarkAsReadAddList , getStoreListAdd}