import * as Vue from "./vue.js";

/**
 * Image display for images that have before and after
 */
export const ImgBA = Vue.defineCustomElement({
    // language=HTML
    template: `
        <figure>
            <span>{{description}} [{{year}}]</span>
            <div>
                <img :alt="description" :src="src + image + '.png'" @click="toggleImage()">
            </div>
            <figcaption>{{caption}}</figcaption>
        </figure>
    `,

    // language=CSS
    styles: [`
        @import "css/default.css";
        @import "css/img-ba.css";
    `],

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
            config: {},
            image: "after",
            description: "",
            caption: "",
            year: ""
        };
    },

    /* Component methods */
    methods: {
        /**
         * Toggles between before and after images
         */
        toggleImage: function () {
            this.image = this.image === "after" ? "before" : "after";
            this.year = this.config.year[this.image];
        }
    },

    /* Before the HTML is drawn */
    beforeMount() {
        fetch(this.src + "config.json", {
            method: "get",
            accept: "application/json"
        }).then((response) => response.json()) //
            .then((json) => {
                this.config = json;
                this.description = this.config.description;
                this.caption = this.config.caption;
                this.year = this.config.year[this.image];
            });
    }
});