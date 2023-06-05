import axios from 'axios';
const baseUrl = 'http://localhost:3002/api/notes';
let token = ''
const setToken = (newToken) => {
    token = `bearer ${newToken}`


}
const getNotes = async () => {
    return axios.get(baseUrl);




}
const createNote = async (newNote) => {
    const config = {
        headers: { Authorization: token },
    }
    const request = axios.post(`${baseUrl}`, newNote, config);
    return request.then(response => response.data);
}
const updateNote = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
const deleteNote = async () => { }

const noteService = { getNotes, setToken, createNote, updateNote, deleteNote }

export default noteService;