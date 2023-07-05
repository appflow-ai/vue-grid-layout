module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        "transform-flow-comments",
        ["transform-remove-console", { "exclude": [ "error", "warn"] }]
    ]
}
