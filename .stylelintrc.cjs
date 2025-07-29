module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-tailwindcss" // Добавьте это!
    ],
    rules: {
        // Отключаем правила, которые конфликтуют с Tailwind
        "at-rule-no-unknown": null,
        "selector-class-pattern": null,

        // Опциональные базовые правила
        "color-hex-length": "short",
        "color-no-invalid-hex": true
    }
};