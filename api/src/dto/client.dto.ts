export class ClientDto {
    handleFindOne({id}: {id: number}){
        if(!id){
            throw new Error('{"field": "id", "message": "ID inválido"}')
        }
        return {
            id
        }
    }
}