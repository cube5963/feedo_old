import axios from 'axios';
const api_url = 'https://feedobackend.mtayo.net';

export async function postFeedback(eva: number, comment: string) {
    console.log(`${api_url}/feedback/postfeedback/${eva}/${comment}`);
    await axios.get(`${api_url}/feedback/postfeedback/${eva}/${comment}`);
}

export async function postComment(comment: string) {
    await axios.get(`${api_url}/comment/postcomment/${comment}`);
}

export async function getFeedback() {
    const res = await axios.get(`${api_url}/feedback/getfeedback`);
    return res.data;
}

export async function getComment() {
    const res = await axios.get(`${api_url}/comment/getcomment`);
    return res.data;
}

export async function deleteAll(){
    await axios.get(`${api_url}/feedback/deletefeedback`);
    await axios.get(`${api_url}/comment/deletecomment`);
}