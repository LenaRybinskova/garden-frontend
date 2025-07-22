module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-undef': 'off',
    },
}

/*

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        '@it-incubator/eslint-config',
        'next/core-web-vitals' // Добавьте это для Next.js
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение для неиспользуемых переменных
        'no-undef': 'error', // Ошибка для необъявленных переменных
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
};*/
