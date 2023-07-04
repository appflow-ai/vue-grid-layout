module.exports = {
    presets: [
        '@vue/app'
    ],
    "plugins": [
        "transform-flow-comments",
        ["transform-remove-console", { "exclude": [ "error", "warn"] }]
    ]
}
