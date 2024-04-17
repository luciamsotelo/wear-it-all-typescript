export interface DBConfig {
        username: string;
        password: string;
        database: string;
        host: string;
        dialect: string;
    }
    
    export const config: { [key: string]: DBConfig } = {
        development: {
            username: "postgres",
            password: "Bef4E6Bb5eG6D1cG2B2E*gaCd6bB62eE",
            database: "railway",
            host: "monorail.proxy.rlwy.net",
            dialect: "postgres",
        },
        test: {
            username: "postgres",
            password: "Bef4E6Bb5eG6D1cG2B2E*gaCd6bB62eE",
            database: "railway",
            host: "monorail.proxy.rlwy.net",
            dialect: "postgres",
        },
        production: {
            username: "postgres",
            password: "Bef4E6Bb5eG6D1cG2B2E*gaCd6bB62eE",
            database: "railway",
            host: "monorail.proxy.rlwy.net",
            dialect: "postgres",
        },
    };
    



