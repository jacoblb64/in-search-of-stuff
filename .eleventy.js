module.exports = (config) => {
    config.addPassthroughCopy("src/assets");

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "includes",
            data: "data",
        },
    };
};
