import { useQuery } from "@tanstack/react-query"
import { getDecryptedMachines, getEncryptedMachines } from "../service/get-machines"

export const useGetEncryptedMachines = (shouldFetch,page,search) =>{

    return useQuery({
        queryKey:["encrypted-machines",page,search],
        queryFn:()=>getEncryptedMachines(page,search),
        enabled:shouldFetch
    })
}


export const useGetDecryptedMachines = (shouldFetch,page,search) =>{
    return useQuery({
        queryKey:["decrypted-machines",page,search],
        queryFn:()=>getDecryptedMachines(page,search),
        enabled:shouldFetch
    })
}