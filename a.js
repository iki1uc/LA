export const LA_POOL = {

    async load() {
        return {
            HOME: await this.fetch("HOME"),
            ORT: await this.fetch("ORT"),
            GE: await this.fetch("GE"),
            LA: await this.fetch("LA")
        };
    },

    async fetch(repo) {
        return `LOAD:${repo}:OK`;
    }
};
