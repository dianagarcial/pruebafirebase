import { firebaseStorage } from "./config";
import {ref, uploadByTESResumable, listAll} from "firebase/storage"
import { async } from "@firebase/util";

export const upload = (file) => {
    if(!file){
        alert("Ingrese el archivo primero")

    }
    const storageRef =ref(firebaseStorage, `/files/${file.name}`)
    const uploadTask = uploadByTESResumable(storageRef, file);

    return uploadTask
}

export const getAll=async () =>{
    const listRef= ref(firebaseStorage, '/files/');
    return listAll(listRef)
}