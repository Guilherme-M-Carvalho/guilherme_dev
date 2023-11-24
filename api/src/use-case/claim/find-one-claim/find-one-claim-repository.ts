import AppDataSource from "../../../data-source";
import { ClaimEntity } from "../../../entity/claim.entity";
const repository = AppDataSource.getRepository(ClaimEntity)

interface FindOneClaimRepositoryProps {
    handle({id}: {id: number}): Promise<ClaimEntity | null>
}

export class FindOneClaimRepository implements FindOneClaimRepositoryProps{
     async handle({ id }: { id: number; }): Promise<ClaimEntity | null> {
        try {
            return await repository.findOne({
                where: {
                    id: id,
                    deleted: false
                }
            })
        } catch(err){
            throw new Error("Internal error!")
        }
    }
}