export const FUSE_IN = {

    build(vec) {
        return `FUSE-IN:${vec.VEC.join("|")}`;
    }
};
export const FUSE_OUT = {

    cut(vec) {
        return `FUSE-OUT:${vec.VEC.join("|")}`;
    }
};
