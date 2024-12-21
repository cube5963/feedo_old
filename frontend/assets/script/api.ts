import axios from 'axios';
const api_url = 'https://77f2349e-6e78-df84-a904-8e668f21ca41.mtayo.net';
//const api_url = 'http://localhost:5000';

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