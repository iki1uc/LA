export const MASTER = {

    async run() {

        // 1) Datenpool laden
        const pool = await LA_POOL.load();

        // 2) LAGE 360° aktivieren
        const lage360 = LAGE.activate(pool);

        // 3) Quadrat live machen
        const quadrat = LAGE_QUADRAT.live(pool);

        // 4) VECtor berechnen
        const vec = VEC.compute(quadrat);

        // 5) 3D-Drucker (rein fräsen)
        const fuse_in = FUSE_IN.build(vec);

        // 6) CNC-Fräser (raus fräsen)
        const fuse_out = FUSE_OUT.cut(vec);

        // 7) Rückgabe
        return {
            pool,
            lage360,
            quadrat,
            vec,
            fuse_in,
            fuse_out
        };
    }
};
