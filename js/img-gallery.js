import * as Vue from "./vue.js";

/**
 * Image gallery implementation handled by JSON
 */
export const ImgGallery = Vue.defineCustomElement({
    // language=HTML
    template: `
        <div class="row">
            <div class="column" v-for="image in images">
                <img-ba :src="image"></img-ba>
            </div>
        </div>
    `,

    // language=CSS
    styles: [
            `
            @import "css/default.css";
        `
    ],

    /* Component properties */
    props: {
        src: {
            type: String,
            default: ""
        }
    },

    /* Component data */
    data() {
        return {
            images: []
        }
    },

    /* Before setting the HTML */
    beforeMount() {
        fetch(this.src, {
            method: "get",
            accept: "application/json"
        }).then((response) => response.json()) //
            .then((json) => this.images = json);
    }
});