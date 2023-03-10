const axios = require('axios').default;

export default class ImagesAPI {
    constructor() {
        this.ENDPOINT = `https://pixabay.com/api/`;
        this.inputValue = "";
        this.page = 1;
        this.totalHits = 0;
    }

    async getImages() {
        const fetchImages = await axios.get(`${this.ENDPOINT}?key=33272979-e2ed5d1fd8a361bfa8249b6ef&q=${this.inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`);
        this.totalHits = fetchImages.data.totalHits;
        return fetchImages;
    }

    get query() {
        return this.inputValue;
    }

    set query(value) {
        return this.inputValue = value;
    }

    resetPage() {
        this.page = 1;
    }

    incrementPage() {
        this.page += 1;
    }
}