import { WorkOrderEntity } from "../../../entity/work-order.entity";
import AppDataSource from "../../../data-source";
import { QuotationEntity } from "../../../entity/quotation.entity";

const repository = AppDataSource.getRepository(WorkOrderEntity)
const repositoryQuotation = AppDataSource.getRepository(QuotationEntity)

interface CreateWorkOrderRepositoryProps {
    handleCreate(work: WorkOrderEntity): Promise<WorkOrderEntity>
    handleValidationQuotation(id: number): Promise<QuotationEntity | null>
}

export class CreateWorkOrderRepository implements CreateWorkOrderRepositoryProps{
    async handleCreate(work: WorkOrderEntity): Promise<WorkOrderEntity> {
        try {
            return await repository.save(work)
        } catch (err){
            throw new Error ('internal error')
        }
    }
    async handleValidationQuotation(id: number): Promise<QuotationEntity | null> {
        try {
            return await repositoryQuotation.findOne({
                where: {
                        id: id
                },
            })
        } catch (err){
            throw new Error ('internal error')
        }
    }
}