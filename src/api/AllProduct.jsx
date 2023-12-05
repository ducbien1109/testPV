import instance from "./Axios"

const getListProduct = {
    getAll(){
        return instance.get('/data')
    },
    getDetail(id){
        return instance.get(`/data/${id}`)
    },
    create(body){
        return instance.post('/data', body)
    }, 
    update(id, body){
        return instance.put('data', id, body)
    },
    delete(id){
        return instance.delete('/data',id)
    }
}
export default getListProduct