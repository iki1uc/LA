export const MASTER = {

    async run() {

        const pool = await LA_POOL.load();
        const lage360 = LAGE.activate(pool);
        const quadrat = LAGE_QUADRAT.live(pool);
        const vec = VEC.compute(quadrat);

        return {
            pool,
            lage360,
            quadrat,
            vec,
            fuse_in: FUSE_IN.build(vec),
            fuse_out: FUSE_OUT.cut(vec)
        };
    }
};
