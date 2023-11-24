import { FindOneClaimRepository } from "./find-one-claim-repository";

export class FindOneClaim{
    async handle({id}: {id: number}){
        const claim = await new FindOneClaimRepository().handle({id})
        if(!claim){
            throw new Error('{"message": "Alegação não existe"}')
        }
        return claim
    }
}